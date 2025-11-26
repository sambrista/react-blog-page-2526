interface CarouselControlsProps {
  indiceActivo: number,
  setIndiceActivo: React.Dispatch<React.SetStateAction<number>>
}

function CarouselControls( { indiceActivo, setIndiceActivo } : CarouselControlsProps) {

  function handleLeftClick(){
      setIndiceActivo(indiceActivo -1);
  }
  
  function handleRightClick(){
      setIndiceActivo(indiceActivo +1);
  }
  return (
    <div className="carousel-controls">
      <button className="carousel-btn" onClick={handleLeftClick}>&lt;</button>
      <button className="carousel-btn" onClick={handleRightClick}>&gt;</button>
    </div>
  );
}
export default CarouselControls;
