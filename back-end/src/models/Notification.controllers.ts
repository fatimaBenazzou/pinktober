import { Request, Response } from "express";
import notificationModel, { NotificationI } from "./Notification";
import { ErrorResponse, SuccessResponse } from "../utils/Response";
import { HttpCodes } from "../config/Errors";
import { FCM_ADMIN } from "../settings";
import { UserD } from "./Users";
import { Types } from "mongoose";
import { MyRequest } from "../types/Express";

// get notifications for client or DeliveryMan
export const getNotifications = async (req: MyRequest, res: Response) => {
	try {
		const limit = Number(req.query.limit) || Infinity;
		const createdSince = new Date(Number(req.query.createdSince) || 0);
		const user = req.user as UserD;
		const notifications = await notificationModel
			.find({ user: user._id, createdAt: { $gte: createdSince } })
			.sort("-createdAt")
			.limit(limit)
			.exec();
		return SuccessResponse(res, HttpCodes.OK.code, notifications, `Fetched notifications successfully for ${user._id}.`);
	} catch (error) {
		return ErrorResponse(res, HttpCodes.InternalServerError.code, "Failed to fetch notifications.", error);
	}
};
// create a new notification and send it to a all devices in the deviceTokens array
export const createNotification = async (req: MyRequest, res: Response) => {
	try {
		const user = req.user as UserD;
		const { title, body, type, reference } = req.body;
		if (user.deviceTokens.length === 0) return ErrorResponse(res, HttpCodes.BadRequest.code, "User has no device tokens.");
		const notification = await notificationModel.create();

		sendNotifications(user.deviceTokens, { title, body, type, user: user._id as unknown as Types.ObjectId, reference })
			.then((response) => {
				console.log(response); // TODO: audit log response if error
			})
			.catch((error) => {
				console.error(error); // TODO: audit log error
			});
		return SuccessResponse(res, HttpCodes.Created.code, notification, "Created notification successfully.");
	} catch (error) {
		return ErrorResponse(res, HttpCodes.InternalServerError.code, "Failed to create notification.", error);
	}
};
// send notifications to a specific device token (or array of device tokens) using FCM
export async function sendNotifications(deviceTokens: string[], { title, body, type, imageUrl, user, reference }: NotificationI) {
	await notificationModel.create({ title, body, type, user, reference });
	const payload = {
		notification: {
			title,
			body,
			imageUrl, // TODO: change default notification url
		},
		data: {
			type,
			referenceId: reference.id?.toString() || "",
			referenceType: reference.type || "Notification",
		},
	};
	if (deviceTokens.length > 0) return FCM_ADMIN.messaging().sendEachForMulticast({ tokens: deviceTokens, ...payload });
	else return Promise.resolve("There is no tokens to send notifications to.");
}
// subscribe a device token to a client or DeliveryMan
export const subscribeNotification = async (req: MyRequest, res: Response) => {
	try {
		const user = req.user as UserD;
		const { deviceToken } = req.body;
		if (user.deviceTokens.includes(deviceToken))
			return ErrorResponse(res, HttpCodes.AlreadyReported.code, "Device token already subscribed.");
		user.deviceTokens.push(deviceToken);
		await user.save();
		return SuccessResponse(res, HttpCodes.OK.code, null, "Subscribed device token successfully.");
	} catch (error) {
		return ErrorResponse(res, HttpCodes.InternalServerError.code, "Failed to subscribe device token.", error);
	}
};
// unsubscribe a device token from a client or DeliveryMan
export const unsubscribeNotification = async (req: MyRequest, res: Response) => {
	try {
		const user = req.user as UserD;
		const { deviceToken } = req.body;
		if (!user.deviceTokens.includes(deviceToken)) return ErrorResponse(res, HttpCodes.BadRequest.code, "Device token not subscribed.");
		user.deviceTokens = user.deviceTokens.filter((token) => token !== deviceToken);
		await user.save();
		return SuccessResponse(res, HttpCodes.OK.code, null, "Unsubscribed device token successfully.");
	} catch (error) {
		return ErrorResponse(res, HttpCodes.InternalServerError.code, "Failed to unsubscribe device token.", error);
	}
};
