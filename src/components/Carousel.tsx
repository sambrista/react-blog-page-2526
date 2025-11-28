import { useState } from "react";
import "./Carousel.css";
import CarouselControls from "./CarouselControls";
import CarouselImages from "./CarouselImages";
import CarouselIndicators from "./CarouselIndicators";

interface CarouselProps {
  imagenes: string[]
}

function Carousel( {imagenes} : CarouselProps ) {
  const [indiceActivo, setIndiceActivo] = useState(0);
  return (
    <div className="carousel-container">
      <CarouselImages imagenes={imagenes} indiceActivo={indiceActivo} />
      <CarouselControls indiceActivo={indiceActivo} setIndiceActivo={setIndiceActivo} cantidadImagenes={imagenes.length}/>
      <CarouselIndicators indiceActivo={indiceActivo} setIndiceActivo={setIndiceActivo} cantidadImagenes={imagenes.length}/>
    </div>
  );
}

export default Carousel;
