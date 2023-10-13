type NotificationType = "error" | "success" | "warning" | "info";

interface NotificationI {
	id: string;
	title: string;
	description: string;
	kind: NotificationType;
	timeOut: number;
}

declare interface ServerNotificationI {
	_id: string;
	title: string;
	body: string;
	type: string;
	user: Types.ObjectId;
	imageUrl?: string;
	createdAt: Date;
	reference: { id?: string; type: "Product" | "Shipment" | "Issue" | "Notification" };
}
