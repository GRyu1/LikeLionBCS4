import { Link } from "react-router-dom";

const TodoCard = ({ todo }) => {
  return (
    <li className="h-12 flex items-center text-xl">
      <span className="w-1/12 text-right">{todo.id}</span>
      <span className={`w-8/12 pl-2 ${todo.isDone && "line-through"}`}>
        {todo.title}
      </span>
      <Link
        to={`/${todo.id}?title=${todo.title}&is-done=${todo.isDone}`}
        className="w-3/12 hover:font-bold"
      >
        Detail
      </Link>
    </li>
  );
};

export default TodoCard;
