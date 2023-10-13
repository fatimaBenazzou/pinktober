import NumberPad from "./NumberPad";
import Dots from "./Dots";
import useKeypad from "../../hooks/useKeyPad";

type PinProps = {
	targetCode: string;
};


const PinCode: React.FC<PinProps> = ({ targetCode }) => {
	const { code, pressKey, reset, isError } = useKeypad(targetCode.length);
  
	return (
	  <div className="p-8">
		<Dots complete={code.length} length={targetCode.length} isError={isError} />
		<NumberPad pressKey={pressKey} reset={reset} />
	  </div>
	);
  };
  
  export default PinCode;