import { ExitCodes } from "../config/Errors.js";
import { exitProcess } from "./Process.js";

import fs from "fs";

// Function to read the HTML file and return its contents as a string
export function readTextFile(filePath: string): string {
	try {
		const html = fs.readFileSync(filePath, "utf8");
		return html;
	} catch (error) {
		exitProcess(ExitCodes.ERROR_COULD_NOT_READ_FILE, { filePath });
		return "";
	}
}
