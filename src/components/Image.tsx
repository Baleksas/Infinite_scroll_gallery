import React, { useState, useEffect, LegacyRef } from "react";
import { ImageProps } from "../types/ImageTypes";

const Image = ({
  toggleFavourite,
  id,
  src,
  photographer,
  alt,
  favourite,
  isLast,
}: ImageProps) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    if (favourite.includes(id)) {
      setIsFavourite(true);
    } else setIsFavourite(false);
  }, [favourite]);

  return (
    <div ref={isLast as LegacyRef<HTMLDivElement>} className="image-wrapper">
      <div className="image-overlay">
        <div className="overlay-content">
          <span>{photographer}</span>
          <button
            className={`${isFavourite && "isFavourite"} button-fav`}
            onClick={() => toggleFavourite(id)}
          >
            Favourite
          </button>
        </div>
      </div>
      <img loading="lazy" src={src} alt={alt as string} />
    </div>
  );
};

export default Image;
