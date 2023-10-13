import { useEffect, useRef, useState } from "react";

export { useAppDispatch, useAppSelector } from "./redux";
export { default as useUser } from "./useUser";
export { default as useLang } from "./useLang";
export { default as useTheme } from "./useTheme";
export { default as useNotification } from "./useNotification";
export { default as useDynamicFilter } from "./useDynamicFilter";
export { default as useModal } from "./useModal";
export { default as usePagination } from "./usePagination";
export { default as useServerNotification } from "./useServerNotification";


export const useEffectOnce = (effect: () => void | (() => void)) => {
	const effectFn = useRef<() => void | (() => void)>(effect);
	const destroyFn = useRef<void | (() => void)>();
	const effectCalled = useRef(false);
	const rendered = useRef(false);
	const [, setVal] = useState<number>(0);

	if (effectCalled.current) {
		rendered.current = true;
	}

	useEffect(() => {
		// only execute the effect first time around
		if (!effectCalled.current) {
			destroyFn.current = effectFn.current();
			effectCalled.current = true;
		}

		// this forces one render after the effect is run
		setVal((val) => val + 1);

		return () => {
			// if the comp didn't render since the useEffect was called,
			// we know it's the dummy React cycle
			if (!rendered.current) {
				return;
			}

			// otherwise this is not a dummy destroy, so call the destroy func
			if (destroyFn.current) {
				destroyFn.current();
			}
		};
	}, []);
};
