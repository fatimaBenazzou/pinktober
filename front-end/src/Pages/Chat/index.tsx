import { useAskChatMutation, useGetAllMessagesQuery } from "@/app/backend/export/chat";
import useNavbar from "@/hooks/useNavbar";
import usePageTitle from "@/hooks/usePageTitle";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useEffect, useState } from "react";
import Error500 from "../Errors/Error500";
import Fallback from "@/Components/Fallback";
import Loading from "@/Components/Loading";
import { useNavigate } from "react-router-dom";

function Question({ message }: { message: string }) {
    return (
        <div className="chat chat-end">
            <div className="chat-bubble bg-primary">{message}</div>
        </div>
    );
}
function Answer({ message }: { message: string }) {
    return (
        <div className="chat chat-start ">
            <div className="chat-image avatar ">
                <div className="w-10 p-2 rounded-full bg-base-200">
                    <img src="/public/chopper.png" />
                </div>
            </div>
            <div className="chat-bubble bg-base-100 text-neutral">{message}</div>
        </div>
    );
}

export default function Chat() {
    usePageTitle("Finance chat");
    const { data: responses, isFetching, refetch } = useGetAllMessagesQuery();
    const [AskChat, { isLoading: isAsking }] = useAskChatMutation();
    const { setIsOpen } = useNavbar();
    const [message, setMessage] = useState<string>("");
    useEffect(() => {
        setIsOpen(true);
        // scroll to the bottom of the chat
        const chat = document.querySelector(".flex.flex-col.pb-24.overflow-y-auto.no-scrollbar");
        if (chat) {
            chat.scrollTop = chat.scrollHeight;
        }
        return () => {
            setIsOpen(false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const navigate = useNavigate();

    if (isFetching) return <Fallback />;
    if (!responses) return <Error500 />;
    const { data: messages } = responses;

    return (
        <div className="flex flex-col relative h-screen justify-end w-full px-6 bg-[url('/public/bg.png')] bg-cover">
            <div className="absolute top-0 left-0 w-full px-6 py-3 gap-4 bg-base-100 z-50">
                <button
                    className="btn btn-ghost btn-circle active:bg-base-200 absolute z-50"
                    disabled={isAsking}
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    <ArrowLeft2 />
                </button>
                <div className="w-full flex flex-col relative  text-black place-items-center ">
                    <h2 className="font-bold text-primary text-lg ">Chopper 🍭</h2>
                    <div className="flex items-center gap-1">
                        <div className="rounded-full bg-green-600 w-2 h-2"></div>
                        <p className="text-xs">Always active</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 py-24 overflow-y-auto no-scrollbar">
                {messages.map((message) =>
                    message.chat.role === "user" ? (
                        <Question message={message.chat.content} />
                    ) : (
                        <Answer message={message.chat.content} />
                    )
                )}
            </div>
            <div className="flex absolute bottom-0 left-0 w-full px-6 py-3 gap-4 bg-base-100">
                <div className="w-full flex relative text-black">
                    <input
                        className="input rounded-full w-full bordered border-4 pr-12"
                        placeholder="Type a message..."
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        disabled={isAsking}
                        value={message}
                    />
                </div>
                <button
                    className="btn btn-primary btn-circle text-base-100"
                    disabled={isAsking}
                    onClick={() => {
                        AskChat(message)
                            .then(() => {
                                setMessage("");
                                refetch();
                            })
                            .catch(() => {
                                refetch();
                            });
                    }}
                >
                    {isAsking ? <Loading /> : <ArrowRight2 />}
                </button>
            </div>
        </div>
    );
}
