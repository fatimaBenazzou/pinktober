import { DynamicFilters } from "@/hooks/useDynamicFilter";

function FilterElement({ onClick, name, selected }: { onClick: () => void; name: string; selected?: boolean }) {
	return (
		<li>
			<a
				href="#"
				onClick={(e) => {
					onClick();
					e.preventDefault();
					return false;
				}}
			>
				<input type="checkbox" name={"filter." + name} id="" checked={selected} onChange={() => {}} />
				{name}
			</a>
		</li>
	);
}
export function FilterList<T extends object>({
	selected,
	name,
	enumElm,
	toggleFilter,
}: {
	name: Keys<T>;
	selected: string[];
	enumElm: FilterDef<T>;
	toggleFilter: DynamicFilters<T>["toggleFilter"];
}) {
	return (
		<li>
			<ul>
				<h3>{enumElm.name}</h3>
				{enumElm.enums.map(({ name: s }, i) => (
					<FilterElement
						key={i}
						name={s}
						selected={selected.includes(s)}
						onClick={() => {
							toggleFilter(name, s);
						}}
					/>
				))}
			</ul>
		</li>
	);
}
