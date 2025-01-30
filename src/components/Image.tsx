import React, { LegacyRef, useEffect, useState } from "react";
import { ImageProps } from "../types/ImageTypes";
import ProgressiveImg from "./ProgressiveImage";

const Image = ({
  toggleFavourite,
  id,
  placeholderSrc,
  src,
  photographer,
  alt,
  favourite,
  isLast
}: ImageProps) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    if (favourite.includes(id)) {
      setIsFavourite(true);
    } else setIsFavourite(false);
  }, [favourite, id]);

  return (
    <div ref={isLast as LegacyRef<HTMLDivElement>} className="image-wrapper">
      <div className="image-overlay">
        <div className="overlay-content">
          {alt !== "" && (
            <React.Fragment>
              <span>{alt}</span>
              <span className="divider"></span>
            </React.Fragment>
          )}
          <span>{photographer}</span>
          {alt === "" && <span className="divider"></span>}
          <button
            data-testid="favourite-button"
            className={`${isFavourite && "isFavourite"} button-fav`}
            onClick={() => toggleFavourite(id)}
          >
            Favourite
          </button>
        </div>
      </div>
      <ProgressiveImg
        alt={alt as string}
        src={src}
        placeholderSrc={placeholderSrc}
      />
    </div>
  );
};

export default Image;
