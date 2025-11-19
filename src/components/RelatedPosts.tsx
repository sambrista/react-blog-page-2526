import type { Entrada } from "../types/entrada";

interface RelatedPostsProps {
    entradasRelacionadas : Entrada[]
}

function RelatedPosts( {entradasRelacionadas} : RelatedPostsProps) {
    return (<section className="related-posts">
        <h3>Noticias relacionadas</h3>
        <div className="related-posts__list">
            {entradasRelacionadas.map(entrada => (
            <div key={entrada.id} className="post-card">
                <img className="post-card__image"
                     alt={entrada.titular}
                     src={entrada.imagen} />
                <h4 className="post-card__title">{entrada.titular}</h4>
                <p className="post-card__author">Por {entrada.autor.nombre}</p>
            </div>
            ))}

        </div>
    </section>);
}

export default RelatedPosts;