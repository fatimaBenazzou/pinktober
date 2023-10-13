declare interface ResponseI<T = unknown> {
	status: string;
	data: T;
	message: string;
}
declare interface AuthLinkI {
	authorizationLink: string;
}
interface ErrorResponseI {
	status: string;
	message: string;
	error: unknown;
}
