import { useAppDispatch, useAppSelector } from ".";
import { setLang } from "../app/context/language";

export default function useLang() {
    const dispatch = useAppDispatch();
    const language = useAppSelector((state) => state.language);
    const set = (lang: LangI) => {
        dispatch(setLang(lang));
    };
    return { setLanguage: set, language };
}
