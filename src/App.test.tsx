import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />); // render: 특정 component를 받아서 virtual-DOM을 생성
  const linkElement = screen.getByText(/learn react/i); // screen: 쿼리 method를 이용하여 요소에 접근
  // const titleElement = screen.getByRole("heading"); // Found multiple elements with the role "heading"
  const titleElement = screen.getByRole("heading", { level: 2 }); // <h2>만 찾는다
  expect(linkElement).toBeInTheDocument(); // 해당 element가 DOM에 있는지 확인
  expect(titleElement).toBeInTheDocument();
});

test("check Logo Img", () => {
  render(<App />);
  const logoEl = screen.getByAltText("logo");
  expect(logoEl).toBeInTheDocument();
});

test("특정 div 찾기", () => {
  render(<App />);
  const divEl = screen.getByTestId("my-div"); // 테스트를 위한 testid 설정을 해야되어서 최후의 수단으로만..
  expect(divEl).toBeInTheDocument();
});
