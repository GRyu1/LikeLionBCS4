import { useState } from "react";

const CreateTodo = ({onInsert}) => {
  const [createTodo, setCreateTodo] = useState("");

  const onClickSubmitTodo = (e) => {
    e.preventDefault();

    if (!createTodo) return;

    // 투두 생성 로직
    onInsert(createTodo);

    setCreateTodo("");
  };

  return (
    <form onSubmit={onClickSubmitTodo}>
      <input
        type="text"
        placeholder="할 일 입력!!!"
        value={createTodo}
        onChange={(e) => setCreateTodo(e.target.value)}
      />
      <input type="submit" value="투두생성" />
    </form>
  );
};

export default CreateTodo;