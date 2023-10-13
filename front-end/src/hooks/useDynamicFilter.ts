import { useState } from "react";

function applyFilters<T extends object>(array: T[], allFilters: SelectFilterI<T>): T[] {
	return array.filter((user) =>
		Object.entries(allFilters.selected).every(([prop, filter]) => {
			if (!Array.isArray(filter) || !filter.length || !allFilters) return true; // No filter selected for this property

			const propValue = user[prop as Keys<T>];
			if (propValue === undefined) return false; // If the property value doesn't exist, exclude the element

			const propsFilters = allFilters[prop as Keys<T>];
			if (!propsFilters) return true;
			return (filter as string[]).some((s) =>
				propsFilters.enums.some((enumItem) => enumItem.name === s && enumItem.value === propValue)
			);
		})
	);
}

export default function useDynamicFilter<T extends object = ClientI>(list: T[], init: FiltersI<T>) {
	const [filters, setFilters] = useState<SelectFilterI<T>>({
		...init,
		selected: Object.keys(init).reduce((acc, s) => ({ ...acc, [s]: [] }), {}),
	});
	function updateFilters(init: FiltersI<T>) {
		setFilters(() => {
			return {
				...init,
				selected: Object.keys(init).reduce((acc, s) => ({ ...acc, [s]: [] }), {}),
			};
		});
	}
	function clearSelected() {
		setFilters((filters) => {
			return {
				...filters,
				selected: Object.keys(init).reduce((acc, s) => ({ ...acc, [s]: [] }), {}),
			};
		});
	}
	function toggleFilter(prop: Keys<T>, name: string) {
		setFilters((filters) => {
			const selected = filters.selected[prop];
			const newSelected = selected
				? selected.includes(name)
					? selected.filter((elm) => elm !== name)
					: [...selected, name]
				: [name];

			return {
				...filters,
				selected: {
					...filters.selected,
					[prop]: newSelected,
				},
			};
		});
	}
	return { filters, filteredList: applyFilters<T>(list, filters), updateFilters, toggleFilter, clearSelected };
}
export type DynamicFilters<T extends object> = ReturnType<typeof useDynamicFilter<T>>;
