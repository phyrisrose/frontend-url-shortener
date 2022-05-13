import { screen } from "@testing-library/react";
import { render } from "../../test/test-utils";
import UrlShortener from "./UrlShortener";

test("renders an input field for the long link", () => {
  render(<UrlShortener />);
  const inputElement = screen.getByTestId("long-url");
  expect(inputElement).toBeInTheDocument();
});
