import { SliceCaseReducers, createSlice } from "@reduxjs/toolkit";

function setThemeInWeb(theme: ThemesI) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

export const themes = ["luxury", "pinktober-theme"] as const;
export type ThemesI = (typeof themes)[number];

const loadedTheme = localStorage.getItem("theme");
const initial_state: ThemesI =
    loadedTheme && themes.includes(loadedTheme as ThemesI)
        ? (loadedTheme as ThemesI)
        : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "luxury"
        : "pinktober-theme";

setThemeInWeb(initial_state);

const theme = createSlice<ThemesI, SliceCaseReducers<ThemesI>, "theme">({
    name: "theme",
    initialState: initial_state,
    reducers: {
        setTheme: (state, action: { type: string; payload: ThemesI }) => {
            state = action.payload ?? "pinktober-theme";
            setThemeInWeb(state);
            return state;
        },
    },
});

export const { setTheme } = theme.actions;

export default theme.reducer;
