import { useAppDispatch, useAppSelector } from "./redux";
import { openRightDrawer, closeRightDrawer } from "@/app/context/rightDrawer";

function useRightDrawer() {
	const dispatch = useAppDispatch(),
		drawerData = useAppSelector((state) => state.rightDrawer).extraObject;
	return {
		drawerData,
		openModal: (drawerData: DrawerI) => {
			dispatch(openRightDrawer(drawerData));
		},
		closeModal: () => {
			dispatch(closeRightDrawer());
		},
	};
}
export default useRightDrawer;
