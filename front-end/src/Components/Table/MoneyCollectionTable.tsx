import SearchBar from "@/Components/SearchBar";
import SortByDropdown from "@/Components/SortByDropdown";
import Table from "@/Components/Table";
import { useModal } from "@/hooks";
import usePageTitle from "@/hooks/usePageTitle";
import useSort from "@/hooks/useSort";
import DZD from "@/utils/Currency";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";
import { Receipt, Refresh2 } from "iconsax-react";
import { useState } from "react";
import Loading from "../Loading";
import Fallback from "../Fallback";

interface MoneyCollectionTableProps {
	data: MoneyCollectionI<true>[];
	isLoading: boolean;
	isError: boolean;

	refetch: () => void;
	title: string;
}
export default function MoneyCollectionTable({ data, isLoading, isError, refetch, title }: MoneyCollectionTableProps) {
	const [search, setSearch] = useState("");
	const searchLow = search.toLocaleLowerCase();
	const searchedData = data.filter(
		(f) => f.from.desk.name.toLocaleLowerCase().includes(searchLow) || f.to.desk.name.toLocaleLowerCase().includes(searchLow)
	);
	const { setSort, sortDirection, sortKey, sortedData } = useSort(searchedData, "createdAt");
	const sortOptions: SortOption<MoneyCollectionI<true>>[] = [
		{ key: "createdAt", label: "Created At" },
		{ key: "confirmedAt", label: "Confirmed At" },
	];
	usePageTitle(title);
	const { openModal } = useModal();
	function Refetch() {
		refetch();
	}
	return (
		<div className="w-full card bg-base-100 shadow-xl">
			<div className="card-body relative">
				<div className="flex flex-wrap items-center gap-2 my-2">
					<div className="flex gap-2 flex-wrap">
						<SearchBar search={search} setSearch={(elm) => setSearch(elm)} placeholder="Search for user" />

						<SortByDropdown<MoneyCollectionI<true>>
							key={"sortProducts"}
							sortKey={sortKey}
							sortDirection={sortDirection}
							setSort={setSort}
							sortOptions={sortOptions}
						/>
					</div>
					<div className="flex gap-2 ml-auto flex-wrap">
						<button className="btn btn-outline btn-sm" onClick={Refetch} disabled={isLoading}>
							{isLoading ? <Loading className="w-4 h-4" /> : <Refresh2 className="w-4 h-4" />}
						</button>
					</div>
				</div>
				{isLoading ? (
					<Fallback />
				) : (
					<Table<MoneyCollectionI<true>>
						data={sortedData}
						labels={{
							from: {
								name: "Desk sender",
								render: (_, row) => {
									return row.from.desk.name;
								},
							},
							fromAdmin: {
								name: "Admin sender",
								render: (_, row) => {
									return `${row.from.by.firstName} ${row.from.by.lastName}`;
								},
							},
							to: {
								name: "Desk receiver",
								render: (_, row) => {
									return row.to.desk.name;
								},
							},
							toAdmin: {
								name: "Admin receiver",
								render: (_, row) => {
									return row.to.by ? `${row.to.by.firstName} ${row.to.by.lastName}` : "-none yet-";
								},
							},
							total: {
								name: "Amount",
								render: (_, row) => {
									return DZD["EN"].format(row.total);
								},
							},
							createdAt: {
								name: "Created At",
								render: (_, row) => {
									return new Date(row.createdAt).toLocaleString();
								},
							},
							confirmedAt: {
								name: "Confirmed At",
								render: (_, row) => {
									return row.confirmedAt ? new Date(row.confirmedAt).toLocaleString() : "Not confirmed";
								},
							},

							actions: {
								name: "Actions",
								render: (_, row) => {
									return (
										<button
											className="btn btn-outline btn-sm gap-2"
											onClick={() => {
												openModal({
													bodyType: MODAL_BODY_TYPES.MONEY_COLLECTION,
													title: "Money Collection",
													extraObject: row,
													size: "lg",
												}).then(() => {
													Refetch();
												});
											}}
										>
											<Receipt className="w-4 h-4" />
											Check
										</button>
									);
								},
							},
						}}
						isError={isError}
						isLoading={isLoading}
						sortDirection={sortDirection}
						sortKey={sortKey}
						sortingKeys={sortOptions.map((f) => f.key)}
					/>
				)}
			</div>
		</div>
	);
}
