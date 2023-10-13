import { createSlice } from "@reduxjs/toolkit";

const initial_state: ServerNotificationI[] = [];
const serverNotification = createSlice({
	name: "serverNotification",
	initialState: initial_state,
	reducers: {
		pushNotification: (state, action: { payload: { notification: ServerNotificationI } }) => {
			state.unshift(action.payload.notification);
			return state;
		},
		initNotifications: (state, action: { payload: { notifications: ServerNotificationI[] } }) => {
			state = action.payload.notifications;
			return state;
		},
	},
});

export const { pushNotification, initNotifications } = serverNotification.actions;

export default serverNotification.reducer;
