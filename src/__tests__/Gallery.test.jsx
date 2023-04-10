import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Gallery from "../components/Gallery";
import { act } from "react-dom/test-utils";

test("renders loading indicator when data is loading", () => {
  render(<Gallery />);

  const loadingElement = screen.getByAltText("Loading...");
  expect(loadingElement).toBeInTheDocument();
});

test("renders images when data is loaded", async () => {
  const mockData = [
    {
      id: 1,
      alt: "test alt 1",
      photographer: "test photographer 1",
      src: {
        small: "https://example.com/image1.jpg",
        large2x: "https://example.com/imagel2.jpg",
      },
    },
    {
      id: 2,
      alt: "test alt 2",
      photographer: "test photographer 2",
      src: {
        small: "https://example.com/image2.jpg",
        large2x: "https://example.com/imagel2.jpg",
      },
    },
  ];
  jest.spyOn(window, "fetch").mockResolvedValue({
    json: async () => ({
      photos: mockData,
      next_page: 2,
    }),
  });
  render(<Gallery />);

  // Expected: 2, Received:1 - Could not resolve why images are not rendered
  const images = await screen.findAllByRole("img");
  expect(images.length).toEqual(2);
  expect(fetch).toHaveBeenCalledTimes(1);
});
