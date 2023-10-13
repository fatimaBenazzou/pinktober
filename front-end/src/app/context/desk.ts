import { createSlice } from "@reduxjs/toolkit";
const localDesk = localStorage.getItem("Desk");
const default_desk: DeskStoreI = {
	current: "",
	list: [],
};
const initial_state: DeskStoreI = localDesk ? JSON.parse(localDesk) : default_desk;

const desk = createSlice({
	name: "desk",
	initialState: initial_state,
	reducers: {
		setDesks: (state, action: { type: string; payload: DeskModelI[] }) => {
			const desk = {
				list: action.payload,
				current:
					state.current && action.payload.filter((d) => d._id === state.current).length === 0
						? action.payload[0]._id
						: state.current,
			};
			localStorage.setItem("Desk", JSON.stringify(desk));
			state.list = desk.list;
			state.current = desk.current;
			return state;
		},
		setCurrentDesk: (state, action: { type: string; payload: string }) => {
			localStorage.setItem("Desk", JSON.stringify({ ...state, current: action.payload }));
			state.current = action.payload;
			return state;
		},
		removeDesk: (state) => {
			localStorage.removeItem("Desk");
			state = default_desk;
			return state;
		},
	},
});

export const { setDesks, setCurrentDesk, removeDesk } = desk.actions;

export default desk.reducer;
