interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function CarouselControls({ onPrev, onNext }: Props) {
  return (
    <div className="carousel-controls">
      <button className="carousel-btn" onClick={onPrev}>
        {"<"}
      </button>
      <button className="carousel-btn" onClick={onNext}>
        {">"}
      </button>
    </div>
  );
}
