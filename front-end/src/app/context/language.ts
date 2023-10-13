import { createSlice } from "@reduxjs/toolkit";

const languages = ["EN", "FR", "AR"];
const storedLanguage = localStorage.getItem("Language") || "EN";
const initial: LangI = languages.includes(storedLanguage) ? (storedLanguage as LangI) : "EN";

const Language = createSlice({
	name: "Language",
	initialState: initial,
	reducers: {
		setLang: (state, action) => {
			localStorage.setItem("Language", action.payload);
			state = action.payload ?? "EN";
			return state;
		},
	},
});

export const { setLang } = Language.actions;

export default Language.reducer;
