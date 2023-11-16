import ChatSideCard from "./ChatSideCard";

const ChatSide = ({ chatList }) => {
  return (
    <ul className="w-52 p-4 bg-gray-200">
       {chatList?.map((v, i) => (
        <ChatSideCard key={i} question={v.question} answer={v.answer}></ChatSideCard>
      ))}
    </ul>
  );
};

export default ChatSide;