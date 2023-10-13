export default function Pagination({
	currentPage,
	pages,
	setCurrentPage,
}: {
	currentPage: number;
	pages: number;
	setCurrentPage: (i: number) => void;
}) {
	return (
		<div className="join ml-auto">
			<button className="join-item btn btn-sm" disabled={currentPage === 1}>
				«
			</button>
			{Array(pages)
				.fill(0)
				.map((_, i) => (
					<button
						key={i}
						className={`join-item btn btn-sm ${i + 1 === currentPage ? "btn-active" : ""}`}
						onClick={() => i + 1 !== currentPage && setCurrentPage(i + 1)}
					>
						{i + 1}
					</button>
				))}
			<button className="join-item btn btn-sm" disabled={currentPage === pages}>
				»
			</button>
		</div>
	);
}
