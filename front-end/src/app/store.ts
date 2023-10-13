import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import Api from "./backend";
import user from "./context/user";
import notifications from "./context/notifications";
import rightDrawer from "@/app/context/rightDrawer";
import headerSlice from "@/app/context/header";
import language from "@/app/context/language";
import modal from "@/app/context/modal";
import lead from "@/app/context/lead";
import theme from "@/app/context/theme";
import desk from "@/app/context/desk";
import serverNotification from "@/app/context/serverNotification";

// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
	reducer: {
		language,
		modal,
		header: headerSlice,
		rightDrawer,
		[Api.reducerPath]: Api.reducer,
		user,
		notifications,
		lead,
		theme,
		desk,
		serverNotification
	},
	middleware: (defaultMiddleware) => defaultMiddleware().concat(Api.middleware),
});
export const dispatch = store.dispatch;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
