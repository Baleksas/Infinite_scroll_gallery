import { useState, useEffect } from "react";
import { ProgressiveImageProps } from "../types/ImageTypes";

const ProgressiveImg = ({
  placeholderSrc,
  src,
  alt,
}: ProgressiveImageProps) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loadingImg" : "loadedImg";

  return (
    <img src={imgSrc} alt={alt as string} className={`image ${customClass}`} />
  );
};
export default ProgressiveImg;
