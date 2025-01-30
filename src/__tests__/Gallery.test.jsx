import { render, screen, waitFor } from "@testing-library/react";
import Gallery from "../components/Gallery";
import "@testing-library/jest-dom";

jest.mock("../__mocks__/useGetPhotos.tsx");

test("renders loading indicator when data is loading", () => {
  render(<Gallery />);

  const loadingElement = screen.getByAltText("Loading...");
  expect(loadingElement).toBeInTheDocument();
});

test("renders images when data is loaded", async () => {
  render(<Gallery />);

  await waitFor(async () => {
    process.nextTick(async () => {
      const images = await screen.findAllByRole("img");
      expect(images.length).toEqual(2);
    });
  });
});
