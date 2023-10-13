import { createSlice } from "@reduxjs/toolkit";

const initial: boolean = false;

const NavBar = createSlice({
	name: "NavBar",
	initialState: initial,
	reducers: {
		setNavbar: (state, action: { type: string; payload: boolean }) => {
			state = action.payload;
			return state;
		},
	},
});

export const { setNavbar } = NavBar.actions;

export default NavBar.reducer;
