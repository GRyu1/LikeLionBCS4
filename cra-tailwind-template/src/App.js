import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

const App = () => {
  const [todoId, setTodoId] = useState(2);
  const [todos, setTodos] = useState([
    { id: 1, title: "🧹 청소하기", isDone: false },
  ]);

  return (
    <main className="min-h-screen py-20 flex flex-col justify-start items-center">
      <CreateTodo
        todos={todos}
        setTodos={setTodos}
        todoId={todoId}
        setTodoId={setTodoId}
      />
      <ul>
        {todos.map((v, i) => {
          return <Todo key={i} todo={v} todos={todos} setTodos={setTodos} />;
        })}
      </ul>
    </main>
  );
};

export default App;