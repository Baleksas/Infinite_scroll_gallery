import React, { useState, useEffect, useCallback, useRef } from "react";

type ImageProps = {
  id: number;
  src: string;
  photographer: string;
  favourite: number[];
  toggleFavourite: any;
  isLast: any;
};

const Image = ({
  toggleFavourite,
  id,
  src,
  photographer,
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
    <div ref={isLast} className="image-wrapper">
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
      <img loading="lazy" src={src} alt={photographer} />
    </div>
  );
};

export default Image;
