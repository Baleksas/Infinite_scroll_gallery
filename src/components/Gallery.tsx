import React, { useEffect, useState } from "react";
import { createClient } from "pexels";
import Image from "./Image";
import { useLocalStorage } from "../hooks/useLocalStorage";

const client = createClient(process.env.REACT_APP_API_KEY as string);

const Gallery = () => {
  const [data, setData]: any = useState([]);
  const [page, setPage] = useState(1);

  const [favourite, setFavourite] = useLocalStorage<number[]>("favourite", []);

  useEffect(() => {
    client.photos.curated({ per_page: 10, page: page }).then((data: any) => {
      setData(data.photos);
    });
  }, []);

  const addFavourite = (id: number) => {
    if (favourite.includes(id)) {
      console.log("exists");
      const newFav = favourite.filter((item: number) => item !== id);
      console.log("new", newFav);
      setFavourite(newFav);
    } else setFavourite([...favourite, id]);
  };

  return (
    <div className="gallery">
      {data?.length > 0 &&
        data.map((item: any) => {
          return (
            <Image
              addFavourite={addFavourite}
              favourite={favourite}
              photographer={item.photographer}
              id={item.id}
              src={item.src.tiny}
            />
          );
        })}
    </div>
  );
};

export default Gallery;
