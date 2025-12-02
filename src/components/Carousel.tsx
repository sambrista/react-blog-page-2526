import { useState } from "react";
import "./Carousel.css";
import CarouselControls from "./CarouselControls";
import CarouselImages from "./CarouselImages";
import CarouselIndicators from "./CarouselIndicators";

interface CarouselProps {
  imagenes: string[],
  showIndicators?: boolean;
  showControls?: boolean;
  ciclo?: boolean;
}

function Carousel({ imagenes, showControls = true, showIndicators = true, ciclo = true}: CarouselProps) {
  const [indiceActivo, setIndiceActivo] = useState(0);
  return (
    <div className="carousel-container">
      <CarouselImages imagenes={imagenes} indiceActivo={indiceActivo} />
      { showControls &&      <CarouselControls
        indiceActivo={indiceActivo}
        setIndiceActivo={setIndiceActivo}
        cantidadImagenes={imagenes.length}
        ciclo={ciclo}
      /> }
      { showIndicators && <CarouselIndicators
        indiceActivo={indiceActivo}
        setIndiceActivo={setIndiceActivo}
        cantidadImagenes={imagenes.length}
      /> }
    </div>
  );
}

export default Carousel;
