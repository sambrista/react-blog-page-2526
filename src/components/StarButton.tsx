import { useState } from "react";
import "./StarButton.css";


export default function StarButton() {
    const [favorito, setFavorito] = useState(false);

    function handleClick() {
        setFavorito(!favorito);
    }

    return (<button className="star-button" onClick={handleClick}>{favorito? "★" : "☆"}</button>);
}