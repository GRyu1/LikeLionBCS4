const Todo = ({ todo, todos, setTodos }) => {
    const onClickDone = () => {
      const newTodos = todos.map((v, i) => {
        return { id: v.id, title: v.title, isDone: true };
      });
  
      setTodos(newTodos);
    };
  
    return (
      <li>
        <span>{todo.id}</span>
        <button
          className={`${todo.isDone && "line-through"}`}
          onClick={onClickDone}
        >
          {todo.title}
        </button>
        <button>Del</button>
      </li>
    );
  };
  
  export default Todo;