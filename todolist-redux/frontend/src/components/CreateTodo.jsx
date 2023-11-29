import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo, getTodos } from "../redux/appThunk";

const CreateTodo = () => {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useDispatch();

  const onSumitCreateTodo = async (e) => {
    e.preventDefault();

    if (!newTodo) return;

    await dispatch(createTodo({ title: newTodo }));

    setNewTodo("");

    dispatch(getTodos());
  };

  return (
    <form onSubmit={onSumitCreateTodo}>
      <input
        className="px-2 py-1 border focus:outline-none focus:border-blue-300"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <input
        className="ml-2 border border-blue-500 text-blue-500 px-2 py-1 rounded-md hover:bg-blue-100  active:bg-white"
        type="submit"
        value="생 성"
      />
    </form>
  );
};

export default CreateTodo;
