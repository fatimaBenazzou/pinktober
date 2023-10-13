import { Suspense } from "react";
import { useGetUserDataMutation } from "@/app/backend/export/auth";
import { useEffectOnce, useUser } from "@/hooks";
import Notifications from "@/Components/Notifications";
import Fallback from "@/Components/Fallback";
import Router from "@/Routes";
import "@/App.css";

function App() {
	const [GetUserData] = useGetUserDataMutation();
	const { setUser, removeUser } = useUser();

	useEffectOnce(() => {
		GetUserData()
			.unwrap()
			.then((response) => {
				setUser(response.data);
			})
			.catch(() => {
				removeUser();
			});
	});
	return (
		<>
			<Suspense fallback={<Fallback />}>
				<Router />
			</Suspense>
			<Notifications />
		</>
	);
}

export default App;
