import { ReactNode } from "react";
import Subtitle from "@/Components/Typography/Subtitle";

function TitleCard({
	title,
	children,
	topMargin,
	TopSideButtons,
	CardFooter,
}: {
	title: string;
	children: ReactNode;
	topMargin?: string;
	TopSideButtons?: ReactNode;
	CardFooter?: ReactNode;
}) {
	return (
		<div className={"card w-full p-6 bg-base-100 shadow-xl " + (topMargin || "mt-6")}>
			{/* Title for Card */}
			<Subtitle styleClass={TopSideButtons ? "inline-block" : ""}>
				{title}

				{/* Top side button, show only if present */}
				{TopSideButtons && <div className="float-right flex gap-2">{TopSideButtons}</div>}
			</Subtitle>

			<div className="divider mt-2"></div>

			{/** Card Body */}
			<div className="h-full w-full">{children}</div>

			{
				CardFooter /* && (
				<>
					<div className="divider mt-2"></div>
					{CardFooter}
				</>
			) */
			}
		</div>
	);
}

export default TitleCard;
