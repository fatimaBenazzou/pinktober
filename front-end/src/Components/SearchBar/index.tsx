import SearchIcon from "@/icons/SearchIcon";

function SearchBar({
	search,
	setSearch,
	placeholder = "search",
}: {
	search: string;
	setSearch: (search: string) => void;
	placeholder?: string;
}) {
	return (
		<form
			className="flex items-center"
			onSubmit={(e) => {
				e.preventDefault();
				return false;
			}}
		>
			<label htmlFor="default-search" className="font-medium sr-only">
				Search
			</label>
			<div className="relative focus-within:text-primary">
				<label htmlFor="default-search" className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
					<SearchIcon className="w-4 h-4" />
				</label>
				<input
					type="search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					id="default-search"
					className="input input-sm focus:ring-2 focus:outline-none border-opacity-100 ml-1 pr-4 pl-9 text-sm"
					placeholder={placeholder}
					required
				/>
			</div>
		</form>
	);
}

export default SearchBar;
