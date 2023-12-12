import { useSDK } from "@metamask/sdk-react";
import { useEffect, useState } from "react";
import Web3 from "web3";
import MintTokenAbi from "./mintTokenAbi.json";

const App = () => {
  const [account, setAccount] = useState("");
  const [web3, setWeb3] = useState();
  const [contract, setContract] = useState();
  const [tokenName, setTokenName] = useState("Token");
  const [tokenAmount, setTokenAmount] = useState(0);
  const [tokenSymbol, setTokenSymbol] = useState("Token");

  const { sdk, provider } = useSDK();

  const onClickMetamask = async () => {
    try {
      const accounts = await sdk?.connect();

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const getTokenAmount = async () => {
    try {
      const response = await contract.methods.balanceOf(account).call();

      setTokenAmount(web3.utils.fromWei(response, "ether"));
    } catch (error) {
      console.error(error);
    }
  };

  const getTokenName = async () => {
    try {
      const response = await contract.methods.name().call();

      setTokenName(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getTokenSymbol = async () => {
    try {
      const response = await contract.methods.symbol().call();

      setTokenSymbol(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!provider) return;

    setWeb3(new Web3(provider));
  }, [provider]);

  useEffect(() => {
    if (!web3) return;
    setContract(
      new web3.eth.Contract(
        MintTokenAbi,
        "0x4964F58D6f22E67551A88Cc51558D5346C5242c7"
      )
    );
  }, [web3]);

  useEffect(() => {
    if (!account) return;

    getTokenAmount();
    getTokenName();
    getTokenSymbol();
  }, [account]);

  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      {account ? (
        <>
          <div>
            Hello, {account.substring(0, 7)}...
            {account.substring(account.length - 5)}
          </div>
          <div>
            {tokenName} : {tokenAmount} {tokenSymbol}
          </div>
        </>
      ) : (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xl"
          onClick={onClickMetamask}
        >
          Connect Metamask
        </button>
      )}
    </div>
  );
};

export default App;