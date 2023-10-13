import { useNotification } from "@/hooks";
import NotificationElement from "./NotificationElement";

function Notification() {
	const { notifications } = useNotification();

	return (
		<div className="toast toast-bottom toast-end z-[1000]">
			{notifications.map((notification, i) => (
				<NotificationElement key={i} {...notification} />
			))}
		</div>
	);
}

export default Notification;
