import { SortDirection } from "@/hooks/useSort";
import { FaSort } from "react-icons/fa";

type SortByDropdownProps<T> = {
	sortKey: keyof T;
	sortDirection: SortDirection;
	setSort: (sortKey: keyof T) => void;
	sortOptions: SortOption<T>[];
};

function SortByDropdown<T>({ sortKey, sortDirection, setSort, sortOptions }: SortByDropdownProps<T>) {
	return (
		<div className="dropdown sm:dropdown-end">
			<span tabIndex={0} className="btn btn-sm btn-outline  rounded-lg bg-base-100">
				<FaSort className="w-4 h-4" />
				Order by
			</span>
			<ul className="mt-2 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
				{sortOptions.map((option) => (
					<li key={option.label}>
						<button className={`menu-item ${sortKey === option.key ? "text-primary" : ""}`} onClick={() => setSort(option.key)}>
							{option.label}
							{sortKey === option.key && (
								<span
									className={`badge badge-outline ${
										sortDirection === SortDirection.Ascending ? "badge-primary" : "badge-secondary"
									}`}
								>
									{sortDirection === SortDirection.Ascending ? "ASC" : "DES"}
								</span>
							)}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SortByDropdown;
