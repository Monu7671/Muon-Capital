import React, { useState } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}

const CryptoPaymentsForm = () => {
  const [amount, setAmount] = useState(0); 

  const [destinationAddress, setDestinationAddress] = useState(""); 

  const startPayment = async (event: any) => {
    

    console.log({ amount, destinationAddress });

    try {
      if (!window.ethereum) {
        throw new Error("No crypto wallet found. Please install it.");
      }

      await window.ethereum.send("eth_requestAccounts");

      
      const provider = new ethers.WebSocketProvider(window.ethereum);

      const signer = provider.getSigner();

      ethers.getAddress(destinationAddress);

      const transactionResponse = await (
        await signer
      ).sendTransaction({
        to: destinationAddress,

        value: ethers.parseEther(amount.toString()),
      });

      console.log({ transactionResponse });
    } catch (error: any) {
      console.log({ error });
    }
  };

  return (
    <div className="text-black">
      

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        
        onChange={(event) => {
          setAmount(Number.parseFloat(event.target.value));
        }}
      />

      <input
        placeholder="Destination address"
        value={destinationAddress}
        
        onChange={(event) => {
          setDestinationAddress(event.target.value);
        }}
      />

      <button className="bg-white" onClick={startPayment}>
        Send Payment
      </button>
    </div>
  );
};

export default CryptoPaymentsForm;
