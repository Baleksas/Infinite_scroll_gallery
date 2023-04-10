import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Image from "../components/Image";
import "@testing-library/jest-dom";

describe("Image component", () => {
  const mockToggleFavourite = jest.fn();
  const defaultProps = {
    toggleFavourite: mockToggleFavourite,
    id: 1,
    alt: "Nature",
    src: "https://example.com/image.jpg",
    photographer: "John Doe",
    favourite: [1, 2],
    isLast: null,
  };

  it("should render an image with photographer name and favourite button", () => {
    render(<Image {...defaultProps} />);
    expect(screen.getByAltText("Nature")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Favourite")).toBeInTheDocument();
  });

  it("should mark image as favourite if it is in the favourite list", () => {
    render(<Image {...defaultProps} />);
    expect(screen.getByText("Favourite")).toHaveClass("isFavourite");
  });

  it("should toggle favourite status when favourite button is clicked", () => {
    render(<Image {...defaultProps} />);
    fireEvent.click(screen.getByText("Favourite"));
    expect(mockToggleFavourite).toHaveBeenCalledWith(1);
  });

  it("should set a ref on the wrapper div if it is the last image", () => {
    const mockRef = { current: null };
    const { rerender } = render(<Image {...defaultProps} isLast={null} />);
    expect(mockRef.current).toBeNull();
    rerender(<Image {...defaultProps} isLast={mockRef} />);
    expect(mockRef.current).toBeInTheDocument();
  });
});
