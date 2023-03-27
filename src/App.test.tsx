import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />); // render: 특정 component를 받아서 virtual-DOM을 생성
  const linkElement = screen.getByText(/learn react/i); // screen: 쿼리 method를 이용하여 요소에 접근
  expect(linkElement).toBeInTheDocument(); // 해당 element가 DOM에 있는지 확인
});

test("check Logo Img", () => {
  render(<App />);
  const logoEl = screen.getByAltText("logo");
  expect(logoEl).toBeInTheDocument();
});
