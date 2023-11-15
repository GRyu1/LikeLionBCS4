import ChatBar from "./components/ChatBar";

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen max-w-screen-md mx-auto flex">
      <div className="bg-blue-100 w-52">Side</div>
      <div className="bg-green-100 flex-col flex grow">
        <div className="bg-yellow-100 grow">Main</div>
        <ChatBar></ChatBar>
      </div>
    </div>
  );
};

export default App;