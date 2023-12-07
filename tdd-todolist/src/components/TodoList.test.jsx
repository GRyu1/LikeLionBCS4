import { fireEvent, render } from "@testing-library/react";
import TodoList from "./TodoList";

describe("<TodoList />", () => {
  const sampleTodos = [
    {
      id: 1,
      title: "🧹 청소하기",
      isDone: false,
    },
    {
      id: 2,
      title: "👕 빨래하기",
      isDone: false,
    },
  ];

  const setup = (props = {}) => {
    const initialProps = { todos: sampleTodos };
    const { getByText, getAllByText } = render(
      <TodoList {...initialProps} {...props} />
    );

    return {
      getByText,
      getAllByText,
    };
  };

  it("투두 리스트 확인", () => {
    const { getByText } = setup();

    expect(getByText(sampleTodos[0].title)).toBeTruthy();
    expect(getByText(sampleTodos[1].title)).toBeTruthy();
  });

  it("call onToggle", () => {
    const onToggle = jest.fn();

    const { getByText } = setup({ onToggle });

    fireEvent.click(getByText(sampleTodos[0].title));
    expect(onToggle).toHaveBeenCalledWith(sampleTodos[0].id);
  });

  it("call onDelete", () => {
    const onDelete = jest.fn();

    const { getAllByText } = setup({ onDelete });
    fireEvent.click(getAllByText("삭제")[0]);
    expect(onDelete).toHaveBeenCalledWith(sampleTodos[0].id);
  });
});