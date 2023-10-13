//import BellIcon from "@heroicons/react/24/outline/BellIcon";
//import { openRightDrawer } from "@/app/context/rightDrawer";
//import { RIGHT_DRAWER_TYPES } from "@/utils/globalConstantUtil";
import { useUser } from "@/hooks";
import { Link } from "react-router-dom";
import { Notifications } from "./Notifications";
function Header() {
	const { user } = useUser<UserI>();

	return (
		<>
			<div className="px-6 lg:px-10 navbar flex justify-between bg-transparent z-10 ">
				{/* Menu toggle for mobile view or small screen */}
				{/* <div className="">
					<label htmlFor="left-sidebar-drawer" className="btn btn-ghost drawer-button lg:hidden">
						<Bars3Icon className="h-5 inline-block w-5" />
					</label>
					<h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
				</div> */}
				<div className="flex gap-2">
					<Link to={"/app/profile"} className="avatar">
						<div className="w-12 rounded-full">
							<img src={`https://reqres.in/img/faces/2-image.jpg`} />
						</div>
					</Link>
					<div className="flex flex-col">
						<p className="text-sm">Hello,</p>
						<p className="font-bold text-white flex gap-2 items-center">
							{user.firstName} {user.lastName} <img src={"/goodbye.png"} />
						</p>
					</div>
				</div>

				{/* Notification icon */}
				<Notifications />
			</div>
		</>
	);
}

export default Header;
