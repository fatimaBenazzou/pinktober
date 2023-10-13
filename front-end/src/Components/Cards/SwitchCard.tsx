import { useLang } from "@/hooks";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import ContentType from "./content/ContentType";

const SwitchCard = ({
	extraObject,
}: // closeModal,
{
	extraObject: { confettiVisibility: boolean };
}) => {
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
		<div className="card w-72 flex  items-center p-4">
			<ReactConfetti className=" w-[100%] h-[100%]" numberOfPieces={extraObject.confettiVisibility ? 500 : 0} />
			<div className="avatar ">
				<figure className="mask mask-circle p-5">
					<img src="/favicon.svg" />
				</figure>
			</div>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{content.switch}</h2>
			</div>
		</div>
	);
};

export default SwitchCard;
