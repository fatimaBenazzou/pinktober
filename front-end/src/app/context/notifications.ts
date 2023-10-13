import { createSlice } from "@reduxjs/toolkit";

const initial_state: NotificationI[] = [];
const notifications = createSlice({
	name: "notifications",
	initialState: initial_state,
	reducers: {
		addNotification: (state, action: { payload: { notification: NotificationI } }) => {
			const {
				payload: { notification },
			} = action;
			state.push(notification);
			return state;
		},
		removeNotification: (state, { payload: id }: { payload: string }) => {
			state = state.filter((notification) => notification.id !== id);
			return state;
		},
		initNotification: (state) => {
			state = initial_state;
			return state;
		},
	},
});

export const { addNotification, removeNotification, initNotification } = notifications.actions;

export default notifications.reducer;
