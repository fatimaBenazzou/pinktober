import { Suspense, useEffect, useState } from "react";
import { useGetUserDataMutation } from "@/app/backend/export/auth";
import { useEffectOnce, useUser } from "@/hooks";
import Notifications from "@/Components/Notifications";
import Fallback from "@/Components/Fallback";
import Router from "@/Routes";
import "@/App.css";
import SplashScreen from "./Pages/SplashScreen";

function App() {
    const [loading, setLoading] = useState(true);
    const [GetUserData] = useGetUserDataMutation();
    const { setUser, removeUser } = useUser();

    useEffectOnce(() => {
        GetUserData()
            .unwrap()
            .then((response) => {
                setUser(response.data);
            })
            .catch(() => {
                removeUser();
            });
    });

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading ? (
                <SplashScreen />
            ) : (
                <>
                    <Suspense fallback={<Fallback />}>
                        <Router />
                    </Suspense>
                    <Notifications />
                </>
            )}
        </>
    );
}

export default App;
