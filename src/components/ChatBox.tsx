// @ts-nocheck

import { useState } from "react";
import { IoSend } from "react-icons/io5";

function ChatBox({ setChatsArray }) {
    const [chat, setChat] = useState("");

    function sendChatHandler() {
        setChatsArray((curr) => [...curr, chat]);
        setChat("");
    }

    return (
        <div className="flex relative">
            <input
                type="text"
                className="py-2 w-96 pl-4 rounded-lg border border-gray-300"
                placeholder="Enter Chat"
                value={chat}
                onChange={(e) => setChat(e.target.value)}
                onKeyDown={(e) => {
                    if (e.code === "Enter") {
                        setChatsArray((curr) => [...curr, chat]);
                        setChat("");
                    }
                }}
            />
            <IoSend
                className="text-black absolute text-xl right-2 top-2.5"
                onClick={sendChatHandler}
            />
        </div>
    );
}

export default ChatBox;
