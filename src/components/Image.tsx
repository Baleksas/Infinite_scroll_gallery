import React, { useEffect } from "react";
import { useState } from "react";

type ImageProps = {
  id: number;
  src: string;
  photographer: string;
  favourite: number[];
  addFavourite: any;
};

const Image = ({
  addFavourite,
  id,
  src,
  photographer,
  favourite,
}: ImageProps) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    if (favourite.includes(id)) {
      setIsFavourite(true);
    } else setIsFavourite(false);
  }, [favourite]);

  return (
    <div className="image-wrapper">
      <div className="image-overlay">
        <span>{photographer}</span>
        <button
          className={`${isFavourite && "isFavourite"} button-fav`}
          onClick={() => addFavourite(id)}
        >
          Favourite
        </button>
      </div>
      <img src={src} alt={"alt"} key={id} />
    </div>
  );
};

export default Image;
