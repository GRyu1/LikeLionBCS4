import { fireEvent, render } from "@testing-library/react";
import CreateTodo from "./CreateTodo";

describe("<CreateTodo />", () => {
  const setup = (props = {}) => {
    const {getByText, getByPlaceholderText} = render(<CreateTodo {...props} />);
    const input = getByPlaceholderText("할 일 입력!!!");
    const submit = getByText("투두생성");

    return {
        input,
        submit
    }
  };

  it("input & button 확인", () => {
    const {input , submit} = setup();

    expect(input).toBeTruthy();
    expect(submit).toBeTruthy();
  });

  it("input 입력값 확인", () => {
    const {input} = setup();

    fireEvent.change(input, {
      target: {
        value: "🛍️ 쇼핑하기",
      },
    });

    expect(input).toHaveAttribute("value", "🛍️ 쇼핑하기");
  });

  it("투두생성", () => {
    const onInsert = jest.fn();
    const {input, submit} = setup({onInsert});

    fireEvent.change(input, {
      target: {
        value: "🛍️ 쇼핑하기",
      },
    });

    fireEvent.click(submit);

    expect(input).toHaveAttribute("value", "");
  });
});
