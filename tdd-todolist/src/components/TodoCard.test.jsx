import { fireEvent, render } from "@testing-library/react";
import TodoCard from "./TodoCard";

describe("<TodoCard />", () => {
  const sampleTodo = {
    id: 1,
    title: "🧹 청소하기",
    isDone: false,
  };

  const setup = (props = {}) => {
    const initialProps = { todo: sampleTodo };
    const { getByText } = render(<TodoCard {...initialProps} {...props} />);

    const todo = props.todo || initialProps.todo;

    const span = getByText(todo.title);
    const button = getByText("삭제");

    return {
      span,
      button,
    };
  };

  it("span&button 확인", () => {
    const { span, button } = setup();

    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("isDone이 ture 일 때 밑줄 표시", () => {
    const { span } = setup({
      todo: { id: 2, title: "🎉 축하하기", isDone: true },
    });

    expect(span).toHaveClass("line-through");
  });

  it("isDone이 false 일 때 밑줄 제거", () => {
    const { span } = setup();

    expect(span).not.toHaveClass("line-through");
  });

  it("투두 완료 처리", () => {
    const onToggle = jest.fn();
    const { span } = setup({ onToggle });

    fireEvent.click(span);

    expect(onToggle).toHaveBeenCalledWith(sampleTodo.id);
  });

  it("삭제 완료 처리", () => {
    const onDelete = jest.fn();

    const { button } = setup({ onDelete });

    fireEvent.click(button);

    expect(onDelete).toHaveBeenCalledWith(sampleTodo.id);
  });
});