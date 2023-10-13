import mongoose from "mongoose";
import { MONGODB_NAME, MONGODB_URI } from "./config/CheckableEnv.js";
import { exitProcess } from "./utils/Process.js";
import { ExitCodes } from "./config/Errors.js";
import { setTimeout } from "timers/promises";

import { InDev, TimeOutExit } from "./config/Env.js";
import admin from "firebase-admin";

if (InDev) mongoose.set("debug", true);

/**
 * The MongoDB database connection instance.
 * @type {mongoose.Connection}
 */
export const db = mongoose
	.connect(MONGODB_URI, { dbName: MONGODB_NAME })
	.then(async () => {
		console.log(`🗄️  ==> '${MONGODB_NAME}' DB is Connected.`);
	})
	.catch((err) => exitProcess(ExitCodes.ERROR_DATABASE_CONNECTION));
mongoose.connection.on("error", (err) => exitProcess(ExitCodes.ERROR_DATABASE_CONNECTION, { error: err.message }));

/**
 * System class for managing application startup and error handling.
 */
export default class System {
	/**
	 * ProcessError method for exiting the application after a specified time.
	 * @param {number} second - The time in seconds after which the process will be terminated.
	 */
	static async ProcessError(second: number) {
		// Timeout exit
		setTimeout(second * 1000).then(() => {
			exitProcess(ExitCodes.ERROR_GENERIC, { error: "Manual termination after timeout" });
		});
	}

	/**
	 * Start method for initializing the application and dependencies.
	 */
	static async Start() {
		await db;
		const promises: Promise<unknown>[] = [];
		if (TimeOutExit > 0) promises.push(System.ProcessError(TimeOutExit));
		await Promise.all(promises);
	}
}
