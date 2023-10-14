//import BellIcon from "@heroicons/react/24/outline/BellIcon";
//import { openRightDrawer } from "@/app/context/rightDrawer";
//import { RIGHT_DRAWER_TYPES } from "@/utils/globalConstantUtil";
import { useUser } from "@/hooks";
import { Notifications } from "./Notifications";

function Header() {
	const { user } = useUser<UserI>();

	return (
			<div className="navbar flex justify-between bg-transparent z-10">
				<div className="flex gap-2">
					{/* <Link to={"/app/profile"} className="avatar">
						<div className="w-12 rounded-full">
							<img src={`https://reqres.in/img/faces/2-image.jpg`} />
						</div>
					</Link> */}
					<div className="flex flex-col">
						<p className="text-lg font-bold text-primary">Good Morning !</p>
						<p className="flex gap-2 items-center">
							{user.firstName}
						</p>
					</div>
				</div>
				<Notifications />
			</div>
	);
}

export default Header;
