import { useEffectOnce } from "@/hooks";

type Props = { labels: string[]; fonts: { family: string; weight: string; style: string }[] };
function toPrint() {
	window.print();
}
function Printable({ labels /*, fonts */ }: Props) {
	useEffectOnce(() => {
		document.fonts.ready.then((/* fontFaceSet */) => {
			//console.log([...fontFaceSet]);
			//const fontFaces = [...fontFaceSet].filter((f) => f.status === "loaded");
			//const myFontsAreLoaded = fonts.every((font) => fontFaces.some((f) => f.family === font.family && f.weight === font.weight));
			//console.log({ myFontsAreLoaded });
			toPrint();
		});
	});
	return (
		<div className="flex flex-col" id="printable">
			{labels.map((label, i) => (
				<div key={i} dangerouslySetInnerHTML={{ __html: label }} />
			))}
		</div>
	);
}

export default Printable;
