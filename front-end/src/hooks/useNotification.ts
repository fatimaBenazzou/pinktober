import { getError } from "@/utils/error";
import { addNotification, removeNotification, initNotification } from "../app/context/notifications";
import { useAppDispatch, useAppSelector } from "./redux";
const defaultTimeOut = 15 * 1000;
const useNotification = () => {
	const dispatch = useAppDispatch();
	return {
		Notify: (
			title: string,
			description: string,
			{ kind = "success", timeOut = defaultTimeOut }: { kind?: NotificationType; timeOut?: number } = {
				kind: "success",
				timeOut: defaultTimeOut,
			}
		) => {
			const notification: NotificationI = { id: Date.now() + "" + Math.random(), title, description, kind, timeOut };
			dispatch(
				addNotification({
					notification,
				})
			);
		},
		notifications: useAppSelector((state) => state.notifications),
		closeNotification: (id: string) => {
			dispatch(removeNotification(id));
		},
		emptyNotifications: () => {
			dispatch(initNotification());
		},

		Errofy: (title: string, err: unknown, replaceMessage = "Please try again", timeOut: number = defaultTimeOut): void => {
			console.error("⚠️ => Error : ", err);
			const error = getError(title, err, replaceMessage);
			const notification: NotificationI = {
				id: Date.now() + "" + Math.random(),
				title: error.name ?? "Unknown Error",
				description: error.message,
				kind: "error",
				timeOut,
			};
			dispatch(addNotification({ notification }));
		},
	};
};
export default useNotification;
export type UseNotificationI = ReturnType<typeof useNotification>;
