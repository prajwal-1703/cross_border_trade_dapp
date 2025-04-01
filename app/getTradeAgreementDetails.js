import React, { useState } from "react";
import { ethers } from "ethers";
// import { useState } from "react";
import { ContractAddress, Abi } from "./contractData";

export default function getTradeAgreementDetails() {

  const [agreementId, setAgreementId] = useState("");
  const [tradeDetails, setTradeDetails] = useState({
    exporter : "",
    importer  : "",
    product : "",
    quantity : 0,
    price : 0,
    shipmentStatus : "",
    isComplaint : false,
    paymentReceived : false
  });

  const getTradeDetails = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(ContractAddress, Abi, provider)
    const tradeDetails = await contract.getTradeAgreementDetails(agreementId)

    setTradeDetails({
      exporter : tradeDetails.exporter,
      importer  : tradeDetails.importer,
      product : tradeDetails.product,
      quantity : parseInt(tradeDetails.quantity),
      price : parseInt(tradeDetails.price),
      shipmentStatus : tradeDetails.shipmentStatus,
      isComplaint : tradeDetails.isComplaint,
      paymentReceived : tradeDetails.paymentReceived
      });
  };

  return (
    <div className="w-1/2 rounded-lg p-4">
      <h2 className="text-xl font-bold">Get trade agreement details:</h2>
      <div className="mt-6">
        <div className="flex justify-between items-center space-x-4">
          <div className="text-lg font-semibold text-gray-600">
            Agreement ID:
          </div>
          <input
            className="w-8/12 rounded-lg p-2 border border-gray-400"
            type="number"
            placeholder="1133"
            value={agreementId}
            onChange={(e) => setAgreementId(e.target.value)}
          />
        </div>
      </div>
      <button
      onClick={getTradeDetails}
        className="flex w-full text-center mt-4 justify-center items-center rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Get trade details
      </button>
      <div className="text-gray-400 mt-6">
        <div>exporter:{tradeDetails.exporter} </div>
        <div>importer:{tradeDetails.importer} </div>
        <div>product:{tradeDetails.product} </div>
        <div>quantity:{tradeDetails.quantity} </div>
        <div>price:{tradeDetails.price} </div>
        <div>shipmentStatus:{tradeDetails.shipmentStatus} </div>
        <div>isCompliant:{tradeDetails.isComplaint.toString()} </div>
        <div>paymentReceived:{tradeDetails.paymentReceived.toString()} </div>
      </div>
    </div>
  );
}
