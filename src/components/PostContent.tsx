import type { Entrada } from "../types/entrada";
import LikesButton from "./LikesButton";
import StarButton from "./StarButton";
import "./PostContent.css";
import Carousel from "./Carousel";

interface PostContentProps {
    entrada : Entrada
};

function PostContent( {entrada} : PostContentProps) {
    return (<div className="post-content">
  <h2 className="post-content__title">{entrada.titular}</h2>
  <img className="post-content__image" alt={entrada.titular} src={entrada.imagen} />
  <p className="post-content__text">{entrada.cuerpo}</p>
  { entrada.galeria && entrada.galeria.length > 0 && <Carousel imagenes={entrada.galeria} />}
  <div className="post-content__social"><StarButton /><LikesButton /></div>
</div>)
}

export default PostContent;