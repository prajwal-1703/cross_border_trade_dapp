import React, { useState } from "react";
import { ethers } from "ethers";
import { ContractAddress, Abi } from "./contractData";
export default function MakePayment() {

  const [agreementId, setAgreementId] = useState("");

  const makePayment= async () => {
    try{

    
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(ContractAddress, Abi, signer);
    
    const tradeDetails = await contract.getTradeAgreementDetails(agreementId)

    const transaction = await contract.makePayment(agreementId,{
      value: tradeDetails.price,
    });
    await transaction.wait();
  }catch (error){
    console.error("Error Making Payment: ", error.message)
  }
  };

  return (
    <div className="w-1/2 rounded-lg p-4">
      <div className="text-xl font-bold">Complete payment:</div>

      <div className="mt-4 flex justify-between items-center space-x-4">
        <div className="text-lg font-semibold text-gray-600">Agreement ID:</div>
        <input
          className="w-8/12 rounded-lg p-2 border border-gray-400"
          type="text"
          placeholder="1133"
          onChange={(e) => setAgreementId(e.target.value)}
        ></input>
      </div>

      <button
      onClick={makePayment}
        className="flex w-full text-center mt-4 justify-center items-center rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Make Payment
      </button>
    </div>
  );
}
