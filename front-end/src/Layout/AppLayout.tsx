import useNavbar from "@/hooks/useNavbar";
import ModalLayout from "./ModalLayout";
import PageContent from "./PageContent";
import useNavigation from "@/hooks/useNavigation";
import { useEffect } from "react";

function AppLayout() {
	useNavigation(true);
	const { setIsOpen } = useNavbar();
	useEffect(() => {
		setIsOpen(true);
		return () => {
			setIsOpen(false);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<div className="overflow-hidden w-full h-screen bg-secondary text-secondary-content">
				<PageContent />
			</div>
			<ModalLayout />
		</>
	);
}

export default AppLayout;
