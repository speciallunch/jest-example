import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);

  function onClickHandler() {
    setIsLogin(!isLogin);
  }

  return (
    <button onClick={onClickHandler}>{isLogin ? "로그아웃" : "로그인"}</button>
  );
}
