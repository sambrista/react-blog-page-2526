import { useState } from "react";
import type { Comentario } from "../types/comentario";
import "./Comments.css"
import CommentForm from "./CommentsForm";

interface CommentsProps {
    listaComentarios : Comentario[];
}

function Comments({listaComentarios} : CommentsProps) {

    const [comentarios, setComentarios] = useState(listaComentarios);
    const addNewComment = (nuevoComentario : Comentario) => {
        setComentarios([...comentarios, nuevoComentario]);
    };
    return <section className="comments">
    <h3>Comentarios</h3>
    <ul>
        {comentarios.map((comentario, indice) => 
        <li key={indice}><strong>{comentario.nombreUsuario}:</strong>{comentario.texto}</li>)}
    </ul>
    <CommentForm onNewComment={addNewComment} />
    </section>
}

export default Comments;