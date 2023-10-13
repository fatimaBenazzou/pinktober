import { useEffect } from "react";

import { setPageTitle } from "@/app/context/header";
import Dashboard from "@/features/dashboard/index";
import { useAppDispatch } from "@/hooks";

function InternalPage() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setPageTitle({ title: "Dashboard" }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <Dashboard />;
}

export default InternalPage;
