import { Back } from "iconsax-react";
import Key from "./Key";

interface NumberPadProps {
    pressKey: (keyValue: number) => void;
    reset: () => void;
}

const NumberPad: React.FC<NumberPadProps> = ({ pressKey, reset }) => (
    <div className="grid  grid- grid-cols-3 gap-6 justify-center justify-items-center ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <Key key={num} pressKey={pressKey} keyValue={num} />
        ))}
		<div className="bg-stone-200 w-full h-full rounded-2xl"></div>
        <Key pressKey={pressKey} keyValue={0} center />
        <div className="cursor-pointer bg-stone-200 w-full h-full rounded-2xl flex justify-center items-center" onClick={reset}>
            <Back />
        </div>
    </div>
);

export default NumberPad;
