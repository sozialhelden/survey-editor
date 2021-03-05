import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders empty state on start", () => {
  render(<App />);
  const linkElement = screen.getByText(/Open an Excel file to start/i);
  expect(linkElement).toBeInTheDocument();
});
