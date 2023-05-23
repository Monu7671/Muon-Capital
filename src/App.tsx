import { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  

  const [walletAddress, setWalletAddress] = useState("");

  const checkConnection = async () => {
   
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts.length) {
          console.log(accounts);
          setWalletAddress(accounts[0]);
        }

        
      } catch (err) {
        console.log(err);
      }
    }
  };

  const [fullNavbar, setFullNavbar] = useState(false);

  return (
    <>
      <h1 className="bg-[#3772FF] text-center text-white font-medium py-[6px] leading-[26px] text-[14px]">
        Lorem Ipsum is simply dummy text of the printing{" "}
        {walletAddress.length ? (
          walletAddress
        ) : (
          <button onClick={checkConnection}>connect</button>
        )}
      </h1>

      <div className="flex">
        <Navbar fullNavbar={fullNavbar} setFullNavbar={setFullNavbar} />
        <Main fullNavbar={fullNavbar} />
      </div>
    </>
  );
}

export default App;