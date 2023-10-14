import Logger from "../utils/Logger";
export type IAuthLogs =
	| "LOGIN_SUCCESS"
	| "MOBILE_LOGIN_SUCCESS"
	| "LOGIN_ERROR_GENERIC"
	| "LOGIN_ERROR_INVALID_INPUT"
	| "LOGIN_ERROR_USERNAME_NOT_FOUND"
	| "LOGIN_ERROR_INCORRECT_PASSWORD_FOUND"
	| "LOGIN_ERROR_DISABLED_ACCOUNT"
	| "USER_ISN_T_LOGGED"
	| "USER_ISN_T_ENABLED"
	| "USER_ISN_T_CLIENT"
	| "USER_ISN_T_CLIENT_DELIVERY_MAN"
	| "USER_ISN_T_ADMIN"
	| "ADMIN_DOES_NOT_HAVE_ROLE"
	| "USER_ISN_T_DELIVERY_MAN"
	| "ERROR_SESSION_CREDENTIALS"
	| "ERROR_WHILE_CHECKING_CREDENTIALS"
	| "GENERIC_CREDENTIALS_ERROR"
	| "AUTH_BACK"
	| "LOGOUT_SUCCESS"
	| "CLIENT_NOT_FOUND"
	| "Sakura_INTEGRATION_NOT_FOUND"
	| "Sakura_INTEGRATION_TOKEN_STILL_VALID"
	| "Sakura_INTEGRATION_TOKEN_REFRESHED"
	| "Sakura_INTEGRATION_TOKEN_REFRESH_FAILED"
	| "RESET_SUCCESS"
	| "RESET_PASSWORD_SUCCESS"
	| "RESET_ERROR_GENERIC"
	| "PIN_CODE_CHANGED";

export const authLogs: IErrors<IAuthLogs> = {
	LOGIN_SUCCESS: {
		code: 0,
		message: 'User "{username} : {lastName} {firstName}" has logged in successfully.',
		type: "LOGIN_SUCCESS",
	},
	MOBILE_LOGIN_SUCCESS: {
		code: 1,
		message: 'User "{username} : {lastName} {firstName}" has logged in successfully from mobile.',
		type: "MOBILE_LOGIN_SUCCESS",
	},
	LOGIN_ERROR_GENERIC: {
		code: 2,
		message: "Error occurred while login in user '{username}': {error}",
		type: "LOGIN_ERROR_GENERIC",
	},
	LOGIN_ERROR_INVALID_INPUT: {
		code: 3,
		message: "Invalid input for Log in : {input}",
		type: "LOGIN_ERROR_INVALID_INPUT",
	},
	LOGIN_ERROR_USERNAME_NOT_FOUND: {
		code: 4,
		message: "Failed to login username doesn't exist {username}.",
		type: "LOGIN_ERROR_USERNAME_NOT_FOUND",
	},
	LOGIN_ERROR_INCORRECT_PASSWORD_FOUND: {
		code: 5,
		message: "Failed to login password incorrect {username}.",
		type: "LOGIN_ERROR_INCORRECT_PASSWORD_FOUND",
	},
	LOGIN_ERROR_DISABLED_ACCOUNT: {
		code: 6,
		message: "Failed to login to a disabled account {username}.",
		type: "LOGIN_ERROR_DISABLED_ACCOUNT",
	},
	USER_ISN_T_LOGGED: {
		code: 7,
		message: "You aren't logged in to do this action.",
		type: "USER_ISN_T_LOGGED",
	},
	USER_ISN_T_ENABLED: {
		code: 8,
		message: "You aren't allowed to log in to this account.",
		type: "USER_ISN_T_ENABLED",
	},
	USER_ISN_T_CLIENT: {
		code: 9,
		message: "Logged In user isn't a client.",
		type: "USER_ISN_T_CLIENT",
	},
	USER_ISN_T_CLIENT_DELIVERY_MAN: {
		code: 9,
		message: "Logged In user isn't a client or Delivery man.",
		type: "USER_ISN_T_CLIENT_DELIVERY_MAN",
	},
	USER_ISN_T_ADMIN: {
		code: 10,
		message: "Logged In user isn't a admins.",
		type: "USER_ISN_T_ADMIN",
	},
	ADMIN_DOES_NOT_HAVE_ROLE: {
		code: 11,
		message: "Logged In admin doesn't have a role yet.",
		type: "ADMIN_DOES_NOT_HAVE_ROLE",
	},
	USER_ISN_T_DELIVERY_MAN: {
		code: 12,
		message: "Logged In user isn't a delivery man.",
		type: "USER_ISN_T_DELIVERY_MAN",
	},
	ERROR_SESSION_CREDENTIALS: {
		code: 13,
		message: "Session doesn't seem correct there is no token.",
		type: "ERROR_SESSION_CREDENTIALS",
	},
	ERROR_WHILE_CHECKING_CREDENTIALS: {
		code: 14,
		message: "Couldn't create a correct session.",
		type: "ERROR_WHILE_CHECKING_CREDENTIALS",
	},
	GENERIC_CREDENTIALS_ERROR: {
		code: 15,
		message: "Generic error happened while loading credentials.",
		type: "GENERIC_CREDENTIALS_ERROR",
	},
	AUTH_BACK: {
		code: 16,
		message: 'User "{username} : {lastName} {firstName}" has logged back successfully.',
		type: "AUTH_BACK",
	},
	LOGOUT_SUCCESS: {
		code: 17,
		message: 'User "{username} : {lastName} {firstName}" has logged out successfully.',
		type: "LOGOUT_SUCCESS",
	},
	CLIENT_NOT_FOUND: {
		code: 18,
		message: "Client {clientId} not found",
		type: "CLIENT_NOT_FOUND",
	},
	Sakura_INTEGRATION_NOT_FOUND: {
		code: 19,
		message: "Sakura Integration not found for {clientId}",
		type: "Sakura_INTEGRATION_NOT_FOUND",
	},
	Sakura_INTEGRATION_TOKEN_STILL_VALID: {
		code: 20,
		message: "Sakura Integration token is still valid for {clientId}",
		type: "Sakura_INTEGRATION_TOKEN_STILL_VALID",
	},
	Sakura_INTEGRATION_TOKEN_REFRESHED: {
		code: 21,
		message: "Sakura Integration token has been refreshed for {clientId}",
		type: "Sakura_INTEGRATION_TOKEN_REFRESHED",
	},
	Sakura_INTEGRATION_TOKEN_REFRESH_FAILED: {
		code: 22,
		message: "Sakura Integration token has failed to refresh for {clientId}",
		type: "Sakura_INTEGRATION_TOKEN_REFRESH_FAILED",
	},
	RESET_SUCCESS: {
		code: 23,
		message: "Reset password email sent successfully for {email}",
		type: "RESET_SUCCESS",
	},
	RESET_ERROR_GENERIC: {
		code: 24,
		message: "Reset password email sent successfully for {email} with error {error}",
		type: "RESET_ERROR_GENERIC",
	},
	RESET_PASSWORD_SUCCESS: {
		code: 25,
		message: "Password has changed successfully for {user}",
		type: "RESET_PASSWORD_SUCCESS",
	},
	PIN_CODE_CHANGED: {
		code: 25,
		message: "The pin code of this user : {user} has changed successfully.",
		type: "PIN_CODE_CHANGED",
	},
} as const;

export default authLogs;
export const authLogger = new Logger("auth");
