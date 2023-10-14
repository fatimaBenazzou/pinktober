import { InfoCircle } from "iconsax-react";
import { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

interface Option {
    text: string;
    icon?: string;
    points: number;
}

interface Question {
    question: string;
    description: string[];
    options: Option[];
    next?: string;
    style?: number;
}

const questions: Question[] = [
    {
        question: "Have you undergone any breast surgeries?",
        description: ["Personal History"],
        options: [
            { text: "Yes", icon: "✅", points: 0 },
            { text: "No", icon: "❌", points: 0 },
        ],
        style: 1,
        next: "Next",
    },
    {
        question: "Are you currently taking any hormone therapies",
        description: [],
        options: [
            { text: "Yes", icon: "✅", points: 0 },
            { text: "No", icon: "❌", points: 0 },
        ],
        style: 1,
        next: "Next",
    },
    {
        question: "How often do you engage in physical activity?",
        description: [],
        options: [
            { text: "+3 times a week", points: 0 },
            { text: "1-2 times a week", points: 0 },
            { text: "Not at all", points: 0 },
        ],
        style: 2,
        next: "Next",
    },
    {
        question: "Do you currently smoke or have a history of smoking?",
        description: [],
        options: [
            { text: "Yes, I currently smoke", points: 0 },
            { text: "Yes, I smoke occasionally", points: 0 },
            { text: "No, I've never smoked", points: 0 },
        ],
        style: 2,
        next: "Next",
    },
    {
        question: "Do you have a family history of breast cancer?",
        description: [" (mother, sister,...)"],
        options: [
            { text: "Yes", icon: "✅", points: 0 },
            { text: "No", icon: "❌", points: 0 },
        ],
        style: 1,
        next: "Next",
    },
    {
        question: "How would you describe the regularity of your menstrual cycle?",
        description: [],
        options: [
            { text: "Regular", points: 0 },
            { text: "Somewhat irregular", points: 0 },
            { text: "Very irregular", points: 0 },
            { text: "Monopause", points: 0 },
        ],
        style: 2,
        next: "Next",
    },
    {
        question: "How often do you perform breast self-exams?",
        description: [],
        options: [
            { text: "Monthly", points: 0 },
            { text: "Quarterly", points: 0 },
            { text: "Rarely", points: 0 },
            { text: "Never", points: 0 },
        ],
        style: 2,
        next: "Next",
    },
    {
        question: "Are you familiar with the proper technique for breast self-exams?",
        description: ["or"],
        options: [
            { text: "Yes", icon: "✅", points: 0 },
            { text: "No", icon: "❌", points: 0 },
        ],
        style: 1,
        next: "Next",
    },
    // Steps
    {
        question: "Are you familiar with the proper technique for breast self-exams?",
        description: [
            "By performing a monthly breast self-exam, you take an active role in early detection.",
        ],
        options: [],
        next: "Start",
        style: 3,
    },
    {
        question: "Step01: Preparation",
        description: [
            "Find a quiet, well-lit room and stand or sit in front of a mirror.",
            "Examine your breasts in both relaxed and raised arm positions. Note any changes in size, shape, or skin texture.",
        ],
        options: [{ text: "Asymetrie.png", points: 0 }],
        next: "Next",
        style: 3,
    },
    {
        question: "Step02:Manual Examination",
        description: [
            "Lie on your back and place a small pillow or under your right shoulder.",
            "Use your left hand to examine your right breast.",
            "Perform a circular, firm, but not overly strong, start at the outer edge of your breast and move inward.",
            "Feel for any lumps:",
        ],
        options: [{ text: "manual.png", points: 0 }],
        next: "Next",
        style: 3,
    },
    {
        question: "Step03: Nipple Examination",
        description: [
            "Gently squeeze each nipple between your thumb and forefinger, checking for any discharge or changes in nipple size, shape, or texture.",
        ],
        options: [{ text: "nipple.png", points: 0 }],
        next: "Next",
        style: 3,
    },
    {
        question: "Step04: Repeat Monthly",
        description: [
            "Perform this self-exam once a month, ideally a few days after your menstrual period, or on a specific date if you are postmenopausal.",
        ],
        options: [],
        next: "Done",
        style: 4,
    },
];

const SelfExam = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const progress =
        currentQuestion !== null ? ((currentQuestion + 1) / questions.length) * 100 : 0;

    const handleStartQuiz = () => {
        setCurrentQuestion(0);
    };

    const handleOptionChange = (option: Option) => {
        setSelectedOption(option);
    };

    const handleNextClick = () => {
        if (selectedOption !== null && currentQuestion !== null) {
            setScore(score + selectedOption.points);
        }

        if (currentQuestion !== null) {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedOption(null);
            } else {
                // Fin du quiz
                alert(`Revenez le mois prochain`);
            }
        }
    };

    return (
        <div className="quiz-container h-screen p-6 bg-white">
            {currentQuestion === null ? (
                <div className="p-6 w-full h-full flex flex-col items-center justify-center gap-10">
                    {/* <div className="mask mask-square h-64">
                        <DoctorIcon />
                    </div> */}
                    <img src="/public/logoS.png" alt="" />
                    <div className=" text-center">
                        <h1 className="text-primary text-3xl font-bold mb-6 ">
                            Welcome to Breast Self-Exam
                        </h1>
                        <p className="text-secondary ">
                            Regular Breast Self-Exams are a powerful tool in your breast health
                            journey. By performing these simple checks, you can become familiar with
                            your breast tissue and detect any changes early. Let's get started.
                        </p>
                    </div>

                    <button
                        onClick={handleStartQuiz}
                        className="btn btn-primary btn-outline rounded-3xl w-36 text-lg"
                    >
                        Start
                    </button>
                </div>
            ) : (
                <>
                    <progress
                        className="progress progress-primary w-full"
                        value={progress}
                        max="100"
                    ></progress>
                    <div
                        className={`question-section question-section flex flex-col gap-6 items-center  h-3/4 mt-28 ${
                            questions[currentQuestion].style === 3 ||
                            questions[currentQuestion].style === 4
                                ? "list-disc text-left"
                                : "text-center"
                        }`}
                    >
                        <div>
                            <h1 className="text-3xl font-bold mb-6">
                                {questions[currentQuestion].question}
                            </h1>
                            <ul
                                className={` ${
                                    questions[currentQuestion].style === 3 ||
                                    questions[currentQuestion].style === 4
                                        ? "list-disc text-left "
                                        : ""
                                }`}
                            >
                                {questions[currentQuestion].description.map((desc) => (
                                    <li className="text-secondary text-lg">{desc}</li>
                                ))}
                            </ul>
                        </div>
                        {questions[currentQuestion].style === 1 && (
                            <div className="answer-section flex justify-evenly w-full">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`custom-radio text-primary w-1/3 h-32 flex flex-col gap-3 justify-center items-center ${
                                            selectedOption === option
                                                ? "bg-base-100 border-2 border-primary rounded-2xl"
                                                : ""
                                        }`}
                                        onClick={() => handleOptionChange(option)}
                                    >
                                        <div className="radio-dot text-2xl">{option.icon}</div>
                                        <div className="radio-label text-xl">{option.text}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {questions[currentQuestion].style === 2 && (
                            <div className="answer-section flex flex-col items-center justify-evenly w-full gap-8 ">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`custom-radio w-full flex gap-3 justify-center  items-center border-2 py-3 rounded-2xl relative ${
                                            selectedOption === option
                                                ? "bg-base-100 border-primary text-primary  "
                                                : " border-neutral"
                                        }`}
                                        onClick={() => handleOptionChange(option)}
                                    >
                                        <div
                                            className={`border-2 w-8 h-8 rounded-lg absolute left-4 ${
                                                selectedOption === option
                                                    ? "bg-base-100 border-primary text-primary  "
                                                    : " border-neutral"
                                            }`}
                                        >
                                            {index + 1}
                                        </div>
                                        <div className="radio-label text-lg pl-1">
                                            {option.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {questions[currentQuestion].style === 3 && (
                            <div className="answer-section flex items-center justify-evenly w-full  ">
                                <img
                                    src={`/public/${questions[currentQuestion].options[0].text}`}
                                    alt=""
                                />
                            </div>
                        )}
                        {questions[currentQuestion].style === 4 && (
                                <div className="alert w-full flex text-left">
                                    <InfoCircle className="w-12 h-12"/>
                                    <span>Your upcoming self-exam is scheduled for [the date]. We'll send you a reminder.</span>
                                </div>
                        )}
                        {/* </div> */}
                        <button
                            className="btn btn-primary btn-outline bg-base-100 w-full mt-auto"
                            onClick={handleNextClick}
                            disabled={
                                selectedOption === null
                                    ? questions[currentQuestion].style === 3 ||
                                      questions[currentQuestion].style === 4
                                        ? false
                                        : true
                                    : false
                            }
                        >
                            {questions[currentQuestion].next}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default SelfExam;
