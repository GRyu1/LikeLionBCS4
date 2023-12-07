import { useSDK } from "@metamask/sdk-react";
import { useState } from "react";

const App = () => {
  const [account, setAccount] = useState("");

  const { sdk } = useSDK();

  const onClickMetaMask = async () => {
    try {
      const accounts = await sdk?.connect();

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8">
      {account ? (
        <>
        <div>
          Hello, {account.substring(0, 7)}...
          {account.substring(account.length - 5)}
        </div>
        <button onClick={() => setAccount("")}>Logout</button>
      </>
      ) : (
        <button
          onClick={onClickMetaMask}
          className="bg-orange-500 text-white text-xl font-bold hover:bg-orange-500 active:bg-orange-700 shadow-lg px-4 py-2 rounded-2xl "
        >
          🦊 MetaMask Login
        </button>
      )}
    </div>
  );
};

export default App;