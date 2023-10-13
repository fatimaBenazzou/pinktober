import { useServerNotification } from "@/hooks";
import { Notification1 } from "iconsax-react";
//import NotificationsList from "@/Components/NotificationsList";
import { Link } from "react-router-dom";

//import { ThemeToggle } from "./ThemeToggle";
export function Notifications() {
	const { notifications } = useServerNotification();
	return (
		<Link to={"/app/notifications"} type="button" tabIndex={120} className={` my-auto normal-case `}>
			<div className="indicator">
				<Notification1 variant="Broken" className="w-7 h-7" />
				{notifications.length > 0 ? (
					<span className="indicator-item badge badge-secondary badge-sm">{notifications.length}</span>
				) : null}
			</div>
		</Link>
	);
}
