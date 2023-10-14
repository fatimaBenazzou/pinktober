import { useServerNotification } from "@/hooks";
import { Notification1 } from "iconsax-react";
//import NotificationsList from "@/Components/NotificationsList";
import { Link } from "react-router-dom";

//import { ThemeToggle } from "./ThemeToggle";
export function Notifications() {
	const { notifications } = useServerNotification();
	return (
		<Link to={"/app/notifications"} type="button" tabIndex={120} className={` my-auto normal-case btn btn-circle bg-base-100`}>
			<div className="indicator">
				<Notification1 variant="Broken" className="w-6 h-6 text-primary" />
				{notifications.length > 0 ? (
					<span className="indicator-item badge badge-secondary badge-sm text-primary">{notifications.length}</span>
				) : null}
			</div>
		</Link>
	);
}
