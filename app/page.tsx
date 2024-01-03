import Image from "next/image";
import Link from "next/link";
import { ImageData } from "../constants";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center carousel space-x-4 py-2">
        <div className="carousel-item w-96">
          <img src="/images/building (1).jpg" alt="" />
        </div>
        <div className="carousel-item w-96">
          <img src="/images/building (2).jpg" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center carousel space-x-4 py-2">
        <div className="carousel-item w-96">
          <img src="/images/building (3).jpg" alt="" />
        </div>
        <div className="carousel-item w-96">
          <img src="/images/building (4).jpg" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center carousel space-x-4 py-2">
        <div className="carousel-item w-96">
          <img src="/images/building (5).jpg" alt="" />
        </div>
        <div className="carousel-item w-96">
          <img src="/images/building (6).jpg" alt="" />
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
