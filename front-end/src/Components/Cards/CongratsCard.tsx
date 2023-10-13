import { useLang } from "@/hooks";
import { useEffect, useState } from "react";
import ContentType from "./content/ContentType";
import { Link } from "react-router-dom";

type Props = {
	description: string;
	type: "error" | "primary";
	link?: {
		text: string;
		href: string;
	};
};

const CongratsCard = ({ type, description, link }: Props) => {
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
		<div className={`card flex items-center bg-${type} w-full shadow-xl py-12`}>
			<div className="flex flex-col items-center w-full">
				<div className="avatar w-24 ">
					<figure className="mask mask-circle bg-base-100 p-5">
						<img src="/favicon.svg" />
					</figure>
				</div>
				<div className="card-body items-center text-center text-base-100">
					<h2 className="card-title">{type === "primary" ? content.congratulation.congrats : content.congratulation.error}</h2>
					<p>{description}</p>
					{link && (
						<Link className="btn btn-secondary" to={link.href}>
							<p>{link.text}</p>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

// px-10 pt-10

export default CongratsCard;
