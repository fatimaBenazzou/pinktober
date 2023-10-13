import { createSlice } from "@reduxjs/toolkit";

const modalInit: OpenableModalI = {
	title: "", // current  title state management
	isOpen: false, // modal state management for opening closing
	bodyType: "", // modal content management
	size: "", // modal content management
	extraObject: {},
};
export const modalSlice = createSlice({
	name: "modal",
	initialState: modalInit,
	reducers: {
		openModal: (state, action: { payload: ModalI }) => {
			const { title, bodyType, extraObject, size } = action.payload;
			state.isOpen = true;
			state.bodyType = bodyType;
			state.title = title;
			state.size = size || "md";
			state.extraObject = extraObject || {};
		},

		closeModal: (state) => {
			state.isOpen = false;
			state.bodyType = "";
			state.title = "";
			state.extraObject = {};
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
