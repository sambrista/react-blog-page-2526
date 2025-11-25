import type { Entrada } from "../types/entrada";
import Carousel from "./Carousel";
import Comments from "./Comments";
import PostContent from "./PostContent";
import RelatedPosts from "./RelatedPosts";

interface BlogPostProps {
    entradaMostrada : Entrada,
    listadoEntradas: Entrada[]
};

function BlogPost( {entradaMostrada, listadoEntradas} : BlogPostProps) {
    const entradasRelacionadas :Entrada[] = listadoEntradas.filter(entrada => entradaMostrada.idsEntradasRelacionadas.includes(entrada.id) )
    return (
    <article className="blog-post">
        <PostContent entrada={entradaMostrada} />
        {entradaMostrada.galeria && entradaMostrada.galeria.length > 0 && <Carousel images={entradaMostrada.galeria} />}
        <Comments comentarios={entradaMostrada.comentarios} />
        <RelatedPosts entradasRelacionadas={entradasRelacionadas}/>
    </article>)
}

export default BlogPost;