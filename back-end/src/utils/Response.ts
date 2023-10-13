import { Error, MongooseError } from "mongoose";
import { HttpCodes } from "../config/Errors.js";
import { Response as ExpressResponse } from "express";
import { MongoError } from "mongodb";
// Helper function to extract the duplicate key from the error message
function extractDuplicateKey(errorMessage: string): string | null {
	const match = errorMessage.match(/index:\s+([^\s]+)/);
	return match ? match[1] : "unknown";
}
export function ErrorResponse(res: ExpressResponse, code: number, errorMessage: string, error?: unknown) {
	const response: ErrorResponseI =
		error && error instanceof Error.ValidationError && error.errors
			? {
					status: "error",
					message: Object.values(error.errors)
						.map((err) => err.message)
						.join(","),
					code: HttpCodes.BadRequest.code,
					error,
			  }
			: error && error instanceof MongoError && error.code === 11000
			? {
					status: "error",
					message: `These keys already exist [${extractDuplicateKey(error.message)}], it's not allowed to use duplicate keys`,
					code: HttpCodes.BadRequest.code,
					error,
			  }
			: {
					status: "error",
					message: errorMessage,
					code: code,
					error,
			  };
	res.status(response.code).send(response);
}
export function SuccessResponse(res: ExpressResponse, code: number, data: unknown, message = "Successful", status = "success") {
	const response: SuccessResponseI = {
		status,
		data,
		message,
	};
	res.status(code).send(response);
}
