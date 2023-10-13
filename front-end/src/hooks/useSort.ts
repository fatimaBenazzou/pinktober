import { useState } from "react";

export enum SortDirection {
	Ascending = "ascending",
	Descending = "descending",
}

export default function useSort<T extends object>(data: T[], initialSortKey: keyof T) {
	const [sortKey, setSortKey] = useState<keyof T>(initialSortKey);
	const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.Descending);

	const setSort = (newSortKey: keyof T) => {
		if (newSortKey === sortKey) {
			setSortDirection(sortDirection === SortDirection.Ascending ? SortDirection.Descending : SortDirection.Ascending);
		} else {
			setSortDirection(SortDirection.Ascending);
			setSortKey(newSortKey);
		}
	};
	return {
		sortedData: [...data].sort((a, b) => {
			if (sortDirection === SortDirection.Ascending) {
				return a[sortKey] > b[sortKey] ? 1 : -1;
			} else {
				return a[sortKey] < b[sortKey] ? 1 : -1;
			}
		}),
		sortKey,
		sortDirection,
		setSort,
	};
}
