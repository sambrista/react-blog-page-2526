import type { Autor } from "./autor"
import type { Comentario } from "./comentario"

export type Entrada = {
    id: number,
    titular: string,
    imagen: string,
    cuerpo: string,
    autor: Autor,
    galeria?: string[],
    categoria: string,
    etiquetas: string[],
    comentarios: Comentario[],
    idsEntradasRelacionadas: number[]
  }