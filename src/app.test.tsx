import React from "react";
import App from "./app";
import { screen, fireEvent, render } from "@testing-library/react";
import { renderWithRouter } from "./testUtil";

describe("메인화면 <Home />", () => {
  xit("저장하기 버튼을 누르면, 상품 추가 페이지로 이동한다.", async () => {
    // 처음 시작하면 home 페이지에 있다
    renderWithRouter(App);
    // 현재 home 페이지이면
    screen.getByTestId("home");
    // 저장하기 버튼을 누른다
    const button = screen.getByText("저장하기");
    // 버튼을 클릭한다
    fireEvent.click(button);
    // 상품 추가 페이지로 이동한다
    screen.getByTestId("add-product-page");
  });
});

// https://reactrouter.com/web/guides/testing
// https://testing-library.com/docs/example-react-router/
