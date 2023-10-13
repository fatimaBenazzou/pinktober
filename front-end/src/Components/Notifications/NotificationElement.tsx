import { useNotification } from "@/hooks";
import { ReactNode, useEffect, useState } from "react";

const NotificationStyling: Record<NotificationType, { style: string; icon: ReactNode; buttonStyle: string }> = {
	success: {
		style: "alert-success",
		buttonStyle: "",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		),
	},
	info: {
		style: "",
		buttonStyle: "",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				></path>
			</svg>
		),
	},
	warning: {
		style: "alert-warning",
		buttonStyle: "",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
				/>
			</svg>
		),
	},
	error: {
		style: "alert-error",
		buttonStyle: "",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
	},
};

export default function NotificationElement({ id, kind, title, description, timeOut }: NotificationI) {
	const { closeNotification } = useNotification();
	const [open, setOpen] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setOpen(false);
		}, timeOut - 1000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		if (!open)
			setTimeout(() => {
				closeNotification(id);
			}, 1000);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open]);

	return (
		<div
			className={`alert shadow-lg overflow-hidden ${NotificationStyling[kind].style} ${
				open ? "[transform:rotateY(360deg)]" : "[transform:rotateY(270deg)]"
			} transition-all duration-300 origin-right`}
			data-notification={id}
		>
			{NotificationStyling[kind].icon}
			<div>
				<h3 className="font-bold">{title}</h3>
				<div className="text-xs">{description}</div>
			</div>
			<button
				onClick={() => {
					setOpen(false);
					setTimeout(() => {
						closeNotification(id);
					}, 1000);
				}}
				className={`btn btn-sm btn-${kind} pointer-events-auto`}
			>
				OK
			</button>
		</div>
	);
}
