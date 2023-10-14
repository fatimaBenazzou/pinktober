// import DoctorIcon from "@/icons/DoctorIcon";

import { Link } from "react-router-dom";

const AiDoctor = () => {
    return (
        <div className="quiz-container h-full p-6 bg-white py-24 ">
            <div className=" w-full h-full flex flex-col items-center justify-center gap-14">
                <div className=" text-center">
                    <h1 className=" text-4xl font-bold text-primary mb-6 ">
                        AI Doctor and Chatbot 🩺
                    </h1>
                    <p className="text-secondary">
                        AI doctor is your 24/7 companion, ready to provide information, answer
                        questions, and offer guidance. Together, we'll keep you informed and
                        empowered on Your Health Journey.
                    </p>
                </div>
                <div className="text-left">
                    <h2 className=" text-lg font-bold text-primary mb-4">
                        👉🏻 You should have these analyses:
                    </h2>
                    <ul className="list-disc pl-6">
                        <li>Mammogram</li>
                        <li>Breast Ultrasound</li>
                        <li>Blood Tests</li>
                        <li>Clinical Breast Exam (CBE)</li>
                    </ul>
                </div>

                {/* <button className="btn btn-primary btn-outline rounded-3xl w-36 text-lg">
                    Start
                </button> */}
                <Link to={"form"} className="btn btn-primary btn-outline text-base-100 w-full mt-auto">Start</Link>
            </div>
        </div>
    );
};

export default AiDoctor;
