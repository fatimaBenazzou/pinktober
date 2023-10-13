import { Application } from "express";
import indexRouter from "./index.router.js";
import authRouter from "./auth.router.js";
import profileRouter from "./profile.router.js";
import notificationRouter from "./notification.router.js";
import { checkLogs, isLoggedIn } from "../models/Users.middleware.js";
import chatRouter from "./chat.router.js";

export default function SetRouters(app: Application) {
	app.use("/", indexRouter);
	app.use("/auth", authRouter);
	app.use("/chat",chatRouter)
	app.use("/profile", checkLogs, isLoggedIn, profileRouter);

	// clients or deliveryman
	app.use("/notification", checkLogs, isLoggedIn, notificationRouter);
}