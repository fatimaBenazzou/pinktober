import { useGetNotificationsListMutation } from "@/app/backend/export/notifications";
import Notification from "./Notification";
import { useEffectOnce, useLang, useServerNotification } from "@/hooks";
import Fallback from "../Fallback";
import { subDays } from "date-fns";
import { useEffect, useState } from "react";
import ContentType from "./content/ContentType";

export default function NotificationsList() {
    const [GetNotificationsList, { isLoading }] = useGetNotificationsListMutation();
    const { notifications, initNotifications } = useServerNotification();
    useEffectOnce(() => {
        GetNotificationsList({ createdSince: subDays(new Date(), 7).getTime() })
            .unwrap()
            .then((res) => {
                initNotifications(res.data);
            })
            .catch(console.error);
    });

	const [content, setContent] = useState<ContentType | null>(null);
    const { language } = useLang();

    useEffect(() => {
        import("./content/" + language).then((cc) => {
            setContent(cc.default);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language]);

    if (!content) return;

    return (
        <div className="flex flex-col max-h-[70vh] overflow-auto max-w-[80vw] lg:max-w-[40vw]">
            {isLoading ? (
                <Fallback />
            ) : notifications.length === 0 ? (
                <div className="bg-transparent p-8 text-center border-none">{content.nonotification}</div>
            ) : (
                notifications.map((notification: ServerNotificationI, i) => (
                    <Notification
                        key={notification._id}
                        color={i % 2 === 0 ? `bg-base-100` : `bg-base-200`}
                        notification={notification}
                    />
                ))
            )}
        </div>
    );
}
