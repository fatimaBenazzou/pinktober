import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
	return typeof error === "object" && error != null && "status" in error;
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(error: unknown): error is { message: string } {
	return typeof error === "object" && error !== null && "message" in error && typeof error.message === "string";
}

export function getError(name: string, err: unknown, replaceMessage: string) {
	let message = replaceMessage;
	if (isFetchBaseQueryError(err)) {
		if (typeof err.data === "object" && err.data && "message" in err.data) {
			message = (err.data.message as string) ? (err.data.message as string) : replaceMessage;
		}
	} else if (isErrorWithMessage(err)) {
		message = err.message;
	}
	return { name, message };
}
