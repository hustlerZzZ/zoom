// @ts-nocheck
import { useState } from "react";
import Chat from "./components/Chat";
import ChatBox from "./components/ChatBox";

function App() {
    const [chatsArray, setChatsArray] = useState([]);
    const [greaterThan5, setGreaterThan5] = useState([]);
    const [greaterThan10, setGreaterThan10] = useState([]);

    const addToBox2 = (chat) => {
        setGreaterThan5((prevChats) => [...prevChats, chat]);
    };

    const addToBox3 = (chat) => {
        setGreaterThan10((prevChats) => [...prevChats, chat]);
    };

    return (
        <div className="bg-gray-100 flex p-8 h-dvh rounded-lg">
            <div className="flex-grow flex flex-col items-center justify-between py-8">
                <div className="flex w-96 flex-col h-[800px] overflow-y-scroll">
                    {chatsArray.length === 0 ? (
                        <h2>No Chat Found</h2>
                    ) : (
                        chatsArray.map((el, index) => (
                            <Chat
                                data={el}
                                key={index}
                                addToBox2={addToBox2}
                                addToBox3={addToBox3}
                            />
                        ))
                    )}
                </div>
                <div className="mt-4">
                    <ChatBox setChatsArray={setChatsArray} />
                </div>
            </div>
            <div className="bg-gray-100 flex-grow flex flex-col items-center justify-between py-8">
                <div className="flex w-96 flex-col h-[800px] overflow-y-scroll">
                    {greaterThan5.length === 0 ? (
                        <h2>No Chat Found</h2>
                    ) : (
                        greaterThan5.map((el) => (
                            <div className="bg-white py-4 flex flex-col gap-2 w-96 px-6 my-2 rounded-lg">
                                {el}
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="bg-gray-100 flex-grow flex flex-col items-center justify-between py-8">
                <div className="flex w-96 flex-col h-[800px] overflow-y-scroll">
                    {greaterThan10.length === 0 ? (
                        <h2>No Chat Found</h2>
                    ) : (
                        greaterThan10.map((el) => (
                            <div className="bg-white py-4 flex flex-col gap-2 w-96 px-6 my-2 rounded-lg">
                                {el}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
