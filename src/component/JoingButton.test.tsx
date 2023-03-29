import { render, screen } from "@testing-library/react";
import JoinButton from "./JoinButton";

test("19세 이하면 버튼클릭할 수 없다. 문구는 빨간색", () => {
  render(<JoinButton age={10} />);
  const textEl = screen.getByRole("heading");
  const btnEl = screen.getByRole("button");
  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toBeDisabled();
  expect(textEl).toHaveStyle({ color: "red" });
});

test("성인이면 버튼클릭할 수 있다. 문구는 초록색", () => {
  render(<JoinButton age={32} />);
  const textEl = screen.getByRole("heading");
  const btnEl = screen.getByRole("button");
  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toBeEnabled();
  expect(textEl).toHaveStyle({ color: "green" });
});
