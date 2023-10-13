importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

//the Firebase config object
const firebaseConfig = {
	apiKey: "AIzaSyDfdtQxRhWQlxF44ti-OhtkQrTN1p7QkFg",
	authDomain: "adroit-producer-301223.firebaseapp.com",
	projectId: "adroit-producer-301223",
	storageBucket: "adroit-producer-301223.appspot.com",
	messagingSenderId: "517582990421",
	appId: "1:517582990421:web:2ef190ca41ffbbf90ff8dc",
	measurementId: "G-ZJ9VT3JZBD",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
	console.log("Received background message ", payload);
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		vibrate: [200, 100, 200, 100, 200, 100, 200],
		tag: payload.data.referenceId,
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", (event) => {
	console.log("On notification click: ", event.notification.tag);
	event.notification.close();

	// This looks to see if the current is already open and
	// focuses if it is
	event.waitUntil(
		clients
			.matchAll({
				type: "window",
			})
			.then((clientList) => {
				for (const client of clientList) {
					if (client.url === "/app/shipments/" + event.notification.tag && "focus" in client) return client.focus();
				}
				if (clients.openWindow) return clients.openWindow("/app/shipments/" + event.notification.tag);
			})
	);
});
