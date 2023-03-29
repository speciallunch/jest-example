import { render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Login Test", () => {
  test("처음에는 로그인 버튼이 있다", () => {
    render(<Login />);
    const btEl = screen.getByRole("button");
    expect(btEl).toHaveTextContent("로그인");
  });

  const user = userEvent.setup(); // input device의 state와 default config를 가지고 이벤트 세션 시작
  test("클릭하면 로그아웃 버튼으로 변경", async () => {
    render(<Login />);
    const btEl = screen.getByRole("button");

    await user.click(btEl);

    expect(btEl).toHaveTextContent("로그아웃");
  });

  test("tab,space", async () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");

    await user.tab();
    // await user.keyboard(" ");
    await user.keyboard("{Enter}");

    expect(btnEl).toHaveTextContent("로그아웃");
  });
});
