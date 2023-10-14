import ModalLayout from "./ModalLayout";
import PageContent from "./PageContent";

function Layout() {
	return (
		<>
			<div className=" overflow-hidden w-full h-screen ">
				<PageContent />
			</div>
			<ModalLayout />
		</>
	);
}

export default Layout;
