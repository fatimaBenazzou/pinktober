import { FilterList } from "./FilterList";
import { DynamicFilters } from "@/hooks/useDynamicFilter";
import { LiaFilterSolid, LiaTimesCircle } from "react-icons/lia";
//import { FilterBadge } from "./FilterBadge";

export function FilterInput<T extends UsersI | ShipmentI | ShipI | ProductI | DeskI | TransactionsI>({
	filters: f,
	toggleFilter,
	clearSelected,
}: Pick<DynamicFilters<T>, "filters" | "toggleFilter" | "clearSelected">) {
	const { selected, ...filters } = f;
	return (
		<div className="dropdown dropdown-end">
			<label tabIndex={0} className="btn btn-sm btn-outline focus:ring ">
				<LiaFilterSolid className="w-4 h-4" />
				Filter
			</label>
			<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
				<li>
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							clearSelected();
							return false;
						}}
					>
						<LiaTimesCircle className="w-4 h-4" /> Clear
					</a>
				</li>
				{Object.entries(filters).map(
					([name, enumElm]) =>
						enumElm && (
							<FilterList
								key={name}
								enumElm={enumElm}
								selected={selected[name as Keys<T>] || []}
								name={name as Keys<T>}
								toggleFilter={toggleFilter}
							/>
						)
				)}
			</ul>
		</div>
	);
}

/* {Object.entries(selected).map(([name, filter]) =>
		filter.map((f: string, i: number) => (
			<FilterBadge<T>
				key={i}
				{...{ toggleFilter, KeyName: name as Keys<T>, Name: filters[name as Keys<T>]?.name || name, f, filters }}
			/>
		))
	)} */
