import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";
import { useTheme } from "@/hooks";

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();

	/* Light and dark theme selection toggle **/
	return (
		<label
			className="swap "
			onClick={(e) => {
				e.preventDefault();
				setTheme(theme === "luxury" ? "pinktober-theme" : "luxury");
				return false;
			}}
		>
			<input type="checkbox" id="darkModeSwitcher" />
			<SunIcon className={"fill-current w-6 h-6 " + (theme === "luxury" ? "swap-on" : "swap-off")} />
			<MoonIcon className={"fill-current w-6 h-6 " + (theme === "pinktober-theme" ? "swap-on" : "swap-off")} />
		</label>
	);
}
