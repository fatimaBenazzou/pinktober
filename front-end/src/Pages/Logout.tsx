import { useLogOutMutation } from "@/app/backend/export/auth";
import { useUser } from "@/hooks";
import { useEffect } from "react";
import { Copyright } from "@/Components/Copyright";

const Logout = () => {
	const { removeUser } = useUser();
	const [Logout] = useLogOutMutation();
	useEffect(() => {
		Logout()
			.unwrap()
			.then(() => {
				removeUser();
			})
			.catch(console.error);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="container flex flex-col mx-auto">
			<div className="card  bg-base-100 shadow-xl w-full max-w-lg mx-auto my-20">
				<div className="card-body flex flex-col items-center">
					<h2 className="card-title mx-auto">Login out</h2>
					<span className="loading loading-spinner text-error w-[70px] h-[70px]"></span>
				</div>
			</div>

			<Copyright />
		</div>
	);
};
export default Logout;
