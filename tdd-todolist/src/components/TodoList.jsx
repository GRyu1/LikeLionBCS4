import TodoCard from "./TodoCard";

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul data-testid="TodoList">
      {todos.map((v, i) => (
        <TodoCard key={i} todo={v} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;