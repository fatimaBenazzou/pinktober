import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useUser } from "@/hooks";

const Error404 = lazy(() => import("@/Pages/Errors/Error404"));

const Home = lazy(() => import("@/Pages/Home"));
const Chat = lazy(() => import("@/Pages/Chat"));
const SelfExam = lazy(() => import("@/Pages/SelfExam"));
const AiDoctor = lazy(() => import("@/Pages/AiDoctor"));
const FormI = lazy(() => import("@/Pages/AiDoctor/FormI"));
const Consult = lazy(() => import("@/Pages/AiDoctor/Consult"));
const Good = lazy(() => import("@/Pages/AiDoctor/Good"));
const OnBoarding = lazy(() => import("@/Pages/OnBoarding"));
const ProfileP = lazy(() => import("@/Pages/ProfileP"));
const Layout = lazy(() => import("@/Layout"));
const Logout = lazy(() => import("@/Pages/Logout"));
const LogIn = lazy(() => import("@/Pages/LogIn"));

const Router = () => {
    const { user } = useUser();
    return useRoutes([
        { index: true, element: <Navigate to={user ? "/app" : "/onboarding"} /> },
        {
            path: "/onboarding",
            element: <OnBoarding />,
        },
        { path: "chat", element: <Chat /> },
        {
            path: "/app",
            element: user && user._id ? <Layout /> : <Navigate to="/auth/login" />,
            children: [
                { path: "", element: <Home /> },
                { path: "self-exam", element: <SelfExam /> },
                { path: "ai-doctor", element: <AiDoctor /> },
                { path: "ai-doctor/form", element: <FormI /> },
                { path: "ai-doctor/consult", element: <Consult /> },
                { path: "ai-doctor/good", element: <Good /> },
                {
                    path: "profile", // the url
                    element: <ProfileP />,
                },

                { path: "*", element: <Error404 /> },
            ],
        },

        {
            path: "/auth/login",
            element: user ? <Navigate to="/app" /> : <LogIn />,
        },
        {
            path: "auth/logout",
            element: user ? <Logout /> : <Navigate to="/auth/login" />,
        },

        { path: "*", element: <Error404 /> },
    ]);
};
export default Router;
