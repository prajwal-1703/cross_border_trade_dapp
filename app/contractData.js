export const ContractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; // Replace with your contract address
export const Abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "agreementId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isComplaint",
				"type": "bool"
			}
		],
		"name": "ComplianceStatusUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "agreementId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "PaymentMade",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "agreementId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "newStatus",
				"type": "string"
			}
		],
		"name": "ShipmentStatusUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "agreementId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "exporter",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "importer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "product",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "TradeAgreementCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_importer",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_product",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_quantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "createTradeAgreement",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTradeAgreementCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_agreementId",
				"type": "uint256"
			}
		],
		"name": "getTradeAgreementDetails",
		"outputs": [
			{
				"internalType": "address",
				"name": "exporter",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "importer",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "product",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "shipmentStatus",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isComplaint",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "paymentReceived",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_agreementId",
				"type": "uint256"
			}
		],
		"name": "makePayment",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_agreementId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_isComplaint",
				"type": "bool"
			}
		],
		"name": "updateComplianceStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_agreementId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_newStatus",
				"type": "string"
			}
		],
		"name": "updateShipmentStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]; // Replace with your contract ABI

// ABI : Application Binary Interface
