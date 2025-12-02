import { useState, type FormEvent } from "react";
import "./CommentsForm.css";
import type { Comentario } from "../types/comentario";

interface CommentFormProps {
  onNewComment: (comment: Comentario) => void;
}

function CommentForm({onNewComment}: CommentFormProps) {
  const [text, setText] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newComment: Comentario = {
      id: Date.now(),
      texto: text,
      nombreUsuario: nombreUsuario,
    };

    onNewComment(newComment);
    setText("");
    setNombreUsuario("");
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input type="text" placeholder="Nombre de usuario" required value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)} />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe tu comentario..."
      />
      <button type="submit">Añadir comentario</button>
    </form>
  );
}

export default CommentForm;
