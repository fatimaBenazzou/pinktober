import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DotProps {
    variant: "complete" | "error" | "initial" | "loading"| "current";
    isCurrent:boolean;
}

const Dot: React.FC<DotProps> = ({ variant, isCurrent }) => {
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isCurrent) {
            interval = setInterval(() => {
                setIsBlinking(prevState => !prevState);
            }, 500); // Changez la vitesse de clignotement ici (en millisecondes)
        } else {
            setIsBlinking(false);
        }

        return () => clearInterval(interval);
    }, [isCurrent]);

    return (
    <div className="bg-stone-200 w-16 h-20 rounded-xl flex justify-center items-center relative">
        <motion.div
            className="w-4 h-4  border-black rounded-[50%] my-0 mx-4 "
            variants={{
                complete: { background: "#016862" },
                loading: { background: "#0168F2" },
                error: { background: "#ff0000" },
                initial: { background: "black" },
                current: { background: "" },
            }}
            animate={variant}
                whileHover="hover" // Ajout de l'animation au survol
                initial="initial"
        />

        {/* curseur */}
        {isCurrent && isBlinking && (
                    <motion.div
                        className="absolute w-1 h-8 bg-primary left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ repeat: Infinity, duration: 0.5 }}
                    />
                )}
    </div>
)};

interface DotsProps {
    complete: number;
    length?: number;
    isError?: boolean;
    isLoading?: boolean;
}

const Dots: React.FC<DotsProps> = ({ complete, length = 4, isError, isLoading }) => {
    return (
        <div className=" flex justify-center m-16 gap-8">
            {[...new Array(length)].map((_, i) => (
                <Dot
                    key={i}
                    variant={
                        isLoading
                            ? "loading"
                            : isError
                            ? "error"
                            : complete > i
                            ? "complete"
                            : complete === i
                            ? "current"
                            : "initial"
                    }
                    isCurrent={complete === i} 
                />
            ))}
        </div>
    );
};

export default Dots;
