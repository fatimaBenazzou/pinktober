import { useEffect, useState } from "react";
import FaceFrownIcon from "@heroicons/react/24/solid/FaceFrownIcon";
import { useAppDispatch, useLang } from "@/hooks";
import { Link } from "react-router-dom";
import ContentType from "./content/ContentType";
import { setPageTitle } from "@/app/context/header";
import { Refresh2 } from "iconsax-react";

function Error500({ backTo = "/", refetch }: { backTo?: string; refetch?: () => void }) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setPageTitle({ title: "Internal Error" }));
		return () => {
			dispatch(setPageTitle({ title: "" }));
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [content, setContent] = useState<ContentType | null>(null);
	const { language } = useLang();

	useEffect(() => {
		import("./content/" + language).then((cc) => {
			setContent(cc.default);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [language]);

	if (!content) return;

	return (
		<div className="hero h-4/5">
			<div className="hero-content text-primary text-center flex-col gap-10">
				<div className="max-w-md py-40">
					<FaceFrownIcon className="h-48 w-48 inline-block" />
					<h1 className="text-5xl  font-bold">{content.title}</h1>
					{backTo && (
						<Link to={backTo} className="btn btn-primary mt-10">
							{content.button}
						</Link>
					)}
					{refetch && (
						<button
							key={"Refresh"}
							onClick={() => {
								refetch();
							}}
							className="btn btn-outline btn-primary rounded-full flex items-center justify-center mx-auto mt-10"
						>
							<Refresh2 className="w-4 h-4" />
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Error500;
