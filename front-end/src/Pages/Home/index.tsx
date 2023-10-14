import Activities from "@/Components/Activities";
import Banner from "@/Components/Banner";
import Helping from "@/Components/Helping";
import Opportunities from "@/Components/Opportunities";
import Header from "@/Layout/Header";
import { Profile } from "iconsax-react";
import {  useState } from "react";

const HelpingList:HelpI[] = [
    {
        id: "5",
        name: "Seeking Medical Advice",
        description:
            "I've been experiencing [symptoms]. Has anyone else faced this? Any advice or insights are appreciated.",
        comments: ["     ", " ", " ", " "],
    },
    {
        id: "6",
        name: "Seeking Medical Advice",
        description:
            "I've been experiencing [symptoms]. Has anyone else faced this? Any advice or insights are appreciated.",
        comments: [],
    },
    {
        id: "7",
        name: "Seeking Medical Advice",
        description:
            "I've been experiencing [symptoms]. Has anyone else faced this? Any advice or insights are appreciated.",
        comments: [],
    },
    {
        id: "8",
        name: "Seeking Medical Advice",
        description:
            "I've been experiencing [symptoms]. Has anyone else faced this? Any advice or insights are appreciated.",
        comments: [],
    },
];

const Activitiess: ActivityI[] = [
    {
        id: "1",
        name: "Pinktober Sablette Marathon",
        day: "Tuesday",
        time: "8:00",
        max: 32,
        joined: 8,
        tags: ["Activity", "Fitness"],
        image: "public/activity.png",
    },
    {
        id: "2",
        name: "Pinktober Sablette Marathon",
        day: "Tuesday",
        time: "8:00",
        max: 32,
        joined: 8,
        tags: ["Activity", "Fitness"],
        image: "public/activity.png",
    },
    {
        id: "3",
        name: "Pinktober Sablette Marathon",
        day: "Tuesday",
        time: "8:00",
        max: 32,
        joined: 8,
        tags: ["Activity", "Fitness"],
        image: "public/activity.png",
    },
    {
        id: "4",
        name: "Pinktober Sablette Marathon",
        day: "Tuesday",
        time: "8:00",
        max: 32,
        joined: 8,
        tags: ["Activity", "Fitness"],
        image: "public/activity.png",
    },
];

console.log(Activitiess);

const Categories: CategoryI[] = [
    {
        name: "Activities",
        icon: <Profile />,
        content: <Activities title="Activities & Events" data={Activitiess} />,
    },
    {
        name: "Helping Hands",
        icon: <Profile />,
        content: <Helping title="Helping Hands" data={HelpingList} />,
    },
    {
        name: "Opportunities",
        icon: <Profile />,
        content: <Opportunities />,
    },
];

export default function Home() {
    const [currentcategory, setCurrentCategory] = useState(0);
    
    return (
        <div className="w-full flex flex-col pt-8 p-6 relative">
            <div className="absolute -top-44 -left-4 bg-base-200 rounded-full w-[110%] h-[28rem]"></div>
            <Header />
            <Banner />
            <h3 className="font-bold text-xl mb-2 mt-8">Categories</h3>
            <div className="flex overflow-x-auto no-scrollbar w-full">
                {Categories.map((category, i) => (
                    <a
                        key={i}
                        href="#"
                        onClick={(e) => {
                            setCurrentCategory(i);
                            e.currentTarget.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            });
                        }}
                        className={`scroll-mx-6 mr-4 flex-shrink-0 p-4 w-40 rounded-xl transition-all  ${
                            currentcategory === i
                                ? "text-black bg-base-200 font-bold border-accent border-2"
                                : "bg-white"
                        }`}
                    >
                        <> {category.icon}</>
                        <p className="mt-3"> {category.name}</p>
                    </a>
                ))}
            </div>
            <div className="flex flex-col w-full min-h-screen mt-12">
                {Categories[currentcategory].content}
            </div>
        </div>
    );
}
