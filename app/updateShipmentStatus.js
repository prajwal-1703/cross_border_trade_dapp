import React, { useState } from "react";
import { ethers } from "ethers";
import { ContractAddress, Abi } from "./contractData";

export default function UpdateShipmentStatus() {
  const [agreementId, setAgreementId] = useState("");
  const [newStatus, setNewStatus] = useState("");

  const updateShipmentStatus = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(ContractAddress, Abi, signer);

      // Convert agreementId to a number (assuming it's a numeric input)
      const agreementIdNumber = parseInt(agreementId, 10);

      if (isNaN(agreementIdNumber)) {
        console.error("Invalid Agreement ID. Please enter a valid number.");
        return;
      }

      const transaction = await contract.updateShipmentStatus(agreementIdNumber, newStatus);

      await transaction.wait();

      // Optional: You can do something after the transaction is mined, e.g., show a success message
      console.log("Shipment status updated successfully!");
    } catch (error) {
      console.error("Error updating shipment status:", error.message);
    }
  };

  return (
    <div className="w-1/2 rounded-lg p-4">
      <div className="text-xl font-bold">Update shipment status:</div>

      <div className="mt-4 flex justify-between items-center space-x-4">
        <div className="text-lg font-semibold text-gray-600">Agreement ID:</div>
        <input
          className="w-8/12 rounded-lg p-2 border border-gray-400"
          type="text"
          placeholder="65"
          value={agreementId}
          onChange={(e) => setAgreementId(e.target.value)}
        ></input>
      </div>

      <div className="flex justify-between items-center space-x-4 mt-4">
        <div className="text-lg font-semibold text-gray-600">New Status:</div>
        <input
          className="w-8/12 rounded-lg p-2 border border-gray-400"
          type="text"
          placeholder="On Hold"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
        ></input>
      </div>

      <button
        className="flex w-full text-center mt-4 justify-center items-center rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={updateShipmentStatus}
      >
        Update Shipment Status
      </button>
    </div>
  );
}