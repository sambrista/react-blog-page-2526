import type { Entrada } from "../types/entrada";
import AuthorInfo from "./AuthorInfo";
import CategoryPosts from "./CategoryPosts";
import TagCloud from "./TagCloud";

interface SideBarProps {
    entradaMostrada: Entrada,
    entradas: Entrada[]
}

function SideBar({entradaMostrada, entradas} : SideBarProps) {
    const entradasMismaCategoria = entradas.filter((entrada) => entrada.categoria == entradaMostrada.categoria)

    return (
    <aside className="sidebar">
        <AuthorInfo autor = {entradaMostrada.autor}/>
        <TagCloud etiquetas={entradaMostrada.etiquetas}/>
        <CategoryPosts entradas={entradasMismaCategoria} />
    </aside>);
}

export default SideBar;