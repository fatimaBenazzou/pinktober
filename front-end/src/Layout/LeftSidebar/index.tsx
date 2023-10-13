import routes from "@/Routes/sidebar";
import { NavLink, Link, useLocation } from "react-router-dom";
import SidebarSubmenu from "./SidebarSubmenu";

//import { useAppDispatch } from "../app/store";

function LeftSidebar() {
	const location = useLocation();

	return (
		<div className="drawer-side z-100">
			<label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
			<ul className="menu pt-20 md:pt-2 h-[100vh] overflow-auto flex-nowrap w-80 bg-base-100 text-base-content gap-1">
				<li className="mb-2 font-semibold text-xl">
					<Link to={"/app/welcome"}>
						<img className="w-10" src="/favicon.svg" alt="UPS - Manager Logo" />
						UPS - Manager
					</Link>
				</li>
				{routes.map((route, k) => {
					return (
						<li key={k}>
							{route.submenu ? (
								<SidebarSubmenu {...route} submenu={route.submenu} />
							) : (
								<NavLink
									end
									to={route.path}
									className={({ isActive }) =>
										`flex items-center gap-2 ${isActive ? "font-semibold  bg-base-200 " : "font-normal"}`
									}
								>
									{route.icon} {route.name}
									{location.pathname === route.path ? (
										<span
											className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
											aria-hidden="true"
										></span>
									) : null}
								</NavLink>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default LeftSidebar;
