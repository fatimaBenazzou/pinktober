import Fallback from "@/Components/Fallback";
import { useLang } from "@/hooks";
import { Call, Location, TextBlock, Warning2 } from "iconsax-react";
import { useEffect, useState } from "react";
import ContentType from "./content/ContentType";

type Props = { shipInfo?: ShipI; isDefault?: boolean; sender?: boolean; isLoading?: boolean };

function ShipmentCard({ shipInfo, isDefault = false, sender = false, isLoading = false }: Props) {
	const [content, setContent] = useState<ContentType | null>(null);
	const { language } = useLang();

	useEffect(() => {
		import("./content/" + language).then((cc) => {
			setContent(cc.default);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [language]);

	if (!content) return;
	if (isLoading) return <Fallback />;
	if (!shipInfo)
		return (
			<div className="flex flex-col justify-center w-full">
				<p className="mt-4 text-center">{content.shipment.error}</p>
				<Warning2 className="w-20 h-20 text-warning mx-auto mt-6" />
			</div>
		);
	return (
		<div
			className={`card ${isDefault ? "bg-primary text-neutral-content" : "bg-base-100"} border ${
				shipInfo.ref ? "border-accent" : ""
			} mt-2 shadow-sm`}
		>
			<div className="card-body grid grid-cols-1 md:grid-cols-4 justify-between w-full">
				<div>
					<div className="flex gap-3 ">
						<TextBlock className="w-4 h-4 mt-1" />
						<p className="text-md font-bold">{content.shipment.name}</p>
					</div>
					<p className="text-sm ml-8 break-words">{shipInfo.Name}</p>
				</div>
				<div>
					<div className="flex gap-3 ">
						<TextBlock className="w-4 h-4 mt-1" />
						<p className="text-md font-bold">{sender ? content.shipment.sender.BM : content.shipment.sender.RAN}</p>
					</div>
					<p className="text-sm ml-8 break-words">{shipInfo.AttentionName}</p>
				</div>
				<div>
					<div className="flex gap-3 ">
						<Call className="w-4 h-4 mt-1" />
						<p className="text-md font-bold">{content.shipment.phone}</p>
					</div>
					<p className="text-sm ml-8">(+213){shipInfo.Phone.Number}</p>
				</div>
				<div>
					<div className="flex gap-3 ">
						<Location className="w-4 h-4 mt-1" />
						<p className="text-md font-bold">{content.shipment.province}</p>
					</div>
					<p className="text-sm ml-8">{shipInfo.Address.StateProvinceCode}</p>
				</div>
				<div>
					<div className="flex gap-3 ">
						<Location className="w-4 h-4 mt-1" />
						<p className="text-md font-bold">{content.shipment.city}</p>
					</div>
					<p className="text-sm ml-8">{shipInfo.Address.City}</p>
				</div>
				<div>
					<div className="flex gap-3 ">
						<Location className="w-4 h-4 mt-1" />
						<p className="text-md font-bold">{content.shipment.postalCode}</p>
					</div>
					<p className="text-sm ml-8">{shipInfo.Address.PostalCode}</p>
				</div>
				<div className="md:col-span-2">
					<div className="flex gap-3 ">
						<Location className="w-4 h-4 mt-1" />
						<p className="text-md font-bold">{content.shipment.addresses}</p>
					</div>
					{shipInfo.Address.AddressLine.map((ad, i) => (
						<p key={i} className="text-sm ml-8">
							{ad}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}

export default ShipmentCard;
