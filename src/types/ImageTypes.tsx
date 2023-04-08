export type ImageProps = {
  id: number;
  placeholderSrc: string;
  src: string;
  alt: string | null;
  photographer: string;
  favourite: number[];
  toggleFavourite: (id: number) => void;
  isLast: ((node: HTMLElement) => void) | null;
};
