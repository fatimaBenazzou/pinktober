import { setNavigation } from "@/app/context/navigation";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from ".";

export default function useNavigation(enable?: boolean) {
	const dispatch = useAppDispatch(),
		isOpen = useAppSelector((state) => state.navigation);
	function setIsOpen(value?: boolean) {
		if (value === undefined) return;
		dispatch(setNavigation(value));
	}
	useEffect(() => {
		setIsOpen(enable);
		return () => {
			setIsOpen(true);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [enable]);
	return {
		isOpen,
		setIsOpen,
	};
}
