import { useEffect, useState } from "react";
import { ErrorResponse, Photo, Photos, createClient } from "pexels";
const client = createClient(process.env.REACT_APP_API_KEY as string);

export default function useGetPhotos(pageNumber: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Photo[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    client.photos
      .curated({ per_page: 10, page: pageNumber })
      .then((data: Photos | ErrorResponse) => {
        // [1+] pages first two images are from the previous page - duplicates
        if ("photos" in data) {
          if (pageNumber > 0) {
            data.photos.shift();
            data.photos.shift();
          }

          setData((prevData): Photo[] => [...prevData, ...data.photos]);
          setHasMore(data.photos.length > 0);
          setLoading(false);
        }
      })
      .catch((e) => {
        setError(true);
      });
    return () => {};
  }, [pageNumber]);

  return { loading, error, data, hasMore };
}
