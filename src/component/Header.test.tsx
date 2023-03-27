import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("유저가 없다면 로그인 문구와 버튼 출력", () => {
  render(<Header />);
  const textEl = screen.getByText(/로그인해주세요/);
  const btnEl = screen.getByRole("button");
  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(textEl).toHaveTextContent("로그인"); // toHaveTextContent: element 내부의 text 확인
});

test("유저가 있으면 이름 출력", () => {
  render(<Header name="Kim" />);
  const textEl = screen.getByText(/kim님 환영합니다/i);
  expect(textEl).toBeInTheDocument();
});
