import path from "path";

/**
 * @description Checks the value of an environment field and logs the result.
 *
 * @param {string} envField - The name of the environment field to check.
 * @param {string} replacedBy - The value to replace if the environment field is undefined.
 * @returns {string} The value of the environment field or the replacement value if undefined.
 */
function CheckEnv(envField: string, replacedBy: string): string {
	const value = process.env[envField];
	if (value) {
		console.log(`🟢 Checking env field => '${envField}' : ${process.env[envField]}`);
		return value;
	}
	console.log(`🟡 Checking env field => '${envField}' : 'undefined' Replaced by => ${replacedBy}`);
	return replacedBy;
}

console.log("---------------------------- Replaceable ENV ----------------------------");

/**
 * @description The current working directory of the project.
 */
export const CWD = process.cwd();
console.log(`🔵 The project started from ${CWD}`);

/**
 * @description Flag indicating if the application is in development mode.
 * @default true
 */
export const InDev = CheckEnv("IN_PROD", "false") === "false";

/**
 * @description The default port number if the 'BACK_PORT' environment variable is not set.
 * @default "3400"
 */
export const PORT = CheckEnv("BACK_PORT", "3400");

/**
 * @description The default port number if the 'BACK_PORT' environment variable is not set.
 * @default "3400"
 */
export const DOMAIN = CheckEnv("DOMAIN", "jesuph.me");

/**
 * @description The URL of the backend. If 'BACK_URL' is not set, it defaults to 'http://localhost:PORT' in development mode and 'https://jesuph.me' in production mode.
 * @default value (InDev ? "http://localhost:" + PORT : "https://back.{DOMAIN}")
 */
export const BACK_URL = CheckEnv("BACK_URL", InDev ? "http://localhost:" + PORT : `https://back.${DOMAIN}`);

/**
 * @description The URL of the frontend app. If 'FRONT_URL' is not set, it defaults to 'http://localhost:PORT' in development mode and 'https://${DOMAIN}' in production mode.
 * @default value (InDev ? "http://localhost:" + PORT : "https://{DOMAIN}")
 */
export const FRONT_URL = CheckEnv("FRONT_URL", InDev ? "http://localhost:" + PORT : `https://${DOMAIN}`);

/**
 * @description The URL of the frontend of the admin app. If 'ADMIN_URL' is not set, it defaults to 'http://localhost:PORT' in development mode and 'https://admin.${DOMAIN}' in production mode.
 * @default value (InDev ? "http://localhost:" + PORT : "https://{DOMAIN}")
 */
export const ADMIN_URL = CheckEnv("ADMIN_URL", InDev ? "http://localhost:" + PORT : `https://admin.${DOMAIN}`);

/**
 * @description The route used for serving media files.
 * @default "/files"
 */
export const MediaRoute = "/files";

/**
 * @description The URL for serving media files.
 * @default `${BACK_URL}${MediaRoute}`
 */
export const MediaURL = `${BACK_URL}${MediaRoute}`;

/**
 * @description The URL of the main page of the platform.
 * @default "FRONT_URL"
 */
export const MAIN_URL = CheckEnv("MAIN_URL", FRONT_URL);

/**
 * @description The URL for redirecting to the UPS integration page.
 * @default `${ADMIN_URL}/app/integration/ups`
 */
export const UpsIntegrationRedirectUrl = CheckEnv("Ups_Integration_Redirect_Url", `${ADMIN_URL}/app/integration/ups`);
/**
 * @description The URL for redirecting to the UPS integration page.
 * @default InDev ? "https://wwwcie.ups.com" : "https://onlinetools.ups.com"
 */
export const UPSApiURL = CheckEnv("UpsApiURL", InDev ? "https://wwwcie.ups.com" : "https://onlinetools.ups.com");
export const shipmentUPSversion = "v1801";
/**
 * @description The name of the project maker or organization.
 * @default "Jesuph Jobs"
 */
export const ProjectMaker = CheckEnv("PROJECT_Maker", "Jesuph Jobs");

/**
 * @description The name of the project.
 * @default "Project Name"
 */
export const PROJECT_Name = CheckEnv("PROJECT_Name", "Project Name");

/**
 * @description The website URL of the project maker or organization.
 * @default "https://jesuph-jobs.com"
 */
export const MakersWebsite = CheckEnv("PROJECT_Maker_Website", "https://jesuph-jobs.com");

/**
 * @description The developer's email address.
 * @default "madadiyoucef@outlook.com"
 */
export const DEV_Email = CheckEnv("DEV_Email", "madadiyoucef@outlook.com");

/**
 * @description The port used for email communication.
 * @default "587"
 */
export const EmailPort = CheckEnv("BACK_EmailPort", "587");

/**
 * @description The host used for email communication.
 * @default "smtp.mailgun.org"
 */
export const EmailHost = CheckEnv("BACK_EmailHost", "smtp.mailgun.org");
/**
 * @description The contact email for response.
 * @default "smtp.mailgun.org"
 */
export const EmailContact = CheckEnv("BACK_EmailContact", "madadiyoucef@outlook.com");

/**
 * @description The root directory where log files are stored.
 * @default value path.join(CWD, "logs")
 */
export const LogsRoot = CheckEnv("LogsRoot", path.join(CWD, "logs"));

/**
 * @description The root directory where static files are stored.
 * @default value path.join(CWD, "media")
 */
export const StaticRoot = CheckEnv("STATIC", path.join(CWD, "media"));

/**
 * @description The cache age of static files
 * @default 2592000
 */
export const Static_Cache_Age = Number(CheckEnv("Static_Cache_Age", "2592000"));

/**
 * @description The maximum duration (in seconds) before the application times out and exits.
 */
export const TimeOutExit = Number(CheckEnv("TimeOutExit", "0"));

console.log("--------------------------------------------------------\n");
