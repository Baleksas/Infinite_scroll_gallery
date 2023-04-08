import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "./Image";
import { useLocalStorage } from "../hooks/useLocalStorage";
import useGetPhotos from "../hooks/useGetPhotos";

const Gallery = () => {
  const [page, setPage] = useState(1);
  const [favourite, setFavourite] = useLocalStorage<number[]>("favourite", []);

  const addFavourite = (id: number) => {
    if (favourite.includes(id)) {
      const newFav = favourite.filter((item: number) => item !== id);
      setFavourite(newFav);
    } else setFavourite([...favourite, id]);
  };
  const { data, hasMore, loading, error } = useGetPhotos(page);

  return (
    <div className="gallery">
      {data?.length > 0 &&
        data.map((item: any, index: number) => {
          console.log(data.length, index + 1);
          return (
            <Image
              isLast={data.length === index + 1}
              addFavourite={addFavourite}
              favourite={favourite}
              photographer={item.photographer}
              key={item.id}
              id={item.id}
              src={item.src.tiny}
            />
          );
        })}
      {loading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default Gallery;
