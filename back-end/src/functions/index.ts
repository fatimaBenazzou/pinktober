import { CookieOptions, Request } from "express";

export function validateEmail(email: string) {
	if (email) return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
	return true;
}
export function isMobileRequest(req: Request) {
	return /Dart.+|PostmanRuntime.+/i.test(req.headers["user-agent"] || "");
}
export function validatePhone(phone: string) {
	return /^(00213|\+213|0)(5|6|7)[0-9]{8}$/.test(phone);
}
export function getCookiesSettings(stay: boolean = false): CookieOptions {
	return {
		sameSite: "none",
		secure: true,
		httpOnly: true,
		...(stay ? { expires: new Date(new Date().getTime() + 720000000) } : {}),
	};
}
