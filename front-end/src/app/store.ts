import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import Api from "./backend";
import user from "./context/user";
import notifications from "./context/notifications";
import rightDrawer from "@/app/context/rightDrawer";
import headerSlice from "@/app/context/header";
import language from "@/app/context/language";
import modal from "@/app/context/modal";
import theme from "@/app/context/theme";
import serverNotification from "@/app/context/serverNotification";
import navbar from "@/app/context/navbar";
import navigation from "@/app/context/navigation";

export const store = configureStore({
	reducer: {
		language,
		modal,
		header: headerSlice,
		rightDrawer,
		[Api.reducerPath]: Api.reducer,
		user,
		notifications,
		navbar,
		navigation,
		theme,
		serverNotification
	},
	middleware: (defaultMiddleware) => defaultMiddleware().concat(Api.middleware),
});
export const dispatch = store.dispatch;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
