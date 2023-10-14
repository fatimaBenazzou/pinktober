import LeftSidebar from "./LeftSidebar";
import ModalLayout from "./ModalLayout";
import PageContent from "./PageContent";
import RightSidebar from "./RightSidebar";

function Layout() {
	return (
		<>
			<div className="drawer lg:drawer-open overflow-hidden w-full h-screen bg-base-100 text-secondary-content">
				<input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
				<PageContent />
				<LeftSidebar />
			</div>
			{/* Right drawer - containing secondary content like notifications list etc.. */}
			<RightSidebar />

			{/* Modal layout container */}
			<ModalLayout />
		</>
	);
}

export default Layout;
