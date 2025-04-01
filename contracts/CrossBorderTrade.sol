// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract CrossBorderTrade {
    struct TradeAgreement {
        address exporter;
        address importer;
        string product;
        uint256 quantity;
        uint256 price;
        string shipmentStatus;
        bool isComplaint;
        bool paymentReceived;
    }

    mapping(uint256 => TradeAgreement) private tradeAgreements;
    uint256 private agreementIdCounter;

    event TradeAgreementCreated(
        uint256 agreementId,
        address indexed exporter,
        address indexed importer,
        string product,
        uint256 quantity,
        uint256 price
    );

    event ShipmentStatusUpdated(uint256 agreementId, string newStatus);
    event ComplianceStatusUpdated(uint256 agreementId, bool isComplaint);
    event PaymentMade(uint256 agreementId, uint256 amount);

    function createTradeAgreement(
        address _importer, 
        string memory _product,
        uint256 _quantity, 
        uint256 _price
    ) external {
        agreementIdCounter++;

        tradeAgreements[agreementIdCounter] = TradeAgreement({
            exporter: msg.sender, 
            importer: _importer,
            product: _product, 
            quantity: _quantity,
            price: _price,
            shipmentStatus: "In Transit",
            isComplaint: false,
            paymentReceived: false
        });

        emit TradeAgreementCreated(agreementIdCounter, msg.sender, _importer, _product, _quantity, _price);
    }

    function updateShipmentStatus(uint256 _agreementId, string memory _newStatus) external {
        require(msg.sender == tradeAgreements[_agreementId].exporter, "Not Authorized");
        
        tradeAgreements[_agreementId].shipmentStatus = _newStatus;
        emit ShipmentStatusUpdated(_agreementId, _newStatus);
    }

    function updateComplianceStatus(uint256 _agreementId, bool _isComplaint) external {
        require(msg.sender == tradeAgreements[_agreementId].exporter, "Not Authorized");
        tradeAgreements[_agreementId].isComplaint = _isComplaint;
        emit ComplianceStatusUpdated(_agreementId, _isComplaint);
    }

    function makePayment(uint256 _agreementId) external payable {
        require(msg.sender == tradeAgreements[_agreementId].importer, "Not Authorized");
        require(msg.value == tradeAgreements[_agreementId].price, "Incorrect payment amount");
        require(!tradeAgreements[_agreementId].paymentReceived, "Payment already made.");

        payable(tradeAgreements[_agreementId].exporter).transfer(msg.value);
        tradeAgreements[_agreementId].paymentReceived = true;

        emit PaymentMade(_agreementId, msg.value);
    }

    function getTradeAgreementDetails(uint256 _agreementId)
        external 
        view 
        returns (
            address exporter,
            address importer,
            string memory product,
            uint256 quantity,
            uint256 price,
            string memory shipmentStatus,
            bool isComplaint,
            bool paymentReceived
        )
    {
        TradeAgreement memory agreement = tradeAgreements[_agreementId];
        return (
            agreement.exporter, 
            agreement.importer, 
            agreement.product, 
            agreement.quantity, 
            agreement.price, 
            agreement.shipmentStatus, 
            agreement.isComplaint,
            agreement.paymentReceived
        );
    }

    function getTradeAgreementCount() external view returns (uint256) {
        return agreementIdCounter;
    }
}
