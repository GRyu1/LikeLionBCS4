import { useState } from "react";

const ChatBar = () => {
  const [newQuestion, setNewQuestion] = useState("");

  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

      console.log(newQuestion);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-24">
      <form className="h-full flex items-center px-4" onSubmit={onSubmitChat}>
        <input
          className="grow py-1 px-2 focus:outline-none border-2 focus:border-pink-400 mr-4"
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <input
          className="w-28 py-[6px] text-sm bg-pink-400 hover:bg-pink-600 active:bg-pink-400 rounded-lg text-white font-semibold"
          type="submit"
          value="검 색"
        />
      </form>
    </div>
  );
};

export default ChatBar;