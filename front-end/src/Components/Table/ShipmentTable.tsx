import ExportButton from "@/Components/ExportButton";
import { FilterInput } from "@/Components/FilterInput";
import SearchBar from "@/Components/SearchBar";
import SortByDropdown from "@/Components/SortByDropdown";
import Table from "@/Components/Table";
import { useDynamicFilter /* , useNotification */ } from "@/hooks";
import usePageTitle from "@/hooks/usePageTitle";
import useProvinces from "@/hooks/useProvinces";
import useSort from "@/hooks/useSort";

import DZD from "@/utils/Currency";

import { Refresh2, Shop, TruckFast } from "iconsax-react";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const btnColor: Record<ShipmentStatus, string> = {
	PENDING: "warning",
	PREPARED: "warning",
	IN_TRANSIT: "info",
	DELIVERED: "success",
	MONEY_IN_TRANSIT: "success",
	MONEY_AFFECTED: "success",
	IN_RETURN: "error",
	RETURNED: "error",
};
type LabelFunction = (actions: { selected: ShipmentI[]; provinces: ProvinceI[] }) => Record<string, LabelI<ShipmentI>>;
const defaultLabels: LabelFunction = ({ selected, provinces }) => ({
	name: {
		name: "Product",
		render: (_, row) => (
			<div className="flex items-center">
				<div
					className={`cursor-pointer rounded-full border-2 flex-shrink-0 hover:bg-neutral-500 hover:text-white border-neutral-600 w-12 h-12 flex items-center justify-center mr-4 ${
						selected.some((s) => s._id === row._id) ? "bg-neutral-600 text-white" : ""
					}`}
				>
					{row.isStopDesk ? <Shop className="w-6 h-6" /> : <TruckFast className="w-6 h-6" />}
				</div>
				<Link to={"/app/shipments/" + row._id}>
					<div className="flex flex-col">
						<span className="font-bold">{row.product.name}</span>
						<span className="whitespace-nowrap">{row.product.sku}</span>
					</div>
				</Link>
			</div>
		),
	},
	owner: {
		name: "Owner",
		render: (_, row) => (
			<Link to={"/app/clients/" + row.createdFor._id}>
				<div className="flex flex-col text-center hover:text-primary">
					<span className="font-bold">{row.createdFor.username}</span>
					<span>
						{row.createdFor.firstName} {row.createdFor.lastName}
					</span>
				</div>
			</Link>
		),
	},
	trackingNumber: {
		name: "Tracking Number",
		render: (l) => <p className="whitespace-nowrap text-center">{l as string}</p>,
	},
	createdAt: {
		name: "Created At",
		render: (l) => <p className="whitespace-nowrap">{l ? moment(l as Date).format("DD MMM YYYY-HH:mm") : "null"}</p>,
	},
	deliverTo: {
		name: "Collecting desk",
		render: (_, row) => (
			<div>
				<p className="font-bold whitespace-nowrap">{row.deliverTo.name}</p>

				<p className="text-sm whitespace-nowrap">{provinces.length > 0 ? provinces[row.deliverTo.province - 1].name["EN"] : ""}</p>
			</div>
		),
	},
	shipTo: {
		name: "Receiver Address",
		render: (_, row) => (
			<div>
				{row.shipTo.Address.AddressLine.map((line, i) => (
					<p key={i} className="whitespace-nowrap">
						{line}
					</p>
				))}
			</div>
		),
	},
	Receiver: {
		name: "Receiver",
		render: (_, row) => {
			return (
				<div>
					<p className="font-bold whitespace-nowrap">{row.shipTo.AttentionName}</p>
					<p className="text-sm opacity-50 whitespace-nowrap">{row.shipTo.Name}</p>
					<p className="text-sm whitespace-nowrap">
						{provinces.length > 0 ? provinces[row.shipTo.Address.StateProvinceCode - 1].name["EN"] : ""}
					</p>
				</div>
			);
		},
	},
	status: {
		name: "Status",
		render: (l) => (
			<div className={`badge badge-${btnColor[l as ShipmentStatus]} text-ellipsis overflow-hidden whitespace-nowrap`}>
				{l as ShipmentStatus}
			</div>
		),
	},
	weight: {
		name: "Weight",
		render: (l) => <p className="whitespace-nowrap text-center">{l as string} KG</p>,
	},
	price: {
		name: "Price",
		render: (_, row) => <p className="whitespace-nowrap text-center">{DZD["EN"].format(row.pricing.product + row.pricing.delivery)}</p>,
	},
	productPrice: {
		name: "Product Price",
		render: (_, row) => <p className="whitespace-nowrap text-center">{DZD["EN"].format(row.pricing.product)}</p>,
	},
	deliveryPrice: {
		name: "Delivery Price",
		render: (_, row) => <p className="whitespace-nowrap text-center">{DZD["EN"].format(row.pricing.delivery)}</p>,
	},
});

export function ShipmentTable({
	shipments,
	ActionsButtons,
	title,

	isError,
	labels,
	isLoading,
	Refetch,
}: {
	shipments: ShipmentI[];
	isLoading: boolean;
	labels?: Record<string, LabelI<ShipmentI>> | LabelFunction;
	isError: boolean;

	Refetch?: () => void;
	ActionsButtons?: (selected: ShipmentI[], AfterAction: () => void) => React.ReactNode;
	title?: string;
}) {
	const [search, setSearch] = useState("");
	const [selected, setSelected] = useState<ShipmentI[]>([]);
	const dynamicFilter = useDynamicFilter<ShipmentI>(shipments, {
		status: {
			name: "Status",
			enums: [
				{ name: "Pending", value: "PENDING" },
				{ name: "Prepared", value: "PREPARED" },
				{ name: "In transit", value: "IN_TRANSIT" },
				{ name: "Delivered", value: "DELIVERED" },
				{ name: "Money in transit", value: "MONEY_IN_TRANSIT" },
				{ name: "Money affected", value: "MONEY_AFFECTED" },
				{ name: "Canceled", value: "CANCELED" },
				{ name: "In return", value: "IN_RETURN" },
				{ name: "Returned", value: "RETURNED" },
			],
		},
		isStopDesk: {
			name: "Type",
			enums: [
				{ name: "Home delivery", value: false },
				{ name: "Stop Desk", value: true },
			],
		},
	});
	const { filteredList, toggleFilter, filters, clearSelected } = dynamicFilter;
	usePageTitle(title);
	const searchLow = search.toLocaleLowerCase();
	const searchedData = filteredList.filter(
		(f) => f.product.name.toLocaleLowerCase().includes(searchLow) || f.trackingNumber.toLocaleLowerCase().includes(searchLow)
	);
	const { sortKey, sortDirection, setSort, sortedData } = useSort<ShipmentI>(searchedData, "createdAt");

	const sortOptions: SortOption<ShipmentI>[] = [
		{ key: "createdAt", label: "Created At" },
		{ key: "trackingNumber", label: "Tracking Number" },
	];

	//const { Errofy, Notify } = useNotification();
	function LoadData() {
		/* 		.then((res) => {
					Notify("Loading shipments", res.message);
				})
				.catch((err) => {
					Errofy("Loading shipments", err, "Error while loading shipments");
				}); */
		if (Refetch && !isLoading) Refetch();
	}

	useEffect(() => {
		setSelected([]);
	}, [shipments]);
	const provinces = useProvinces();
	return (
		<>
			<div className="flex flex-wrap items-center gap-2 my-2">
				<div className="flex gap-2 flex-wrap">
					<SearchBar search={search} setSearch={(elm) => setSearch(elm)} placeholder="Search for user" />
					<FilterInput<ShipmentI> filters={filters} toggleFilter={toggleFilter} clearSelected={clearSelected} />
					<SortByDropdown<ShipmentI>
						key={"sortProducts"}
						sortKey={sortKey}
						sortDirection={sortDirection}
						setSort={setSort}
						sortOptions={sortOptions}
					/>
				</div>
				<div className="flex gap-2 ml-auto flex-wrap">
					{selected.length !== 0 || searchedData.length !== 0 ? (
						<ExportButton
							key={"Users"}
							data={(selected.length === 0 ? searchedData : selected).map((shipment) => ({
								"Tracking Number": shipment.trackingNumber,
								"Product ID": shipment.product._id,
								"Receiver Name": shipment.shipTo.Name,
								"Receiver Attention Name": shipment.shipTo.AttentionName,
								"Receiver Phone": shipment.shipTo.Phone.Number,
								"Receiver Address 1": shipment.shipTo.Address.AddressLine[0],
								"Receiver Address 2": shipment.shipTo.Address.AddressLine[1] || "",
								"Receiver Address 3": shipment.shipTo.Address.AddressLine[2] || "",
								"Receiver Province": shipment.shipTo.Address.StateProvinceCode,
								"Receiver City": shipment.shipTo.Address.City,
								"Receiver Zip": shipment.shipTo.Address.PostalCode,
								"Receiver Is a desk": shipment.shipTo.ref ? "Is a desk" : "is not a desk",
								"Ship From Name": shipment.shipFrom?.Name,
								"Ship From Attention Name": shipment.shipFrom?.AttentionName,
								"Ship From Phone": shipment.shipFrom?.Phone.Number,
								"Ship From Address 1": shipment.shipFrom?.Address.AddressLine[0],
								"Ship From Address 2": shipment.shipFrom?.Address.AddressLine[1],
								"Ship From Address 3": shipment.shipFrom?.Address.AddressLine[2],
								"Ship From Province": shipment.shipFrom?.Address.StateProvinceCode,
								"Ship From City": shipment.shipFrom?.Address.City,
								"Ship From Zip": shipment.shipFrom?.Address.PostalCode,
								"Ship From Is a desk": shipment.shipFrom?.ref ? "Is a desk" : "is not a desk",
								Status: shipment.status,
								Price: DZD["EN"].format(shipment.pricing?.product || shipment.product.price),
								"Delivery Price": DZD["EN"].format(shipment.pricing?.delivery || 200),
								"Total Price": DZD["EN"].format(
									(shipment.pricing?.product || shipment.product.price) + (shipment.pricing?.delivery || 200)
								),
							}))}
							fileNameSuffix="Shipments"
						/>
					) : null}
					{ActionsButtons &&
						ActionsButtons(selected, () => {
							LoadData();
							setSelected([]);
						})}
					<button className="btn btn-outline btn-sm" onClick={() => LoadData()}>
						<Refresh2 className="w-4 h-4" />
					</button>
				</div>
			</div>
			<Table<ShipmentI>
				data={sortedData}
				isError={isError}
				isLoading={isLoading}
				selected={selected}
				onSelect={setSelected}
				sortDirection={sortDirection}
				sortKey={sortKey}
				sortingKeys={sortOptions.map((sort) => sort.key)}
				labels={
					labels
						? typeof labels === "function"
							? labels({ selected, provinces })
							: labels
						: defaultLabels({ selected, provinces })
				}
			/>
		</>
	);
}
