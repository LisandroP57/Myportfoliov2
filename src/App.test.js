import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the hero heading with the developer's name", () => {
  render(<App />);
  const heading = screen.getByText(/Lisandro/i);
  expect(heading).toBeInTheDocument();
});
