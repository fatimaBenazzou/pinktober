import { NextFunction, Request, Response } from "express";

import { ErrorResponse } from "../utils/Response";
import { HttpCodes } from "../config/Errors";
import authLogs from "./Users.logs";
import { Verify } from "../functions/jwt";
import usersModel from "./Users";
import { MyRequest } from "../types/Express";
export function clearToken(tokenName: string, res: Response) {
	res.cookie(tokenName, "", {
		sameSite: "none",
		secure: true,
		httpOnly: true,
		expires: new Date(1),
	});
}
function extractAuth(req: Request) {
	//console.log({ userAgent: req.headers["user-agent"], isMobileApp, authHeader: req.headers["authorization"] });
	return req.cookies.token;
}

export const checkLogs = async (req: MyRequest, res: Response, next: NextFunction) => {
	const token = extractAuth(req);

	// TODO : ADD The access to the device ID
	// const deviceId = req.headers["X-Device-ID"];
	// console.log("Device ID:", deviceId);
	req.user = null;
	if (token) {
		try {
			const payload = Verify(token);
			if (!payload || !payload._id)
				return ErrorResponse(
					res,
					HttpCodes.Unauthorized.code,
					authLogs.ERROR_WHILE_CHECKING_CREDENTIALS.message,
					authLogs.ERROR_WHILE_CHECKING_CREDENTIALS
				);
			const { _id } = payload;

			const user = await usersModel.findOne({ _id }).select({ password: 0 });
			if (!user) {
				// TODO : Log details for security
				return ErrorResponse(
					res,
					HttpCodes.Unauthorized.code,
					authLogs.ERROR_WHILE_CHECKING_CREDENTIALS.message,
					authLogs.ERROR_WHILE_CHECKING_CREDENTIALS
				);
			}
			req.user = user;
		} catch (e) {
			if (req.headers["user-kind"] === "Admin") clearToken("adminToken", res);
			else clearToken("token", res);

			return ErrorResponse(res, HttpCodes.InternalServerError.code, authLogs.ERROR_WHILE_CHECKING_CREDENTIALS.message, e);
		}
	}

	return next();
};

export const isLoggedIn = (req: MyRequest, res: Response, next: NextFunction) => {
	if (req.user) {
		if (req.user.enabled) return next();
		return ErrorResponse(res, HttpCodes.Unauthorized.code, authLogs.USER_ISN_T_ENABLED.message, authLogs.USER_ISN_T_ENABLED);
	}
	ErrorResponse(res, HttpCodes.Unauthorized.code, authLogs.USER_ISN_T_LOGGED.message, authLogs.USER_ISN_T_LOGGED);
};
