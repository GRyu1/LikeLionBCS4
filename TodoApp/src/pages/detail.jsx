import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { FiCheck, FiTrash2, FiEdit } from "react-icons/fi";
import { useState } from "react";

const Detail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const title = searchParams.get("title");
  const isDone = searchParams.get("is-done");

  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(title);

  const onClickIsDone = () => {
    const localTodos = localStorage.getItem("todos");

    if (!localTodos) return;

    const parsedTodos = JSON.parse(localTodos);

    const updatedTodos = parsedTodos.map((v) => {
      if (v.id == id) {
        return { id: v.id, title: v.title, isDone: !v.isDone };
      } else {
        return v;
      }
    });

    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    navigate("/");
  };

  const onClickDel = () => {
    const localTodos = localStorage.getItem("todos");

    if (!localTodos) return;

    const parsedTodos = JSON.parse(localTodos);

    const deletedTodos = parsedTodos.filter((v) => {
      if (v.id !== +id) {
        return v;
      }
    });

    localStorage.setItem("todos", JSON.stringify(deletedTodos));

    navigate("/");
  };

  const onClickEditToggle = () => {
    setIsEdit(!isEdit);
  };

  const onSubmitEdit = (e) => {
    e.preventDefault();

    const localTodos = localStorage.getItem("todos");

    if (!localTodos) return;

    const parsedTodos = JSON.parse(localTodos);

    const updatedTodos = parsedTodos.map((v) => {
      if (v.id == id) {
        return { id: v.id, title: editTodo, isDone: v.isDone };
      } else {
        return v;
      }
    });

    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    navigate("/");
  };

  return (
    <main className="max-w-screen-md min-h-screen mx-auto  flex justify-center items-center text-2xl">
      <div className="flex items-center">
        <span>{id}</span>
        <span className="ml-4">
          {isEdit ? (
            <form className="flex" onSubmit={onSubmitEdit}>
              <input
                className="border-2 focus:outline-none focus:border-blue-300 mr-2 px-2 py-1"
                type="text"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
              />
              <input className="focus:font-bold" type="submit" value="확인" />
            </form>
          ) : (
            title
          )}
        </span>
        <button
          onClick={onClickIsDone}
          className="ml-4 bg-green-400 hover:bg-green-600 active:bg-green-400 rounded-md px-2 h-10 flex justify-center items-center"
        >
          <FiCheck /> {isDone ? " 완료" : " 진행중"}
        </button>
        <button
          onClick={onClickEditToggle}
          className="ml-4 bg-blue-400 hover:bg-blue-600 active:bg-red-400 rounded-md px-2 h-10 flex justify-center items-center"
        >
          <FiEdit /> {isEdit ? "취소" : "수정"}
        </button>
        <button
          onClick={onClickDel}
          className="ml-4 bg-red-400 hover:bg-red-600 active:bg-red-400 rounded-md px-2 h-10 flex justify-center items-center"
        >
          <FiTrash2 /> 삭제
        </button>
      </div>
    </main>
  );
};
export default Detail;
