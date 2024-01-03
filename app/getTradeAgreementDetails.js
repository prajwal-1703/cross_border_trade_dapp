import React from "react";

export default function GetTradeAgreementDetails() {

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
          />
        </div>
      </div>
      <button
        className="flex w-full text-center mt-4 justify-center items-center rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Get trade details
      </button>
      <div className="text-gray-400 mt-6">
        <div>exporter: </div>
        <div>importer: </div>
        <div>product: </div>
        <div>quantity: </div>
        <div>price: </div>
        <div>shipmentStatus: </div>
        <div>isCompliant: </div>
        <div>paymentReceived: </div>
      </div>
    </div>
  );
}
