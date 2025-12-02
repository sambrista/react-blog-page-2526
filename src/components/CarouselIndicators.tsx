interface CarouselIndicatorsProps {
  indiceActivo: number,
  setIndiceActivo: React.Dispatch<React.SetStateAction<number>>,
  cantidadImagenes: number
}

function CarouselIndicators({ indiceActivo, setIndiceActivo, cantidadImagenes } : CarouselIndicatorsProps) {
  function handleClick(numeroImagen: number) {
    setIndiceActivo(numeroImagen);
  }

  const indicadores = []

  for (let i = 0; i < cantidadImagenes; i++) {

      indicadores.push(<span className={`indicator-dot ${indiceActivo == i && "active"}`} onClick={() => handleClick(i)}></span>)
  }

  return (
    <div className="carousel-indicators">
      {indicadores}
    </div>
  );
}

export default CarouselIndicators;
