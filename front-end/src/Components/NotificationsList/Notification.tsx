
import { Notification1 } from "iconsax-react";
import { Link } from "react-router-dom";
// import { useNotification } from "../../hooks";

type Props = {
	notification: ServerNotificationI;
	color: string;
};

const formatTime = (milliseconds: number): string => {
	const millisecondsPerSecond = 1000;
	const secondsPerMinute = 60;
	const minutesPerHour = 60;
	const hoursPerDay = 24;
	const daysPerWeek = 7;

	const seconds = Math.floor(milliseconds / millisecondsPerSecond);
	const minutes = Math.floor(seconds / secondsPerMinute);
	const hours = Math.floor(minutes / minutesPerHour);
	const days = Math.floor(hours / hoursPerDay);
	const weeks = Math.floor(days / daysPerWeek);

	if (weeks > 0) {
		return `${weeks} week${weeks > 1 ? "s" : ""}`;
	} else if (days > 0) {
		return `${days} day${days > 1 ? "s" : ""}`;
	} else if (hours > 0) {
		return `${hours} h${hours > 1 ? "s" : ""}`;
	} else if (minutes > 0) {
		return `${minutes} m${minutes > 1 ? "s" : ""}`;
	} else {
		return `${seconds} s${seconds !== 1 ? "s" : ""}`;
	}
};
const NotificationType: Record<ServerNotificationI["reference"]["type"], string> = {
	Product: "products",
	Shipment: "shipments",
	Issue: "issues",
	Notification: "notifications",
};
const Notification: React.FC<Props> = ({ notification, color }: Props) => {
	const { title, body, createdAt, reference } = notification;

	return (
		<Link
			to={
				reference.id === undefined
					? "#"
					: reference.type === "Notification"
					? "/profile/notifications"
					: `/app/${NotificationType[reference.type]}/${reference.id}`
			}
			className={`alert border hover:border-black rounded-2xl border-transparent ${color}`}
		>
			<div className="w-12 h-12 rounded-full bg-[#B2D7D4] flex justify-center items-center">
				<Notification1 className="w-4 h-4" />
			</div>
			<div>
				<h3 className="font-bold">{title}</h3>
				<div className="text-xs">{body}</div>
			</div>
			<p>{formatTime(Date.now() - new Date(createdAt).getTime())}</p>
		</Link>
	);
};

export default Notification;
