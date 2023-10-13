import { ArrowDown2 } from "iconsax-react";
import Fallback from "../Fallback";
import { SortDirection } from "@/hooks/useSort";
import { useState, useEffect } from "react";
import Pagination from "../Pagination";
import Error500 from "@/Pages/Errors/Error500";
import { usePagination } from "@/hooks";

type Props<T> = {
	labels: Record<string, LabelI<T>>;
	data: T[];
	isError?: boolean;
	isLoading?: boolean;
	onSelect?: (data: T[]) => void;
	sortDirection?: SortDirection;
	sortKey?: string;
	selected?: T[];
	sortingKeys?: string[];
};

function Table<T extends object = object>({
	labels,
	data,
	isError,
	isLoading,
	sortingKeys,
	sortKey,
	onSelect,
	selected: initSelected = [],
	sortDirection = SortDirection.Descending,
}: Props<T>) {
	const _labels: (keyof typeof labels)[] = Object.keys(labels).map((key) => key as keyof typeof labels);
	type keyofT = keyof T;
	const [selected, setSelected] = useState<T[]>(initSelected);
	const {
		data: paginatedData,
		currentPage,
		setCurrentPage,
		pages,
		setLimit,
	} = usePagination<T>({
		limit: 10,
		data,
		page: 1,
	});

	useEffect(() => {
		if (onSelect) onSelect(selected);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selected]);

	return (
		<div className="relative w-full">
			<div className="overflow-x-auto">
				<table className="table overflow-x-auto w-full text-sm text-left text-gray-500">
					<thead className="text-sm text-gray-700 uppercase border-b">
						<tr>
							{_labels.map((key, i) => (
								<th key={key} scope="col" className={"px-6 py-7 " + (i === 0 ? "" : "text-center")}>
									<div className={"flex gap-2 items-center " + (i === 0 ? "" : "justify-center")}>
										{labels[key].name || key}
										{sortingKeys?.includes(key) && (
											<div className="flex flex-col">
												<ArrowDown2
													variant="Bold"
													className={`w-2.5 h-2.5 rotate-180 ${
														sortKey === key
															? sortDirection === SortDirection.Ascending
																? "text-primary"
																: ""
															: ""
													}`}
												/>
												<ArrowDown2
													variant="Bold"
													className={`w-2.5 h-2.5 ${
														sortKey === key
															? sortDirection === SortDirection.Descending
																? "text-primary"
																: ""
															: ""
													}`}
												/>
											</div>
										)}
									</div>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{isError ? (
							<tr>
								<td colSpan={_labels.length} className="text-center py-10">
									<Error500 backTo="" />
								</td>
							</tr>
						) : isLoading ? (
							<tr>
								<td colSpan={_labels.length}>
									<Fallback />
								</td>
							</tr>
						) : (
							paginatedData.map((row, i) => {
								// check if row["_id" as keyof T] is already selected
								const alreadySelected = selected.some((s) => s["_id" as keyof T] === row["_id" as keyof T]);

								return (
									<tr
										key={"row-" + i}
										className={`border-b ${onSelect ? "hover:bg-base-200 cursor-pointer" : ""} ${
											alreadySelected ? "bg-base-300 " : ""
										} `}
										onClick={() => {
											if (onSelect) {
												if (alreadySelected) {
													setSelected(selected.filter((s) => s["_id" as keyof T] !== row["_id" as keyof T]));
												} else {
													setSelected([...selected, row]);
												}
											}
										}}
									>
										{_labels.map((l, k) => {
											const render = labels[l].render;
											const value = l in row ? row[l as keyofT] : null;

											return (
												<td key={`data-${i}-${k}`} className="px-6 py-3">
													{render
														? render(value, row, k)
														: typeof value === "string" || typeof value === "number"
														? value
														: null}
												</td>
											);
										})}
									</tr>
								);
							})
						)}
					</tbody>
				</table>
			</div>
			<div className="text-sm text-gray-700 p-4 items-center flex w-full justify-between">
				<p>
					Showing {paginatedData.length} of {data.length}
					{selected.length ? `, ${selected.length} selected` : ""}.
				</p>
				<div className="flex gap-2">
					<select
						className="select select-bordered select-sm"
						onChange={(e) => {
							setCurrentPage(1);
							setSelected([]);
							setLimit(parseInt(e.target.value));
						}}
					>
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
					</select>
					<Pagination currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage} />
				</div>
			</div>
		</div>
	);
}

export default Table;
