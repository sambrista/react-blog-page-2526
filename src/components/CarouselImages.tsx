interface CarouselImagesProps {
  imagenes: string[],
  indiceActivo: number
}

function CarouselImages({ imagenes, indiceActivo }: CarouselImagesProps) {
  return (
    <div className="carousel-images">
      {imagenes.map((imagen, indice) => (
        <img
          key={indice}
          className={ indice == indiceActivo? "carousel-image active" : "carousel-image inactive" }
          src={imagen}
        />
      ))}
    </div>
  );
}

export default CarouselImages;
