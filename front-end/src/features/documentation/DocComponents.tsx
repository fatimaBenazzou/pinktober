import { useEffect } from "react";
// import TitleCard from "@/Components/Cards/TitleCard"
import { setPageTitle } from "@/app/context/header";
import DocComponentsNav from "./components/DocComponentsNav";
// import ReadMe from "./components/GettingStartedContent"
import DocComponentsContent from "./components/DocComponentsContent";
import { useAppDispatch } from "@/hooks";
// import FeaturesNav from "./components/FeaturesNav"
// import FeaturesContent from "./components/FeaturesContent"

function DocComponents() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setPageTitle({ title: "Documentation" }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="bg-base-100  flex overflow-hidden  rounded-lg" style={{ height: "82vh" }}>
				<div className="flex-none p-4">
					<DocComponentsNav activeIndex={1} />
				</div>

				<div className="grow pt-16  overflow-y-scroll">
					<DocComponentsContent />
				</div>
			</div>
		</>
	);
}

export default DocComponents;
