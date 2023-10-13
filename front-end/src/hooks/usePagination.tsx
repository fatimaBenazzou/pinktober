import { useState } from "react";

export default function usePagination<T>({ limit, data, page }: { limit: number; data: T[]; page: number }) {
	const [currentPage, setCurrentPage] = useState(page);
	const [currentLimit, setLimit] = useState(limit);
	return {
		data: data.slice((currentPage - 1) * currentLimit, currentPage * currentLimit),
		currentPage,
		pages: Math.ceil(data.length / currentLimit),
		setCurrentPage,
		setLimit,
	};
}
