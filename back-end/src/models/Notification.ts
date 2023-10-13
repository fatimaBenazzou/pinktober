import { Document, Model, Schema, Types, model } from "mongoose";
const required = true;
export interface NotificationI {
	title: string;
	body: string;
	type: "success" | "info" | "warning" | "error";
	user: Types.ObjectId;
	imageUrl?: string;
	expiresAt?: Date;
	reference: { id?: Types.ObjectId; type: "Product" | "Shipment" | "Issue" | "Notification" };
}
export interface NotificationD extends Document<NotificationI>, NotificationI {}
export type NotificationModel = Model<NotificationI>;

const notificationSchema = new Schema<NotificationI, NotificationModel>(
	{
		title: { type: String, required },
		body: { type: String, required },
		user: { type: Schema.Types.ObjectId, ref: "User", required },
		type: { type: String, required },
		imageUrl: { type: String, default: undefined },
		reference: {
			id: { type: Schema.Types.ObjectId },
			type: { type: String, enum: ["Product", "Shipment", "Issue", "Notification"], default: "Notification" },
		},
	},
	{ timestamps: true }
);
// resetSchema add expire index to createdAt after 40 days
notificationSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3456000 });
const notificationModel = model<NotificationI, NotificationModel>("Notification", notificationSchema);
export default notificationModel;
