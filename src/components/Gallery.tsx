import React, { useEffect, useState } from "react";
import { createClient } from "pexels";
import Image from "./Image";

const client = createClient(process.env.REACT_APP_API_KEY as string);

const Gallery = () => {
  const [data, setData]: any = useState([]);
  const [page, setPage] = useState(1);
  const [favourite, setFavourite] = useState<number[]>([]);

  useEffect(() => {
    client.photos.curated({ per_page: 10, page: page }).then((data: any) => {
      setData(data.photos);
    });

    const saved = JSON.parse(localStorage.getItem("favourite") as string);
    console.log(saved);
    if (saved) setFavourite(saved);
  }, []);

  const addFavourite = (id: number) => {
    console.log("currently fav", favourite);
    console.log("adding...", id);
    setFavourite([...favourite, id]);
  };
  useEffect(() => {
    console.log("afer adding...", favourite);

    localStorage.setItem("favourite", JSON.stringify(favourite));
  }, []);

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
