import ImagePreview from "../components/Modal";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center carousel space-x-4 py-2">
        <div className="carousel-item w-96">
          <ImagePreview imagePath="/images/building (1).jpg" />
        </div>
        <div className="carousel-item w-96">
          <ImagePreview imagePath="/images/building (2).jpg" />
        </div>
      </div>
      <div className="flex items-center justify-center carousel space-x-4 py-2">
        <div className="carousel-item w-96">
          <ImagePreview imagePath="/images/building (3).jpg" />
        </div>
        <div className="carousel-item w-96">
          <ImagePreview imagePath="/images/building (4).jpg" />
        </div>
      </div>
      <div className="flex items-center justify-center carousel space-x-4 py-2">
        <div className="carousel-item w-96">
          <ImagePreview imagePath="/images/building (5).jpg" />
        </div>
        <div className="carousel-item w-96">
          <ImagePreview imagePath="/images/building (6).jpg" />
        </div>
      </div>
    </main>
  );
}

// {ImageData.map((image) => (
//   <Image
//     key={image.name}
//     src={image.src}
//     alt={image.name}
//     width={image.width}
//     height={image.height}
//   />
// ))}
