import type { Entrada } from "../types/entrada";
import PostCard from "./PostCard";
import "./RelatedPosts.css"

interface TagPostsProps {
    entradas : Entrada[],
    etiquetas :string[]
}

function TagPosts( {entradas, etiquetas} : TagPostsProps) {
    return (<section className="tag-posts">
        { etiquetas.length > 0?
        <>
            <h3>Entradas de {etiquetas.length == 1 ? `la etiqueta ${etiquetas[0]}`: "las etiquetas " + etiquetas.join(" ")}</h3>
            <div className="tag-posts__list">{entradas.map(entrada => <PostCard key={entrada.id} entrada={entrada} />)}</div>
        </>
        : <h3>No hay etiquetas seleccionadas</h3>
}
    </section>);
}

export default TagPosts;