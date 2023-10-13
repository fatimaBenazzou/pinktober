import { readTextFile } from "../utils/File";

export const RedirectPage = readTextFile("./templates/Pages/redirect.html");
export const ErrorEmail = readTextFile("./templates/Emails/ErrorEmail.html");
export const ResetEmail = readTextFile("./templates/Emails/ResetEmail.html");

// contracts
