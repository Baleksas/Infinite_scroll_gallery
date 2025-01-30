import { Photo } from "pexels";
import { useCallback, useRef, useState } from "react";
import useGetPhotos from "../hooks/useGetPhotos";
import { useLocalStorage } from "../hooks/useLocalStorage";
import loadingGif from "../lib/loadingGif.gif";
import Image from "./Image";
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

  const observer = useRef<IntersectionObserver>();

  const lastPhotoElement = useCallback(
    (node: HTMLElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  if (error) {
    return (
      <div className="error">
        Error loading photos. Contact the developer: https://github.com/Baleksas
      </div>
    );
  }

  return (
    <div className="gallery">
      {data.length > 0 &&
        data.map((item: Photo, index: number) => {
          return (
            <Image
              isLast={data.length === index + 1 ? lastPhotoElement : null}
              toggleFavourite={toggleFavourite}
              favourite={favourite}
              alt={item.alt}
              photographer={item.photographer}
              key={item.id}
              id={item.id}
              placeholderSrc={item.src.small}
              src={item.src.large2x}
            />
          );
        })}
      {loading && (
        <div className="loading ">
          <img src={loadingGif} alt="Loading..." />
        </div>
      )}
    </div>
  );
};

export default Gallery;
