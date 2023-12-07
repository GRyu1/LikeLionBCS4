import { fireEvent, render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("CreateTodo 렌더링 확인", () => {
    const { getByText } = render(<App />);

    getByText("투두생성");
  });

  it("TodoList 렌더링 확인", () => {
    const { getByTestId } = render(<App />);

    getByTestId("TodoList");
  });

  it("투두 생성 확인", () => {
    const { getByText } = render(<App />);

    getByText("🧹 청소하기");
    getByText("👕 빨래하기");
    // getByText("😎 안하기");
  });

  it("투두 완료 확인", () => {
    const { getByText } = render(<App />);

    const span = getByText("🧹 청소하기");

    fireEvent.click(span);
    expect(span).toHaveClass("line-through");
    fireEvent.click(span);
    expect(span).not.toHaveClass("line-through");
  });
  it("투두 삭제", () => {
    const { getByText, queryByText } = render(<App />);

    const span = getByText("🧹 청소하기");
    const button = span.nextSibling;

    fireEvent.click(button);

    const removedSpan = queryByText("🧹 청소하기");
    expect(removedSpan).toBeNull();
    const existSpan = queryByText("👕 빨래하기");
    expect(existSpan).not.toBeNull();
  });
});