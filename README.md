# 🌍 CrossBorderTrade

CrossBorderTrade is a blockchain-powered platform that simplifies **international trade** by automating agreements, shipments, compliance checks, and payments using **Ethereum smart contracts**.  
It combines **Next.js** for the frontend, **TailwindCSS** for UI, and **Hardhat** for smart contract development and testing.

---

## 🚀 Features
- 🔗 **Wallet Connection** (MetaMask integration)  
- 📜 **Create Trade Agreements** (exporter ↔ importer)  
- 📦 **Update Shipment Status** (real-time updates by exporter)  
- ✅ **Update Compliance Status** (mark agreements as compliant or disputed)  
- 💸 **Escrow-like Payments** (importers can securely make payments)  
- 🔍 **Fetch Agreement Details** (transparency in transactions)  

---

## 🛠️ Tech Stack
- **Smart Contracts** → Solidity (Hardhat, Ethers.js)  
- **Frontend** → Next.js 14 + React 18  
- **UI** → TailwindCSS, HeadlessUI  
- **Blockchain** → Ethereum testnet (Hardhat local node supported)  
- **Wallet** → MetaMask  

---

## 📂 Project Structure
```

.
├── app/                  # Next.js frontend (components, pages, styles)
│   ├── createTradeAgreement.js
│   ├── getTradeAgreementDetails.js
│   ├── updateShipmentStatus.js
│   ├── updateComplianceStatus.js
│   ├── makePayment.js
│   ├── contractData.js
│   └── page.js
├── contracts/            # Solidity smart contracts
│   └── CrossBorderTrade.sol
├── hardhat.config.js     # Hardhat configuration
├── package.json          # Dependencies & scripts
├── tailwind.config.js    # Tailwind setup
├── LICENSE               # Open source license (Unlicense)
└── README.md             # Documentation

````

---

## ⚡ Getting Started

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/crossbordertrade.git
cd crossbordertrade
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Hardhat Local Blockchain

```bash
npx hardhat node
```

### 4️⃣ Deploy Contracts

Open a new terminal and run:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

Copy the **deployed contract address** and update it in `app/contractData.js`.

### 5️⃣ Start Frontend

```bash
npm run dev
```

Visit 👉 [http://localhost:3000](http://localhost:3000)

---

## 🧩 Smart Contract (Key Functions)

* `createTradeAgreement(address importer, string product, uint quantity, uint price)`
* `updateShipmentStatus(uint agreementId, string newStatus)`
* `updateComplianceStatus(uint agreementId, bool isComplaint)`
* `makePayment(uint agreementId)` (payable)
* `getTradeAgreementDetails(uint agreementId)`

---

## 🖼️ Screenshots (Optional)

* ✅ Connect Wallet
* ✅ Create & View Trade Agreements
* ✅ Update Shipment/Compliance
* ✅ Make Payments

---

## 📜 License

This project is licensed under **The Unlicense**.
It is free and open-source software: [https://unlicense.org](https://unlicense.org)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a pull request.

---

## 🌐 Future Scope

* Multi-chain support (Polygon, BSC)
* Role-based dashboards (Exporter, Importer, Customs)
* Automated dispute resolution using oracles
* Integration with real-world shipping APIs

---

