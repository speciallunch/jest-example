import type { IUser } from "../App";
import Login from "./Login";

export default function Header({ name }: IUser) {
  return (
    <div>
      {name ? (
        <h1>{name}님 환영합니다.</h1>
      ) : (
        <h2>
          로그인해주세요
          <div>
            <label htmlFor="id">아이디</label>
            <input type="text" id="id" value="Kim" readOnly />
          </div>
          <div>
            <label htmlFor="password">비번</label>
            <textarea id="password" />
          </div>
          <Login />
        </h2>
      )}
    </div>
  );
}
