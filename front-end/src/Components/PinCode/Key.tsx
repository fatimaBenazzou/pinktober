import { motion } from "framer-motion";
interface KeyProps {
  keyValue: number;
  center?: boolean;
  pressKey: (keyValue: number) => void;
}


const Key: React.FC<KeyProps> = (props) => (
    <motion.div
        className={`btn btn-square w-full h-16 text-2xl font-bold grid justify-center items-center cursor-pointer `}
        whileTap={{ scale: 0.9 }}
        {...props}
        children={props.keyValue}
        onClick={() => props.pressKey(props.keyValue)}
    />
);

export default Key;
