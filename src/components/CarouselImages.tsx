interface Props {
  images: string[];
  current: number;
}

export default function CarouselImages({ images, current }: Props) {
  return (
    <div className="carousel-images">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`carousel-image ${
            index === current ? "active" : "inactive"
          }`}
        />
      ))}
    </div>
  );
}
