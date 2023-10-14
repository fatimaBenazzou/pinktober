//import BellIcon from "@heroicons/react/24/outline/BellIcon";
//import { openRightDrawer } from "@/app/context/rightDrawer";
//import { RIGHT_DRAWER_TYPES } from "@/utils/globalConstantUtil";

import useNavigation from "@/hooks/useNavigation";
import { Card, Home2, Messages, User, Verify } from "iconsax-react";
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
        icon: <Card className="w-5 h-5" />,
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
        path: "/app/settings",
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
				   {elm.icon}
					  
					   <span className="btm-nav-label text-sm">{elm.name}</span>
				   </Link>
                ))}
                
            </div>
        // </div>
    );
}

export default Navigation;
