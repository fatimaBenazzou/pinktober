import { useEffect } from "react";

import Charts from "@/features/charts";
import { setPageTitle } from "@/app/context/header";
import { useAppDispatch } from "@/hooks";

function InternalPage() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setPageTitle({ title: "Analytics" }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <Charts />;
}

export default InternalPage;
