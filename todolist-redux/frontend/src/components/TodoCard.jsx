import { useDispatch } from "react-redux";
import {
  deleteTodo,
  getTodos,
  toggleDone,
  updateTodo,
} from "../redux/appThunk";
import { useState } from "react";

const TodoCard = ({ index, isDone, title, id }) => {
  const [updateToggle, setUpdateToggle] = useState(false);
  const [newTodo, setNewTodo] = useState(title);

  const dispatch = useDispatch();

  const onClickToggleDone = async () => {
    await dispatch(toggleDone({ todoId: id }));

    dispatch(getTodos());
  };

  const onClickUpdateToggle = () => {
    setUpdateToggle(!updateToggle);
  };

  const onSubmitUpdateTodo = async (e) => {
    e.preventDefault();

    if (!newTodo) return;

    await dispatch(updateTodo({ todoId: id, title: newTodo }));

    setUpdateToggle(false);
    dispatch(getTodos());
  };

  const onClickDeleteTodo = async () => {
    await dispatch(deleteTodo({ todoId: id }));

    dispatch(getTodos());
  };

  return (
    <li className={`${index % 2 ? "bg-gray-100" : "bg-white"} w-64 py-1`}>
      <span className="w-1/12 inline-block text-center">{id}</span>
      {updateToggle ? (
        <form className="inline-block w-7/12" onSubmit={onSubmitUpdateTodo}>
          <input
            className="w-3/4 focus:outline-none"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <input className="w-1/4" type="submit" value="확인" />
        </form>
      ) : (
        <button
          className={`w-7/12 inline-block ${isDone && "line-through"} `}
          onClick={onClickToggleDone}
        >
          {title}
        </button>
      )}
      <button
        className="w-2/12 hover:font-semibold"
        onClick={onClickUpdateToggle}
      >
        {updateToggle ? "취소" : "수정"}
      </button>
      <button
        className="w-2/12 hover:font-semibold"
        onClick={onClickDeleteTodo}
      >
        삭제
      </button>
    </li>
  );
};

export default TodoCard;
