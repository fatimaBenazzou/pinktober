import { useUnlinkAddressMutation } from "@/app/backend/export/client";
import { useNotification } from "@/hooks";
import { ArchiveSlash } from "iconsax-react";

export default function UnlinkButton({ clientId, addressId }: { clientId: string; addressId: string }) {
	const [UnlinkAddress, { isLoading: isUnlinking }] = useUnlinkAddressMutation();
	const { Errofy, Notify } = useNotification();
	return (
		<button
			className="btn btn-ghost btn-sm rounded-full flex items-center justify-center"
			title="Unlink this address"
			disabled={isUnlinking}
			onClick={() => {
				UnlinkAddress({ clientId: clientId, addressId: addressId })
					.unwrap()
					.then((res) => {
						Notify("Unlinking Address", res.message);
					})
					.catch((err) => {
						Errofy("Unlinking Address", err, "Couldn't unlink Address");
					});
			}}
		>
			<ArchiveSlash className="w-4 h-4" />
		</button>
	);
}
