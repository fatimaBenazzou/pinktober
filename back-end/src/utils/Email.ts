import { EnvEmitter } from "./Events.js";
import { EmailHost, EmailPort } from "../config/Env.js";
import nodemailer, { Transporter } from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import Logger from "./Logger.js";
import { EmailPass, EmailUser } from "../config/CheckableEnv.js";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { exitProcess } from "./Process.js";
import { ExitCodes } from "../config/Errors.js";

const mailLogger = new Logger("mail");

class EmailQueue<T extends unknown = unknown, X extends unknown = unknown> {
	queue: Promise<any>;
	transporter: Transporter<SMTPTransport.SentMessageInfo> | null = null;
	constructor() {
		let $this = this;
		this.queue = new Promise((resolve, reject) => {
			EnvEmitter.addListener("loaded", () => {
				const transporter = nodemailer.createTransport({
					// @ts-ignore
					host: EmailHost,
					port: EmailPort, // Change to the appropriate port for your SMTP server
					secure: false, // Set to true if your SMTP server requires a secure connection (SSL/TLS)
					auth: {
						user: EmailUser,
						pass: EmailPass,
					},
				});
				transporter.verify(function (error, success) {
					if (error) {
						reject(error);
					} else {
						console.log("Server is ready to send emails");
						$this.transporter = transporter;
						resolve(transporter);
					}
				});
			});
		}).catch((err) => {
			exitProcess(ExitCodes.EMAIL_ERROR_GENERIC, { error: err?.message || String(err) });
		});
	}
	addEmail(options: Mail.Options) {
		return (this.queue = this.transporter!.sendMail({ ...options, from: EmailUser }).then((info) => {
			mailLogger.info("Email sent successfully!", info);
		}));
	}
}
const emailQueue = new EmailQueue();
export async function SendEmail(options: Mail.Options) {
	return emailQueue.addEmail(options);
}
