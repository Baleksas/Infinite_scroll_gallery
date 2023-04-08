import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "./Image";
import { useLocalStorage } from "../hooks/useLocalStorage";
import useGetPhotos from "../hooks/useGetPhotos";

const Gallery = () => {
  const [page, setPage] = useState(1);
  const [favourite, setFavourite] = useLocalStorage<number[]>("favourite", []);

  const toggleFavourite = (id: number) => {
    if (favourite.includes(id)) {
      const newFav = favourite.filter((item: number) => item !== id);
      setFavourite(newFav);
    } else setFavourite([...favourite, id]);
  };
  const { data, hasMore, loading, error } = useGetPhotos(page);

  const observer = useRef<any>();

  const lastPhotoElement = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="gallery">
      {data.length > 0 &&
        data.map((item: any, index: number) => {
          return (
            <Image
              isLast={data.length === index + 1 ? lastPhotoElement : null}
              toggleFavourite={toggleFavourite}
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
