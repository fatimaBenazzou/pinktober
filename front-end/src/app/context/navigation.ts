import { createSlice } from "@reduxjs/toolkit";

const initial: boolean = false;

const navigation = createSlice({
	name: "navigation",
	initialState: initial,
	reducers: {
		setNavigation: (state, action: { type: string; payload: boolean }) => {
			state = action.payload;
			return state;
		},
	},
});

export const { setNavigation } = navigation.actions;

export default navigation.reducer;
