import Activities from "@/Components/Activities";
import Banner from "@/Components/Banner";
import Helping from "@/Components/Helping";
import Opportunities from "@/Components/Opportunities";
import Stories from "@/Components/Stories";
import Header from "@/Layout/Header";
import { useState } from "react";

const HelpingList: HelpI[] = [
    {
        id: "5",
        name: "Seeking Medical Advice",
        description:
            "I've been experiencing [symptoms]. Has anyone else faced this? Any advice or insights are appreciated.",
        comments: ["     ", " ", " ", " "],
    },
    {
        id: "6",
        name: "Upcoming Event Details",
        description:
            "Can someone please share information about the Pinktober event happening this weekend?",
        comments: [],
    },
    {
        id: "7",
        name: "Chemotherapy Experience",
        description:
            "I'm about to start chemotherapy. Can anyone share their experiences or tips for managing side effects?",
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
const Storiess: StoryI[] = [
    {
        id: "111",
        PostType: "Unknown",
        title: "Unveiling the Story of Resilience ",
        description:
            "In the heart of the Pinktober community, there was a voice that emerged with a story that felt like it belonged to everyone. Maria, a remarkable woman, shared her breast cancer journey with a candor that inspired everyone who had the privilege of listening.",
    },
    {
        id: "112",
        PostType: "Public",
        picture: "https://reqres.in/img/faces/2-image.jpg",
        name: "Fatima Zahra",
        title: "Seeking MeResilience Blossoms: The Journey of Fatima",
        description:
            "Fatima's Journey: Once upon a time in a quiet town, there lived a woman named Fatima. She was an embodiment of strength and grace. When she received the daunting news of her breast cancer diagnosis, she faced it with unwavering determination.",
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
        image: "/public/activity.png",
    },
    {
        id: "2",
        name: "Pinktober Sablette Marathon",
        day: "Tuesday",
        time: "8:00",
        max: 32,
        joined: 8,
        tags: ["Activity", "Fitness"],
        image: "/public/activity2.png",
    },
    {
        id: "3",
        name: "Pinktober Sablette Marathon",
        day: "Tuesday",
        time: "8:00",
        max: 32,
        joined: 8,
        tags: ["Activity", "Fitness"],
        image: "/public/activity.png",
    },
    {
        id: "4",
        name: "Pinktober Sablette Marathon",
        day: "Tuesday",
        time: "8:00",
        max: 32,
        joined: 8,
        tags: ["Activity", "Fitness"],
        image: "/public/activity.png",
    },
];
const OpportunitiesList: OpportunityI[] = [
    {
        id: "1",
        name: "-10% for all our products!",
        location: "Apple Store - Alger Centre",
        tag: "Opportunity",
        image: "/public/opportunity2.png",
    },
    {
        id: "2",
        name: "Promo -20% during October",
        location: "Nike Store - Alger centre",
        tag: "Opportunity",
        image: "/public/opportunity.png",
    },
    {
        id: "3",
        name: "-10% for all our products!",
        location: "Apple Store - Alger Centre",
        tag: "Opportunity",
        image: "/public/opportunity2.png",
    },
    {
        id: "4",
        name: "-10% for all our products!",
        location: "Apple Store - Alger Centre",
        tag: "Opportunity",
        image: "/public/opportunity.png",
    },
];

const Categories: CategoryI[] = [
    {
        name: "Activities",
        icon: "🎨",
        content: <Activities title="Activities & Events" data={Activitiess} />,
    },
    {
        name: "Helping Hands",
        icon: "🙏",
        content: <Helping title="Helping Hands" data={HelpingList} />,
    },
    {
        name: "Opportunities",
        icon: "🎁",
        content: <Opportunities title="Helping Hands" data={OpportunitiesList} />,
    },
    {
        name: "Stories",
        icon: "📑",
        content: <Stories title="Stories" data={Storiess} />,
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
