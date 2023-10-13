import { MediaURL, ProjectMaker, PROJECT_Name, MakersWebsite, DEV_Email, InDev } from "../config/Env.js";
import { ExitCodes } from "../config/Errors.js";
import { SendEmail } from "./Email.js";
import { formatString } from "./Strings.js";
import { ErrorEmail } from "../config/Templates.js";
import { globalLogger as logger } from "./Logger.js";

export async function exitProcess(code: ICode, moreData: Record<string, string> = {}) {
	const exitCode = code || ExitCodes.ERROR_GENERIC;
	const message = formatString(exitCode.message, moreData);

	logger.error(message, { code: exitCode.code, type: "ExitCode" });

	console.error(`📛 Exiting with code: ${exitCode.code}`);
	console.error("❌ Reason:", message);
	if (!InDev) {
		const email = ErrorEmail
			? {
					html: formatString(ErrorEmail, {
						MediaURL, //     <!--{MediaURL} static file path @ -->
						ProjectMaker, // <!--{ProjectMaker} company name -->
						ErrorCode: exitCode.code, // <!--{ErrorCode} error code number -->
						ErrorMessage: message, // <!--{ErrorMessage} error message -->
						MakersWebsite, // <!--{MakersWebsite} website URL -->
						ProjectName: PROJECT_Name, // <!--{ProjectName} project name -->
					}),
			  }
			: { text: "❌ Back-end shutdown unexpectedly " + exitCode.code };
		await SendEmail({
			to: DEV_Email,
			subject: `${PROJECT_Name} Back-end shutdown unexpectedly`,
			...email,
		})
			.then(() => {
				process.exit(exitCode.code);
			})
			.catch((err) => {
				console.error("❌ => Sending email on exit :", err);
			});
	} else {
		process.exit(exitCode.code);
	}
}

/*
interface IProcessEvents {
    onExit: NodeJS.ExitListener;
}
function ProcessEvents(events?: IProcessEvents) {}
ProcessEvents();
 */
