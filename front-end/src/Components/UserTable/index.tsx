import { FilterInput } from "@/Components/FilterInput";
import { ReactNode, useEffect, useState } from "react";
import SearchBar from "@/Components/SearchBar";

import Table from "@/Components/Table";
import { DynamicFilters } from "@/hooks/useDynamicFilter";
import useSort from "@/hooks/useSort";
import SortByDropdown from "../SortByDropdown";
import ExportButton from "../ExportButton";
//"Clients"
function UserTable<T extends UsersI = ClientI>({
	isLoading,
	labels,
	isError,
	dynamicFilter,
	onSelect,
	ActionsButtons,
	sortOptions,
}: {
	isLoading: boolean;
	isError: boolean;
	labels: Record<string, LabelI<T>>;
	dynamicFilter: DynamicFilters<T>;
	ActionsButtons: (selected: T[]) => ReactNode;
	sortOptions: SortOption<T>[];
	onSelect?: (data: T[]) => void;
}) {
	const [selected, setSelected] = useState<T[]>([]);
	const [search, setSearch] = useState("");
	useEffect(() => {
		if (onSelect) onSelect(selected);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selected]);

	const { filteredList, toggleFilter, filters, clearSelected } = dynamicFilter;
	const { sortedData, sortKey, sortDirection, setSort } = useSort<T>(filteredList, "createdAt");

	const searchedData = sortedData.filter(
		(f) => f.username.includes(search) || f.email.includes(search) || f.firstName.includes(search) || f.lastName.includes(search)
	);

	return (
		<div className={"card w-full p-6 bg-base-100 shadow-xl  mt-6"}>
			<div className="flex flex-wrap items-center gap-2 my-2">
				<div className="flex gap-2">
					<SearchBar search={search} setSearch={(elm) => setSearch(elm)} placeholder="Search for user" />
					<FilterInput<T> filters={filters} toggleFilter={toggleFilter} clearSelected={clearSelected} />
					<SortByDropdown<T>
						key={"sortProducts"}
						sortKey={sortKey}
						sortDirection={sortDirection}
						setSort={setSort}
						sortOptions={sortOptions}
					/>
				</div>
				<div className="flex gap-2 ml-auto">
					<ExportButton<T> key={"Users"} data={selected.length === 0 ? searchedData : selected} fileNameSuffix="Products" />
					{ActionsButtons && ActionsButtons(selected)}
				</div>
			</div>

			{/* Leads List in table format loaded from slice after api call */}
			<div className="w-full relative">
				<Table<T>
					labels={labels}
					data={searchedData}
					isError={isError}
					isLoading={isLoading}
					onSelect={(alreadySelected) => setSelected(alreadySelected)}
					sortDirection={sortDirection}
					sortKey={sortKey as string}
					sortingKeys={sortOptions.map((s) => s.key) as string[]}
				/>
			</div>
		</div>
	);
}

export default UserTable;
