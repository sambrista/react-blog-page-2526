import "./TagCloud.css"

interface TagCloudProps {
    etiquetas: string[],
    etiquetasSeleccionadas: string[],
    setEtiquetasSeleccionadas: React.Dispatch<React.SetStateAction<string[]>>
}

function TagCloud({etiquetas, etiquetasSeleccionadas, setEtiquetasSeleccionadas} : TagCloudProps) {
    
/*     function handleClick(event: React.MouseEvent<HTMLSpanElement>) {
        let etiqueta :string;
        if (event.currentTarget.dataset.etiqueta != undefined) {
            etiqueta = event.currentTarget.dataset.etiqueta;
            if (!etiquetasSeleccionadas.includes(etiqueta)) {
                setEtiquetasSeleccionadas([etiqueta, ...etiquetasSeleccionadas]);
            } else {
                setEtiquetasSeleccionadas(etiquetasSeleccionadas.filter((e) => e != etiqueta ));
            }
        }
    } */

    function handleClick(etiqueta :string) {
        if (!etiquetasSeleccionadas.includes(etiqueta)) {
            setEtiquetasSeleccionadas([etiqueta, ...etiquetasSeleccionadas]);
        } else {
            setEtiquetasSeleccionadas(etiquetasSeleccionadas.filter((e) => e != etiqueta ));
        }
    }

    return (
        <div className="tag-cloud">
            <h3>Etiquetas</h3>
            <div className="tag-cloud__container">
                {
                    // etiquetas.map((etiqueta) => <span className={etiquetasSeleccionadas.includes(etiqueta) ? "etiqueta-seleccionada": ""} data-etiqueta={etiqueta} onClick={handleClick} key={etiqueta}>#{etiqueta}</span>)
                    etiquetas.map((etiqueta) => <span className={etiquetasSeleccionadas.includes(etiqueta) ? "etiqueta-seleccionada": ""}
                                                      onClick={() => {handleClick(etiqueta)}}
                                                      key={etiqueta}>
                                                      #{etiqueta}
                                                </span>)
                }
            </div>
        </div>
    );
}

export default TagCloud;