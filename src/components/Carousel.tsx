import { useState } from "react";
import "./Carousel.css";
import CarouselControls from "./CarouselControls";
import CarouselImages from "./CarouselImages";
import CarouselIndicators from "./CarouselIndicators";
interface Props {
  images: string[];
}

export default function Carousel({ images }: Props) {
  const [current, setCurrent] = useState(0);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <CarouselImages images={images} current={current} />
      <CarouselControls onPrev={goPrev} onNext={goNext} />
      <CarouselIndicators
        total={images.length}
        current={current}
        setCurrent={setCurrent}
      />
    </div>
  );
}
