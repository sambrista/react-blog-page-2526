import { useEffect, useState } from "react";


function LikesButton() {
    const [likes, setLikes] = useState(Number.parseInt(localStorage.getItem("likes") ?? "0"));

    useEffect(() => {
        localStorage.setItem("likes", likes.toString());
    },[likes])

    function handleClick() {
        setLikes(likes + 1);
    }

    return <button onClick={handleClick}>{likes} 👍</button>
}

export default LikesButton;