import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/appThunk";

const CreateTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const onSubmitCreateTodo = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    dispatch(createTodo({ title: newTodo }));
  };

  return (
    <form onSubmit={onSubmitCreateTodo}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <input type="submit" value="생성" />
    </form>
  );
};

export default CreateTodo;