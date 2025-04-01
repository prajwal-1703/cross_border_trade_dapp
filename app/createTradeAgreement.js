import React from "react";
import {ethers} from "ethers";
import { ContractAddress, Abi } from "./contractData";
// import { ethers } from "hardhat";
import { useState } from "react";

export default function CreateTradeAgreement() {

  const [importer, setImporter] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");


  const createTradeAgreement = async () => {
    if (typeof window.ethereum === "undefined") {
      console.error("MetaMask is not installed!");
      alert("Error: Please install MetaMask or a compatible wallet."); // Use simple alert if no feedback state allowed
      return; // Stop if no provider
    }

    try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      ContractAddress,
      Abi,
      signer
    )

    const priceValue = ethers.parseEther(price)
    const transaction = await contract.createTradeAgreement(
      importer,
      product,
      parseInt(quantity),
      priceValue
    );

    await transaction.wait();
  } catch (error) {
    console.error("Error creating trade agreement : ", error.message);
  }
  };

  return (
    <div className="w-1/2 bg-blue-200 rounded-lg p-4 flex items-center">
      <div className="w-full">
        <h2 className="text-xl font-bold">Create trade agreement:</h2>
        <div className="mt-6">
          <div className="flex justify-between items-center space-x-4">
            <div className="text-lg font-semibold text-gray-600">Importer:</div>
            <input
              className="w-10/12 rounded-lg p-2"
              type="text"
              placeholder="0x7c62aA....8581cBE"
              onChange={(e) => {
                setImporter(e.target.value);
              }}
            ></input>
          </div>
          <div className="flex justify-between mt-4 items-center space-x-4">
            <div className="text-lg font-semibold text-gray-600">Product:</div>
            <input
              className="w-10/12 rounded-lg p-2"
              type="text"
              placeholder="Electronics Displays"
              onChange={(e) => {
                setProduct(e.target.value);
              }}
            ></input>
          </div>
          <div className="flex justify-between mt-4 items-center space-x-4">
            <div className="text-lg font-semibold text-gray-600">Quantity:</div>
            <input
              className="w-10/12 rounded-lg p-2"
              type="number"
              placeholder="200"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            ></input>
          </div>
          <div className="flex justify-between mt-4 items-center space-x-4">
            <div className="text-lg font-semibold text-gray-600">
              Price(ETH):
            </div>
            <input
              className="w-10/12 rounded-lg p-2"
              type="text"
              placeholder="2"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <button
          onClick={createTradeAgreement}
          className="flex w-full text-center mt-4 justify-center items-center rounded-md
           bg-indigo-600 px-3.5 py-2.5 font-semibold text-white shadow-sm
           hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
           focus-visible:outline-indigo-600"
        >
          Create  
        </button>
      </div>
    </div>
  );
}
  