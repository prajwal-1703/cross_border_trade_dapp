"use client";
import Image from "next/image";
import { useState } from "react";
import ConnectedWallet from "./connectedWallet";

export default function BorderXchange() {
  const [connectedAccount, setConnectedAccount] = useState(null);

  return (
    <>
      {connectedAccount ? (
        <ConnectedWallet />
      ) : (
        <>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl flex h-screen justify-center items-center">
              <div className="text-center">
                <Image src={"/logo.png"} width={800} height={200} alt="logo" />
                <h2 className="text-3xl font-bold mt-10">
                  Cross Border Trade Gateway
                </h2>
                <p className="mt-8 text-lg">
                  Elevate your global trade. Our blockchain-driven smart
                  contract platform simplifies cross-border
                  transactions—automating contracts, payments, and logistics.
                  Experience efficiency, transparency, and trust in
                  international commerce. Goodbye to complexities—welcome to
                  secure, seamless trade with BorderXchange.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
