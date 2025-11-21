import type { Entrada } from "../types/entrada";
import AuthorInfo from "./AuthorInfo";
import CategoryPosts from "./CategoryPosts";
import TagCloud from "./TagCloud";
import "./SideBar.css"
import TagPosts from "./TagPosts";
import { useState } from "react";

interface SideBarProps {
    entradaMostrada: Entrada,
    entradas: Entrada[]
}

function SideBar({entradaMostrada, entradas} : SideBarProps) {
    const [etiquetasSeleccionadas, setEtiquetasSeleccionadas] = useState<string[]>([]);
    const entradasMismaCategoria = entradas.filter((entrada) => entrada.categoria == entradaMostrada.categoria && entrada.id != entradaMostrada.id)
    const entradasEtiquetas = entradas.filter((entrada) => {
        const etiquetasComunes :string[] = entrada.etiquetas.filter((etiqueta) => etiquetasSeleccionadas.includes(etiqueta))
        return etiquetasComunes.length > 0;
    })
    return (
    <aside className="sidebar">
        <AuthorInfo autor = {entradaMostrada.autor}/>
        <TagCloud etiquetas={entradaMostrada.etiquetas} etiquetasSeleccionadas={etiquetasSeleccionadas} setEtiquetasSeleccionadas={setEtiquetasSeleccionadas}/>
        <TagPosts entradas={entradasEtiquetas} etiquetas={etiquetasSeleccionadas}/>
        <CategoryPosts entradas={entradasMismaCategoria} />
    </aside>);
}

export default SideBar;