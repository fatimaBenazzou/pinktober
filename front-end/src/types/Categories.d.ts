interface CategoryI {
    name: string;
    icon: React.ReactNode;
    content: React.ReactNode;
}

interface ActivityI {
    id: string;
    name: string;
    day: string;
    time: string;
    max: number;
    joined: number;
    tags: string[];
    image: string;
}
interface OpportunityI {
    id: string;
    name: string;
    location: string;
    tag: string;
    image: string;
}

interface HelpI {
    id: string;
    name: string;
    description: string;
    comments: string[];
}

interface StoryI {
    id: string;
    PostType: "Unknown" | "Public";
    picture?: string;
    name?: string;
    title: string;
    description: string;
}
