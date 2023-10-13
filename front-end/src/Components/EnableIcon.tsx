import { useEnableClientMutation } from "@/app/backend/export/client";
import { LiaUserCheckSolid, LiaUserMinusSolid } from "react-icons/lia";
import { UseNotificationI } from "@/hooks/useNotification";
import { useEnableDeliveryManMutation } from "@/app/backend/export/deliveryMan";
import { useEnableAdminMutation } from "@/app/backend/export/admin";

export default function EnableIcon<T extends UsersI>({
	userType = "Client",
	row,
	Notify,
	Errofy,
	refetch,
}: {
	userType?: T["kind"];
	row: T;
	Notify: UseNotificationI["Notify"];
	Errofy: UseNotificationI["Errofy"];
	refetch: () => void;
}) {
	const userMutation =
		userType === "Client"
			? useEnableClientMutation
			: userType === "DeliveryMan"
			? useEnableDeliveryManMutation
			: useEnableAdminMutation;
	const [EnableUser, { isLoading: isEnabling }] = userMutation();

	return (
		<button
			className="btn btn-square btn-ghost"
			onClick={() => {
				EnableUser({ userId: row._id, enable: !row.enabled })
					.unwrap()
					.then((response) => {
						Notify("Enabling/Disabling User", response.message);
					})
					.catch((err) => {
						Errofy("Enabling/Disabling User", err);
					})
					.finally(() => {
						refetch();
					});
			}}
			disabled={isEnabling}
		>
			{row.enabled ? <LiaUserMinusSolid className="w-6 h-6" /> : <LiaUserCheckSolid className="w-6 h-6" />}
		</button>
	);
}
