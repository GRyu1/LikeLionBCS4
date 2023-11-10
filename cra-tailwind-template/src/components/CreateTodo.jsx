import { useState } from "react";

const CreateTodo = ({ todos, setTodos, todoId, setTodoId }) => {
  const [newTodo, setNewTodo] = useState("");

  const onSubmitCreateTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    setTodos([...todos, { id: todoId, title: newTodo, isDone: false }]);
    setTodoId(todoId + 1);
    setNewTodo("");
    console.log(todos);
  };

  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <form onSubmit={onSubmitCreateTodo}>
      <input type="text" value={newTodo} onChange={onChangeNewTodo} />
      <input type="submit" value="추 가" />
    </form>
  );
};

export default CreateTodo;