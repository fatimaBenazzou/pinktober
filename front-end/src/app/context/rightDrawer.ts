import { createSlice } from "@reduxjs/toolkit";
const modalInit: OpenableDrawerI = {
	header: "", // current  title state management
	isOpen: false, // modal state management for opening closing
	bodyType: "", // modal content management
	extraObject: {},
};
export const rightDrawerSlice = createSlice({
	name: "rightDrawer",
	initialState: modalInit,
	reducers: {
		openRightDrawer: (state, action: { payload: DrawerI }) => {
			const { header, bodyType, extraObject } = action.payload;
			state.isOpen = true;
			state.bodyType = bodyType;
			state.header = header;
			state.extraObject = extraObject || {};
		},

		closeRightDrawer: (state) => {
			state.isOpen = false;
			state.bodyType = "";
			state.header = "";
			state.extraObject = {};
		},
	},
});

export const { openRightDrawer, closeRightDrawer } = rightDrawerSlice.actions;

export default rightDrawerSlice.reducer;
