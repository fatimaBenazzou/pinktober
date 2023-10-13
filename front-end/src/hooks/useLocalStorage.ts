import { useEffect, useState } from "react";
// TODO: USE PWA STORAGE INSTEAD OF LOCAL STORAGE
function useLocalStorage<T extends object | null>(itemName: string, initialValue: T): [T, (value: T) => void] {
	const item = localStorage.getItem(itemName);
	const [storage, setStorage] = useState<T>(item ? JSON.parse(item) : initialValue);
	function setLocalStorage(value: T) {
		setStorage(value);
		if (value === null) localStorage.removeItem(itemName);
		else localStorage.setItem(itemName, JSON.stringify(value));
	}
	useEffect(() => {
		const item = localStorage.getItem(itemName);
		if (item) {
			setStorage(JSON.parse(item));
		} else {
			localStorage.setItem(itemName, JSON.stringify(initialValue));
			setStorage(initialValue);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemName]);
	useEffect(() => {
		if (storage !== undefined) localStorage.setItem(itemName, JSON.stringify(storage));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [storage]);
	return [storage, setLocalStorage];
}

export default useLocalStorage;
