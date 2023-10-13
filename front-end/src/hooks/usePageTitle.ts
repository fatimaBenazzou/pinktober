import { setPageTitle } from "@/app/context/header";

import { useAppDispatch } from ".";
import { useEffect } from "react";

function usePageTitle(title = "") {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setPageTitle({ title }));
		return () => {
			dispatch(setPageTitle({ title: "" }));
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [title]);
}

export default usePageTitle;
