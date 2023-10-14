import useNavigation from "@/hooks/useNavigation";
import { Home2, Messages, User, Verify } from "iconsax-react";
import { Link } from "react-router-dom";
const navs = [
    {
        name: "Home",
        icon: <Home2 className="w-5 h-5" />,
        path: "/app/",
    },
    {
        name: "Self-Exam",
        icon: <Verify className="w-5 h-5" />,
        path: "/app/self-exam",
    },
    {
        name: "Ai Doctor",
        icon: <img src="/public/Vector.png" />,
        path: "/app/ai-doctor",
    },
    {
        name: "Q&A",
        icon: <Messages className="w-5 h-5" />,
        path: "/chat",
    },
    {
        name: "Profile",
        icon: <User className="w-5 h-5" />,
        path: "/app/profile",
    },
];
function Navigation() {
    const { isOpen } = useNavigation();
    if (!isOpen) return null;
    return (
        // <div className="bg-gray-200">
        <div className="btm-nav -bottom-2">
            {navs.map((elm, i) => (
                <Link key={"nav" + i} to={elm.path}>
                    <span className={` ${location.pathname === elm.path ? "text-primary" : ""}`}>
                        {elm.icon}
                    </span>
                    <span
                        className={`btm-nav-label text-sm ${
                            location.pathname === elm.path ? "text-primary" : ""
                        }`}
                    >
                        {elm.name}
                    </span>
                </Link>
            ))}
        </div>
        // </div>
    );
}

export default Navigation;
