export type ImageProps = {
  id: number;
  src: string;
  photographer: string;
  favourite: number[];
  toggleFavourite: (id: number) => void;
  isLast: ((node: HTMLElement) => void) | null;
};
