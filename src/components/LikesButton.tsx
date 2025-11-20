import { useState } from "react";


function LikesButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return <button onClick={handleClick}>{likes} 👍</button>
}

export default LikesButton;