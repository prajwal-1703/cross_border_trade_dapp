import React from "react";


export default function CreateTradeAgreement() {

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
            ></input>
          </div>
          <div className="flex justify-between mt-4 items-center space-x-4">
            <div className="text-lg font-semibold text-gray-600">Product:</div>
            <input
              className="w-10/12 rounded-lg p-2"
              type="text"
              placeholder="Electronics Displays"
            ></input>
          </div>
          <div className="flex justify-between mt-4 items-center space-x-4">
            <div className="text-lg font-semibold text-gray-600">Quantity:</div>
            <input
              className="w-10/12 rounded-lg p-2"
              type="number"
              placeholder="200"
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
            ></input>
          </div>
        </div>
        <button
          className="flex w-full text-center mt-4 justify-center items-center rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create
        </button>
      </div>
    </div>
  );
}
