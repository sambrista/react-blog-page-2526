interface CarouselControlsProps {
  indiceActivo: number,
  setIndiceActivo: React.Dispatch<React.SetStateAction<number>>,
  ciclo?: boolean,
  cantidadImagenes: number
}

function CarouselControls( { indiceActivo, setIndiceActivo, cantidadImagenes, ciclo = true } : CarouselControlsProps) {

  function handleLeftClick(){
      if (indiceActivo == 0) {
        if (ciclo) {
          setIndiceActivo(cantidadImagenes-1);
        }
      } else {
        setIndiceActivo(indiceActivo -1);
      }
  }
  
  function handleRightClick(){
      if (indiceActivo == cantidadImagenes - 1) {
        if (ciclo) {
          setIndiceActivo(0);
        }
      } else {
        setIndiceActivo(indiceActivo +1);
      }
  }

  return (
    <div className="carousel-controls">
      <button className="carousel-btn" onClick={handleLeftClick}>&lt;</button>
      <button className="carousel-btn" onClick={handleRightClick}>&gt;</button>
    </div>
  );
}
export default CarouselControls;
