interface Props {
  total: number;
  current: number;
  setCurrent: (i: number) => void;
}

export default function CarouselIndicators({
  total,
  current,
  setCurrent,
}: Props) {
  return (
    <div className="carousel-indicators">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`indicator-dot ${i === current ? "active" : ""}`}
          onClick={() => setCurrent(i)}
        ></span>
      ))}
    </div>
  );
}
