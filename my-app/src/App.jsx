
import DateCard from "./components/DateCard";
import DateData from "./date.json";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="mb-12 text-2xl font-bold">2023년 11월</h1>
      <ul className="grid grid-cols-7 gap-4">
        <li className="w-32 h-32"></li>
        <li className="w-32 h-32"></li>
        {DateData.map((v, i) => {
          return <DateCard key={i} date={v.date} todos={v.todos} />;
        })}
      </ul>
    </div>
  );
};

export default App;