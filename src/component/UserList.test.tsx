import { render, screen } from "@testing-library/react";
import { IUsers } from "../App";
import UserList from "./UserList";

describe("UserList test", () => {
  let users: IUsers = [{ name: "a" }, { name: "b" }, { name: "c" }];

  test("ul이 있다.", () => {
    render(<UserList users={users} />);
    const ulEl = screen.getByRole("list");
    expect(ulEl).toBeInTheDocument();
  });

  test("li가 3명이 제대로 출력되는가", () => {
    render(<UserList users={users} />);
    const liEl = screen.getAllByRole("listitem");
    expect(liEl).toHaveLength(users.length);
  });

  test("li가 0명일때에 제대로 출력안되는가", () => {
    render(<UserList users={[]} />);
    // const liEl = screen.getAllByRole("listitem"); // 요소 없으면 getRole에서부터 실패함. getBy 0 Matches: throw error
    const liEl = screen.queryByRole("listiem"); // queryBy 0 Matches: return null or []
    const liEls = screen.queryAllByRole("listitem");
    expect(liEl).not.toBeInTheDocument();
    expect(liEls).toHaveLength(0);
  });

  test("잠시 후 리스트가 출력됩니다.(findRole 사용)", async () => {
    render(<UserList users={users} delay={1500} />);
    // screen.debug(); // 렌더링된 DOM Tree 보여줌
    // const titleEl = screen.getByRole("heading");  // getByRole에서는 비동기 못찾음
    const titleEl = await screen.findByRole(
      "heading",
      { name: /유저리스트/ },
      { timeout: 2000 }
    ); // findByRole로 비동기 로직 사용. findBy = getBy + waitFor. default timeout: 1초
    expect(titleEl).toBeInTheDocument();
  });
});
