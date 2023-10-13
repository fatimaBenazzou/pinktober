import { useEffect } from "react";

import { setPageTitle } from "@/app/context/header";
import Calendar from "@/features/calendar";
import { useAppDispatch } from "@/hooks";

function InternalPage() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setPageTitle({ title: "Calendar" }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <Calendar />;
}

export default InternalPage;
