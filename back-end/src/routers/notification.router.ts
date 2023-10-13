import { Router } from "express";
import {
	createNotification,
	getNotifications,
	subscribeNotification,
	unsubscribeNotification,
} from "../models/Notification.controllers.js";
const notificationRouter = Router();

notificationRouter.route("/").get(getNotifications).post(createNotification);
notificationRouter.route("/subscribe").post(subscribeNotification).delete(unsubscribeNotification);

export default notificationRouter;
