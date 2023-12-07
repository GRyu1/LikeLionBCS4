const TodoCard = ({ todo, onToggle, onDelete }) => {
  return (
    <li>
      <span
        onClick={() => onToggle(todo.id)}
        className={`${todo.isDone && "line-through"}`}
      >
        {todo.title}
      </span>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoCard;