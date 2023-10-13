import { EnvEmitter } from "../utils/Events";
import { exitProcess } from "../utils/Process";
import { InDev } from "./Env";
import { ExitCodes } from "./Errors";
export function CheckEnv(Env_Field: string, exitCode: ICode) {
	if (!process.env[Env_Field]) {
		console.log(`🔴 Failed on loading env field => '${Env_Field}'`);
		exitProcess(exitCode, { field: Env_Field });
	}
	console.log(`🟢 Checking env field => '${Env_Field}' : ${process.env[Env_Field]}`);
	return process.env[Env_Field] as string;
}

// checkable env
console.log("---------------------------- Necessary ENV ----------------------------");
export const SECRET = CheckEnv("BACK_SECRET", ExitCodes.ENV_ERROR_COULD_NOT_FIND_FIELD);
export const MONGODB_URI = CheckEnv("BACK_MONGODB_URI", ExitCodes.ENV_ERROR_COULD_NOT_FIND_FIELD);
export const MONGODB_NAME = CheckEnv("BACK_MONGODB_NAME", ExitCodes.ENV_ERROR_COULD_NOT_FIND_FIELD);
export const JWT_SECRET = CheckEnv("BACK_SECRET", ExitCodes.ENV_ERROR_COULD_NOT_FIND_FIELD);
export const EmailUser = CheckEnv("BACK_EmailUser", ExitCodes.ENV_ERROR_COULD_NOT_FIND_FIELD);
export const EmailPass = CheckEnv("BACK_EmailPass", ExitCodes.ENV_ERROR_COULD_NOT_FIND_FIELD);
export const ORIGINS = !InDev ? CheckEnv("CORPS_ORIGINS", ExitCodes.ENV_ERROR_COULD_NOT_FIND_FIELD).split(" ") : [];
console.log("--------------------------------------------------------\n");
EnvEmitter.emit("loaded");
