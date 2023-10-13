import { apiUrl } from "../backend";
import { addNotification } from "../context/notifications";
import { pushNotification } from "../context/serverNotification";
import { dispatch } from "../store";
import messaging from "./messaging";
import { getToken, onMessage } from "firebase/messaging";
export const requestPermission = () => {
	Notification.requestPermission().then((permission) => {
		if (permission === "granted") {
			// check if token is already generated

			return getToken(messaging, {
				vapidKey: import.meta.env.VITE_APP_FIREBASE_VAPKEY,
			})
				.then((currentToken) => {
					if (currentToken) {
						// save it to local storage or indexDB
						localStorage.setItem("deviceToken", currentToken);

						// Track the token -> client mapping, by sending to backend server
						fetch(`${apiUrl}/notification/subscribe`, {
							mode: "cors", // no-cors, *cors, same-origin
							cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
							credentials: "include", // include, *same-origin, omit
							headers: {
								"Content-Type": "application/json",
							},
							method: "POST",
							body: JSON.stringify({ deviceToken: currentToken }),
						})
							.then(async (r) => {
								if (r.status === 208) console.log("already subscribed");
								else {
									const response = (await r.json()) as ResponseI;
									console.log(response.message);
								}
							})
							.catch((e) => {
								console.error(e);
							});
						// show on the UI that permission is secured
					} else {
						console.error("Failed to generate the app registration token.");
					}
				})
				.catch((err) => {
					console.error("An error occurred when requesting to receive the token.", err);
				});
		} else {
			console.error("User Permission Denied.");
		}
	});
};
export const unsubscribeNotification = async () => {
	const deviceToken = localStorage.getItem("deviceToken");
	if (!deviceToken) return;
	await fetch(`${apiUrl}/notification/subscribe`, {
		mode: "cors", // no-cors, *cors, same-origin
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "include", // include, *same-origin, omit
		headers: {
			"Content-Type": "application/json",
		},
		method: "DELETE",
		body: JSON.stringify({ deviceToken }),
	})
		.then(async (r) => {
			if (r.status === 400) console.log("already unsubscribed");
			else {
				const response = (await r.json()) as ResponseI;
				console.log(response.message, response.data);
			}
		})
		.catch((e) => {
			console.error(e);
		});
	localStorage.removeItem("deviceToken");
};

onMessage(messaging, (payload) => {
	const notification: NotificationI = {
		id: Date.now() + "",
		title: payload?.notification?.title || "Unknown Error",
		description: payload?.notification?.body || "Please try again",
		kind: (payload?.data?.type as NotificationType) || "info",
		timeOut: 20 * 1000,
	};
	const serverNotification: ServerNotificationI = {
		_id: Date.now() + "_" + Math.random(),
		title: notification.title,
		body: notification.description,
		type: notification.kind,
		user: null,
		reference: {
			id: payload.data?.referenceId || undefined,
			type: (payload.data?.referenceType as ServerNotificationI["reference"]["type"]) || "Notification",
		},
		createdAt: Date.now() as unknown as Date,
	};

	dispatch(addNotification({ notification }));
	dispatch(pushNotification({ notification: serverNotification }));
});
