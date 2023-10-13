import { useAppDispatch, useAppSelector } from "./redux";

export default function useServerNotification() {
	const dispatch = useAppDispatch();
	return {
		notifications: useAppSelector((state) => state.serverNotification),
		initNotifications: (notifications: ServerNotificationI[]) => {
			dispatch({ type: "serverNotification/initNotifications", payload: { notifications } });
		},
	};
}
