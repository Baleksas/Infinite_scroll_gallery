import React, { useState, useEffect, useCallback, useRef } from "react";

type ImageProps = {
  id: number;
  src: string;
  photographer: string;
  favourite: number[];
  addFavourite: any;
  isLast?: boolean;
};

const Image = ({
  addFavourite,
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

  const observer = useRef<any>();

  const lastPhotoElement = useCallback((node: any) => {
    console.log(node);
  }, []);

  return (
    <div ref={isLast ? lastPhotoElement : null} className="image-wrapper">
      <div className="image-overlay">
        <div className="overlay-content">
          <span>{photographer}</span>
          <button
            className={`${isFavourite && "isFavourite"} button-fav`}
            onClick={() => addFavourite(id)}
          >
            Favourite
          </button>
        </div>
      </div>
      <img src={src} alt={"alt"} />
    </div>
  );
};

export default Image;
