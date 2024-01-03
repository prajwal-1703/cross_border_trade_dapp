import React from "react";
import Image from "next/image";
import CreateTradeAgreement from "./createTradeAgreement";
import GetTradeAgreementDetails from "./getTradeAgreementDetails";
import UpdateShipmentStatus from "./updateShipmentStatus";
import UpdateComplianceStatus from "./updateComplianceStatus";
import MakePayment from "./makePayment";

export default function ConnectedWallet() {
  return (
    <>
      <div className="flex justify-between border-b px-4 border-gray-200">
        <Image src={"/logo.png"} width={200} height={200} alt="logo" />
        <div className="flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-green-400 mr-2"></div>
          <button
            className="ml-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Disconnect
          </button>
        </div>
      </div>

      <div className="flex space-x-6 max-w-screen-2xl 2xl:mx-8 mx-auto border border-gray-400 rounded-lg p-8 mt-10">
        <CreateTradeAgreement />
        <GetTradeAgreementDetails />
      </div>
      <div className="mt-10 space-x-6 max-w-screen-2xl 2xl:mx-8 mx-auto border border-gray-400 rounded-lg p-8 mb-20">
        <div className="text-xl font-bold bg-pink-400 py-2 px-4 rounded-lg">
          Update trade agreement details:
        </div>
        <div className="flex w-full mt-10">
          <UpdateShipmentStatus />
          <UpdateComplianceStatus />
        </div>

        <div className="flex w-full mt-10">
          <MakePayment />
        </div>
      </div>
    </>
  );
}
