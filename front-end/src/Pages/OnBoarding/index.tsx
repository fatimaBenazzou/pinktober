import { ArrowRight } from "iconsax-react";
import OnBoardingPage from "./OnBoardingPage";
import LoginIcon from "@/icons/LoginIcon";
import { Link } from "react-router-dom";
import { useState } from "react";
import DoctorIcon from "@/icons/DoctorIcon";

const OnBoarding = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleNext = () => {
        setCurrentPage(2);
    };

    return (
        <div className="w-full h-screen">
            {currentPage === 1 ? (
                <OnBoardingPage
                    image={<LoginIcon />}
                    title="Join Our Pinktober Community"
                    subtitle="Connect with survivors, fighters, and supporters. Share experiences, gain opportunities, and be part of Pinktober activities."
                    link={
                        <button onClick={handleNext} className="btn btn-primary btn-circle">
                            <ArrowRight className="text-base-100" />
                        </button>
                    }
                />
            ) : (
                <OnBoardingPage
                    image={<DoctorIcon />}
                    title="AI Doctor and Chatbot"
                    subtitle="Benefit from integrated AI for cancer prediction and chatbot assistance. Access personalized health insights at your fingertips."
                    link={
                        <Link to={"/login"} className="btn btn-primary btn-circle">
                            <ArrowRight className="text-base-100" />
                        </Link>
                    }
                />
            )}
        </div>
    );
};

export default OnBoarding;
