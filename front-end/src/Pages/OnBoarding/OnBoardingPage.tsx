import { ArrowRight } from "iconsax-react";
import React from "react";

type Props = {
    image: React.ReactNode;
    title: string;
    subtitle: string;
    link: React.ReactNode;
};

const OnBoardingPage = ({ image, title, subtitle, link }: Props) => {
    return (
        // <div className=" px-4 w-full h-full">
        <div className="p-6 w-full h-full flex flex-col items-center justify-center gap-10">
            <div className="">{image}</div>
            <div className=" text-center">
                <h1 className="text-primary text-3xl font-bold mb-6 ">{title}</h1>
                <p className="text-secondary ">{subtitle}</p>
            </div>

            <div className="w-full flex justify-between items-center">
                <div> <ArrowRight /></div>
                <>{link}</>
            </div>
        </div>
        // </div>
    );
};

export default OnBoardingPage;
