import type { Entrada } from "../types/entrada";

export const entradas: Entrada[] = [
  {
    id: 1,
    titular: "React: cómo crear tus primeros componentes",
    imagen: "https://picsum.photos/600/300?random=1",
    galeria: [
      "https://picsum.photos/800/400?random=11",
      "https://picsum.photos/800/400?random=12",
      "https://picsum.photos/800/400?random=13"
    ],
    cuerpo: `
      En este artículo aprenderás a crear tus primeros componentes en React paso a paso.
      Veremos cómo dividir la interfaz en pequeñas piezas reutilizables y cómo pasar información entre ellas mediante props.
      Este es el primer paso para construir aplicaciones modernas y escalables.
    `,
    autor: {
      nombre: "Laura Pérez",
      foto: "https://i.pravatar.cc/100?img=12"
    },
    categoria: "React",
    etiquetas: ["React", "Frontend", "JavaScript"],
    comentarios: [
      { id: 1, nombreUsuario: "Carlos", texto: "¡Muy buen artículo!" },
      { id: 2, nombreUsuario: "Ana", texto: "Gracias por la explicación." }
    ],
    idsEntradasRelacionadas: [2, 4]
  },
  {
    id: 2,
    titular: "Cómo funciona el Virtual DOM",
    imagen: "https://picsum.photos/600/300?random=2",
    galeria: [
      "https://picsum.photos/800/400?random=21",
      "https://picsum.photos/800/400?random=22"
    ],
    cuerpo: `
      El Virtual DOM es una de las claves de rendimiento de React.
      Permite comparar versiones del árbol de componentes para actualizar solo lo necesario.
      En este artículo te explicamos cómo funciona y por qué hace que React sea tan eficiente.
    `,
    autor: {
      nombre: "Laura Pérez",
      foto: "https://i.pravatar.cc/100?img=12"
    },
    categoria: "React",
    etiquetas: ["React", "Renderizado", "DOM"],
    comentarios: [{ id: 1, nombreUsuario: "Mario", texto: "No lo entendía hasta ahora, gracias." }],
    idsEntradasRelacionadas: [1, 3]
  },
  {
    id: 3,
    titular: "Diferencias entre React y Angular",
    imagen: "https://picsum.photos/600/300?random=3",
    cuerpo: `
      React y Angular son dos de los frameworks más populares del desarrollo frontend.
      Aunque comparten objetivos similares, sus filosofías son distintas.
      React se centra en la vista y deja libertad al desarrollador, mientras que Angular ofrece una solución completa.
    `,
    autor: {
      nombre: "Miguel Gómez",
      foto: "https://i.pravatar.cc/100?img=14"
    },
    categoria: "Comparativas",
    etiquetas: ["React", "Angular", "Frameworks"],
    comentarios: [],
    idsEntradasRelacionadas: [2, 5]
  },
  {
    id: 4,
    titular: "Introducción a JSX",
    imagen: "https://picsum.photos/600/300?random=4",
    galeria: [
      "https://picsum.photos/800/400?random=41",
      "https://picsum.photos/800/400?random=42",
      "https://picsum.photos/800/400?random=43",
      "https://picsum.photos/800/400?random=44"
    ],
    cuerpo: `
      JSX es una extensión de JavaScript que permite escribir HTML dentro del código.
      Aunque al principio puede parecer extraño, su poder radica en la simplicidad y la legibilidad.
      Es la forma más común de definir la interfaz en React.
    `,
    autor: {
      nombre: "Sofía Hernández",
      foto: "https://i.pravatar.cc/100?img=18"
    },
    categoria: "React",
    etiquetas: ["JSX", "React", "Sintaxis"],
    comentarios: [
      { id: 1, nombreUsuario: "Pedro", texto: "Muy claro el ejemplo." },
      { id: 2, nombreUsuario: "Lucía", texto: "Ahora entiendo mejor JSX." }
    ],
    idsEntradasRelacionadas: [1]
  },
  {
    id: 5,
    titular: "Comparativa entre Vue y React",
    imagen: "https://picsum.photos/600/300?random=5",
    cuerpo: `
      Vue y React son dos librerías muy usadas para el desarrollo de interfaces web.
      Ambas son rápidas, reactivas y cuentan con una gran comunidad.
      Sin embargo, difieren en su curva de aprendizaje y ecosistema.
    `,
    autor: {
      nombre: "Miguel Gómez",
      foto: "https://i.pravatar.cc/100?img=14"
    },
    categoria: "Comparativas",
    etiquetas: ["Vue", "React", "Frameworks"],
    comentarios: [],
    idsEntradasRelacionadas: [3]
  },
  {
    id: 6,
    titular: "Buenas prácticas al escribir componentes",
    imagen: "https://picsum.photos/600/300?random=6",
    galeria: [
      "https://picsum.photos/800/400?random=61",
      "https://picsum.photos/800/400?random=62"
    ],
    cuerpo: `
      Escribir componentes limpios y reutilizables es clave en cualquier proyecto React.
      Aprende a mantener tu código ordenado y legible, con convenciones simples y ejemplos prácticos.
    `,
    autor: {
      nombre: "Laura Pérez",
      foto: "https://i.pravatar.cc/100?img=12"
    },
    categoria: "React",
    etiquetas: ["Buenas prácticas", "React", "Componentes"],
    comentarios: [{ id: 1, nombreUsuario: "Andrea", texto: "Gracias por los consejos." }],
    idsEntradasRelacionadas: [1, 4]
  },

  /* ===========================================
     NUEVAS ENTRADAS AÑADIDAS
     =========================================== */

  {
    id: 7,
    titular: "Cómo optimizar el rendimiento en React",
    imagen: "https://picsum.photos/600/300?random=7",
    galeria: [
      "https://picsum.photos/800/400?random=71",
      "https://picsum.photos/800/400?random=72",
      "https://picsum.photos/800/400?random=73"
    ],
    cuerpo: `
      Para aplicaciones grandes es fundamental mantener un rendimiento óptimo.
      En este artículo exploramos memoización, suspensión, re-renderizados y técnicas avanzadas para mejorar la velocidad.
    `,
    autor: {
      nombre: "Sara Martín",
      foto: "https://i.pravatar.cc/100?img=33"
    },
    categoria: "Optimización",
    etiquetas: ["Rendimiento", "React", "Memo"],
    comentarios: [],
    idsEntradasRelacionadas: [1, 2, 6]
  },
  {
    id: 8,
    titular: "Qué es React Server Components",
    imagen: "https://picsum.photos/600/300?random=8",
    cuerpo: `
      React Server Components permiten renderizar parte de tu aplicación en el servidor,
      reduciendo el tamaño del bundle y mejorando la carga inicial.
      Se están convirtiendo en una de las características más importantes del ecosistema moderno.
    `,
    autor: {
      nombre: "Laura Pérez",
      foto: "https://i.pravatar.cc/100?img=12"
    },
    categoria: "React",
    etiquetas: ["RSC", "React 19", "SSR"],
    comentarios: [],
    idsEntradasRelacionadas: [2, 6]
  },
  {
    id: 9,
    titular: "Tailwind CSS vs CSS tradicional",
    imagen: "https://picsum.photos/600/300?random=9",
    galeria: [
      "https://picsum.photos/800/400?random=91",
      "https://picsum.photos/800/400?random=92"
    ],
    cuerpo: `
      Tailwind CSS ha revolucionado la forma de escribir estilos.
      Analizamos las ventajas, desventajas y casos de uso recomendados.
      ¿Realmente deberías migrar todo tu proyecto a utilidades?
    `,
    autor: {
      nombre: "Carlos Romero",
      foto: "https://i.pravatar.cc/100?img=25"
    },
    categoria: "CSS",
    etiquetas: ["CSS", "Tailwind", "Diseño"],
    comentarios: [
      { id: 1, nombreUsuario: "Nuria", texto: "Muy útil la comparación." }
    ],
    idsEntradasRelacionadas: [3, 5]
  }
];
