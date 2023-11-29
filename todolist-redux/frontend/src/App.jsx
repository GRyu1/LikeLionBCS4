import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateTodo from "./components/CreateTodo";
import { getTodos } from "./redux/appThunk";
import TodoCard from "./components/TodoCard";

const App = () => {
  const { todos } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todos) return;

    dispatch(getTodos());
  }, [todos, dispatch]);

  return (
    <div className="min-h-screen flex flex-col items-center py-20">
      <CreateTodo />
      <ul className="mt-12">
        {todos?.map((v, i) => (
          <TodoCard
            key={i}
            index={i}
            isDone={v.isDone}
            title={v.title}
            id={v.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
