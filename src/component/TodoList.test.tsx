import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("Todo test", () => {
  test("서버 에러났을 때 에러 메시지를 보여준다", async () => {
    // 해당 test에서만 영향을 준다. setupTests.ts afterEach에서 server reset시켜주기 때문
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/todos",
        async (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<TodoList />);
    const err = await screen.findByText("에러");
    expect(err).toBeInTheDocument();
  });

  test("리스트가 잘 나온다 (3개)", async () => {
    render(<TodoList />);
    const liEl = await screen.findAllByRole("listitem");
    expect(liEl).toHaveLength(3);
  });
});
