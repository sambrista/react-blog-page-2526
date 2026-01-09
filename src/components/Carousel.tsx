import { useEffect, useState } from "react";
import "./Carousel.css";
import CarouselControls from "./CarouselControls";
import CarouselImages from "./CarouselImages";
import CarouselIndicators from "./CarouselIndicators";

interface CarouselProps {
  imagenes: string[];
  mostrarBotones?: boolean;
  mostrarIndicadores?: boolean;
  ciclo?: boolean;
  automatico?: boolean;
  tiempoAutomatico?: number;
}

function Carousel({
  imagenes,
  mostrarBotones = true,
  mostrarIndicadores = true,
  ciclo = true,
  automatico = true,
  tiempoAutomatico = 5000,
}: CarouselProps) {
  const [indiceActivo, setIndiceActivo] = useState(0);

useEffect(() => {
    if (ciclo && automatico) {
      const intervalo = setInterval(() => {
        setIndiceActivo((prevIndice) => (prevIndice + 1) % imagenes.length);
      }, tiempoAutomatico);
      
      return () => clearInterval(intervalo);
    }
  }, [ciclo, imagenes.length, automatico, tiempoAutomatico]);

  return (
    <div className="carousel-container">
      <CarouselImages imagenes={imagenes} indiceActivo={indiceActivo} />
      {mostrarBotones && (
        <CarouselControls
          indiceActivo={indiceActivo}
          setIndiceActivo={setIndiceActivo}
          cantidadImagenes={imagenes.length}
          ciclo={ciclo}
        />
      )}
      {mostrarIndicadores && (
        <CarouselIndicators
          indiceActivo={indiceActivo}
          setIndiceActivo={setIndiceActivo}
          cantidadImagenes={imagenes.length}
        />
      )}
    </div>
  );
}

export default Carousel;
