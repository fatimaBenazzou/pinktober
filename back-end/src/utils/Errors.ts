import { Request, Response, NextFunction } from "express";
import { InDev } from "../config/Env.js";
import { ExitCodes, HttpCodes } from "../config/Errors.js";

export function getErrorMessageByCode(code: number): string | undefined {
	for (const key in ExitCodes) {
		if (ExitCodes.hasOwnProperty(key) && ExitCodes[key as IExitCodes].code === code) {
			return ExitCodes[key as IExitCodes].message;
		}
	}
	return undefined; // Code not found in ExitCodes
}

export class AppError extends Error {
	constructor(public message: string, public statusCode: number) {
		super(message);
		this.statusCode = statusCode;
		this.name = this.constructor.name;
		Error.captureStackTrace(this, this.constructor);
	}
}
export class AppHttpError extends AppError {
	cause: string;
	constructor(public httpError: ICode, cause: string) {
		super(httpError.message, httpError.code);
		this.cause = cause;
		this.name = this.constructor.name;
		Error.captureStackTrace(this, this.constructor);
	}
}

export function errorMiddleware(error: AppError, req: Request, res: Response, next: NextFunction) {
	const status = error.statusCode || HttpCodes.InternalServerError.code;
	const message = error.message || HttpCodes.InternalServerError.message;
	const errorDetails = InDev ? error : undefined;

	res.status(status).json({
		status,
		message,
		error: errorDetails,
	});
}
/* function getHttpErrorMessageByCode(code: string): string | undefined {
    return HttpCodes[code]?.message;
}
 */
