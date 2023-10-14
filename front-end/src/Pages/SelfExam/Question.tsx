type Props = {
    progress: number;
    title: string;
    description?: string;
    next?: React.ReactNode;
    children?: React.ReactNode;
};

const Question: React.FC<Props> = ({
    progress,
    title,
    description,
    next = "Next",
    children,
}: Props) => {
    return (
        <div className="h-screen">
            <progress
                className="progress progress-primary w-full"
                value={progress}
                max="100"
            ></progress>
            <div className="question-section flex flex-col  items-center text-center h-full mt-28">
                <div className="">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-secondary">{description} </p>
                </div>
                <>{children}</>
                <>{next}</>
            </div>
        </div>
    );
};

export default Question;
