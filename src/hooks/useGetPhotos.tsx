import { useEffect, useState } from "react";
import { createClient, Photos, ErrorResponse } from "pexels";
const client = createClient(process.env.REACT_APP_API_KEY as string);

export default function useGetPhotos(pageNumber: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("page number", pageNumber);
    client.photos
      .curated({ per_page: 10, page: pageNumber })
      .then((data: any) => {
        // API FAULT
        // [1+] pages first two images are from the previous page - duplicates
        if (pageNumber > 0) {
          data.photos.shift();
          data.photos.shift();
        }
        console.log("setting data", data.photos);
        setData((prevData): any => [...prevData, ...data.photos]);
        setHasMore(data.photos.length > 0);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      });
    return () => {};
  }, [pageNumber]);

  return { loading, error, data, hasMore };
}
