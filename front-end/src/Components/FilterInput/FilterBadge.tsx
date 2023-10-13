import { useState } from "react";

export function FilterBadge<T extends UsersI | ShipmentI | ShipI | ProductI | DeskI>({
	toggleFilter,
	KeyName,
	Name,
	f,
}: {
	toggleFilter: (prop: Keys<T>, name: string) => void;
	KeyName: Keys<T>;
	f: string;
	Name: string;
}) {
	const [hover, setHover] = useState(false);
	return (
		<div
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className={`badge whitespace-nowrap badge-lg badge-secondary ${hover ? "cursor-pointer" : "badge-outline"} `}
			onClick={() => toggleFilter(KeyName, f)}
		>
			{Name} : {f}
		</div>
	);
}
