interface SuccessResponseI {
	status: string;
	data: unknown;
	message: string;
}
interface ErrorResponseI {
	status: string;
	message: string;
	code: number;
	error: unknown;
}
