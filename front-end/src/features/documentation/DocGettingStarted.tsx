import { useEffect } from "react";
// import TitleCard from "@/Components/Cards/TitleCard"
import { setPageTitle } from "@/app/context/header";
import GettingStartedNav from "./components/GettingStartedNav";
// import ReadMe from "./components/GettingStartedContent"
import GettingStartedContent from "./components/GettingStartedContent";
import { useAppDispatch } from "@/hooks";

function GettingStarted() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setPageTitle({ title: "Documentation" }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="bg-base-100  flex overflow-hidden  rounded-lg" style={{ height: "82vh" }}>
				<div className="flex-none p-4">
					<GettingStartedNav activeIndex={1} />
				</div>

				<div className="grow pt-16  overflow-y-scroll">
					<GettingStartedContent />
				</div>
			</div>
		</>
	);
}

export default GettingStarted;
