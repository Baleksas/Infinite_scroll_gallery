export type ImageProps = ProgressiveImageProps & {
  id: number;
  photographer: string;
  favourite: number[];
  toggleFavourite: (id: number) => void;
  isLast: ((node: HTMLElement) => void) | null;
};

export type ProgressiveImageProps = {
  src: string;
  placeholderSrc: string;
  alt: string | null;
};
