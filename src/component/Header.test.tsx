import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("유저가 없다면 로그인 문구와 버튼 출력", () => {
  render(<Header />);
  const textEl = screen.getByText(/로그인해주/);
  const textEl2 = screen.getByText("로그인해주세요"); // 따옴표로 검색하면 일부는 찾지 못한다
  const btnEl = screen.getByRole("button"); // h1~h6:heading / a:link / select:combobox
  expect(textEl).toBeInTheDocument();
  expect(textEl2).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인"); // toHaveTextContent: element 내부의 text 확인
});

test("유저가 있으면 이름 출력", () => {
  render(<Header name="Kim" />);
  const textEl = screen.getByText(/kim님 환영합니다/i);
  expect(textEl).toBeInTheDocument();
});

test("input 요소가 있다", () => {
  render(<Header />);
  // const inputEl = screen.getByRole("textbox"); // Found multiple elements with the role "textbox"
  const inputEl = screen.getByRole("textbox", { name: "아이디" });
  const inputEl2 = screen.getByLabelText("아이디", { selector: "input" }); // 위랑 같은 코드. 옵션 주면 정확한 text종류 선택 가능
  const inputEl3 = screen.getByDisplayValue("Kim");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl2).toBeInTheDocument();
  expect(inputEl3).toBeInTheDocument();
});
