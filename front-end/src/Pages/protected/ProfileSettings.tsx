import { useEffect } from "react";

import { setPageTitle } from "@/app/context/header";
import ProfileSettings from "@/features/settings/profilesettings";
import { useAppDispatch } from "@/hooks";

function InternalPage() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setPageTitle({ title: "Settings" }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <ProfileSettings />;
}

export default InternalPage;
