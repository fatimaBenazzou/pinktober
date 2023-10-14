import { Link } from "react-router-dom";
import LogoutIcon from "@/icons/LogoutIcon";
import { ProfileCircle } from "iconsax-react";

export default function Profile({ user }: { user: UserI }) {
	return (
		<div className="dropdown dropdown-end ml-4">
			<label tabIndex={999} htmlFor="profile-dropdown" className="btn btn-ghost btn-circle avatar">
				<div className="w-10 rounded-full">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-4 -4 32 32" strokeWidth={1.5} stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				</div>
			</label>
			<input type="text" hidden id="profile-dropdown" />
			<ul tabIndex={999} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
				<li>
					<div className="rounded-2xl">
						<ProfileCircle width={24} height={24} />
						<Link to={"/app/profile"} role="menuitem">
							<div className=""> @{user.username}</div>
							<div className="">
								{user?.firstName} {user.lastName}
							</div>
						</Link>
					</div>
				</li>
				<div className="divider mt-0 mb-0"></div>
				<li>
					<div className="rounded-2xl">
						<LogoutIcon className="" />
						<Link to={"/auth/logout"} role="menuitem">
							<div className="w-max text-error">logout</div>
						</Link>
					</div>
				</li>
			</ul>
		</div>
	);
}
