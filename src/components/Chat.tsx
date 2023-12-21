// @ts-nocheck

import { useState } from "react";
import { GrLike, GrDislike } from "react-icons/gr";

function Chat({ data, addToBox2, addToBox3 }) {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [addedToBox2, setAddedToBox2] = useState(false);
    const [addedToBox3, setAddedToBox3] = useState(false);

    function likeHandler() {
        setLike((curr) => {
            if (curr + 1 > 5 && !addedToBox2) {
                addToBox2(data);
                setAddedToBox2(true);
            } else if (curr + 1 > 10 && !addedToBox3) {
                addToBox3(data);
                setAddedToBox3(true);
            }
            return curr + 1;
        });
    }

    function dislikeHandler() {
        setDislike((curr) => (curr += 1));
    }

    return (
        <div className="bg-white py-4 flex flex-col gap-2 w-87 px-6 my-2 rounded-lg border border-gray-300">
            <h2>{data}</h2>
            <div className="flex gap-4">
                <div className="flex gap-2 justify-center items-center">
                    <p>{like}</p>
                    <GrLike
                        onClick={likeHandler}
                        className={`${like === 1 ? "text-green-800" : ""}`}
                    />
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <p>{dislike}</p>
                    <GrDislike
                        onClick={dislikeHandler}
                        className={`${dislike === 1 ? "text-red-800" : ""}`}
                    />
                </div>
            </div>
        </div>
    );
}

export default Chat;
