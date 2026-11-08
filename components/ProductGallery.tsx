"use client";

import { useState } from "react";

export default function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  return (
    <div className="pdp-gallery">
      <div className="pdp-main">
        <img src={images[i]} alt={alt} />
      </div>
      {images.length > 1 && (
        <div className="pdp-thumbs">
          {images.map((src, k) => (
            <button
              key={src}
              className={k === i ? "is-on" : ""}
              onClick={() => setI(k)}
              aria-label={`Image ${k + 1}`}
              data-cursor="View"
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
