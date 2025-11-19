import type { Entrada } from "../types/entrada";

interface CategoryPostsProps {
    entradas: Entrada[]
}

function CategoryPosts({entradas} : CategoryPostsProps) {
    return (<div className="category-posts">
            <h3>Más sobre React</h3>
            <div className="category-posts__list">
                {
                    entradas.map((entrada) => <div className="post-card">
                    <img className="post-card__image" alt={entrada.titular} src={entrada.imagen} />
                    <h4 className="post-card__title">{entrada.titular}</h4>
                    <p className="post-card__author">Por {entrada.autor.nombre}</p>
                </div>)
                }
                
            </div>
        </div>);
};

export default CategoryPosts;