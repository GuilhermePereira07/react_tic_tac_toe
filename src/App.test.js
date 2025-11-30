import { render, screen } from "@testing-library/react";
import Game from "./App";

test("renderiza o texto de início", () => {
  render(<Game />);
  const statusText = screen.getByText(/Próximo jogador/i);
  expect(statusText).toBeInTheDocument();
});
