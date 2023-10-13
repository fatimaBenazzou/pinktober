import { useAppDispatch, useAppSelector } from "./redux";
import { ThemesI, setTheme } from "../app/context/theme";

function useTheme() {
    const dispatch = useAppDispatch(),
        theme = useAppSelector((state) => state.theme),
        set = (theme: ThemesI) => {
            dispatch(setTheme(theme));
        };

    return { setTheme: set, theme };
}
export default useTheme;
