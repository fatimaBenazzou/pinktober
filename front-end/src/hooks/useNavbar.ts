import { setNavbar } from "@/app/context/navbar";
import { useAppDispatch, useAppSelector } from ".";

export default function useNavbar() {
	const dispatch = useAppDispatch(),
		isOpen = useAppSelector((state) => state.navbar);
	function setIsOpen(value: boolean) {
		dispatch(setNavbar(value));
	}

	return {
		isOpen,
		setIsOpen,
	};
}
