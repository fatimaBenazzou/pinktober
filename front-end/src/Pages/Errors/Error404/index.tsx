import { useEffect } from "react";

import FaceFrownIcon from "@heroicons/react/24/solid/FaceFrownIcon";
import { useAppDispatch } from "@/hooks";
import { setPageTitle } from "@/app/context/header";

function Error404() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setPageTitle({ title: "" }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="h-4/5 bg-base-200 flex w-full items-center justify-center">
			<div className="max-w-md text-secondary text-center">
				<FaceFrownIcon className="h-48 w-48 inline-block" />
				<h1 className="text-5xl  font-bold">404 - Not Found</h1>
			</div>
		</div>
	);
}

export default Error404;
