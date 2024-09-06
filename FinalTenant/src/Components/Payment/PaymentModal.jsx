import { useState } from "react";

const PaymentModal = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Card");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolderName: "",
    expirationDate: "",
    cvv: "",
  });
  const [saveCard, setSaveCard] = useState(false);

  const handleOpenPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleSaveCardChange = (e) => {
    setSaveCard(e.target.checked);
  };

  const handleSubmitPayment = () => {
    // Add your submit logic here
    console.log("Payment Method:", paymentMethod);
    console.log("Card Details:", cardDetails);
    console.log("Save Card for Future Reservations:", saveCard);
    handleClosePaymentModal(); // Close the modal after submission
  };

  return (
    <div className="relative ">
      {/* Button to open modal */}
      <button
        onClick={handleOpenPaymentModal}
        className="px-4 py-2 bg-mixblue text-white rounded-md xs:w-auto text-sm font-semibold w-full"
      >
        MARK PAYMENT
      </button>

      {/* Modal */}
      {isPaymentModalOpen && (
        <div className="absolute bottom-full left-1/2  md:left-[110%] transform -translate-x-1/2 mt-2 bg-white p-4 rounded-lg shadow-lg border border-gray-300 w-[250px] z-10 mb-2">
          <h3 className="text-lg font-semibold mb-2">Pay With</h3>
          <div className="flex  gap-6 mb-2">
            <button
              onClick={() => handlePaymentMethodChange("Card")}
              className={`px-2 py-1 w-full bg-[#8353E2FF] text-white rounded-full`}
            >
              Card
            </button>
            <button
              onClick={() => handlePaymentMethodChange("UPI")}
              className={`px-4 py-1 rounded-md w-full bg-gray-100 text-gray-700`}
            >
              UPI
            </button>
          </div>

          {paymentMethod === "Card" && (
            <form className="flex flex-col gap-2">
              <div>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  value={cardDetails.cardNumber}
                  onChange={handleInputChange}
                  placeholder="Enter Card Number"
                  className="w-full px-3 py-1 text-sm border rounded"
                />
              </div>
              <div>
                <input
                  id="cardHolderName"
                  name="cardHolderName"
                  type="text"
                  value={cardDetails.cardHolderName}
                  onChange={handleInputChange}
                  placeholder="Enter Card Holder Name"
                  className="w-full px-3 py-1 text-sm border rounded"
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <input
                    id="expirationDate"
                    name="expirationDate"
                    type="text"
                    value={cardDetails.expirationDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    className="w-full px-3 py-1 text-sm border rounded"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    id="cvv"
                    name="cvv"
                    type="text"
                    value={cardDetails.cvv}
                    onChange={handleInputChange}
                    placeholder="CVV"
                    className="w-full px-3 py-1 text-sm border rounded"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handleSubmitPayment}
                className="bg-mixblue text-white px-4 py-1 my-1 rounded-md "
              >
                Confirm and Pay
              </button>
              <div className="flex items-center gap-2 ">
                <input
                  type="checkbox"
                  id="saveCard"
                  checked={saveCard}
                  onChange={handleSaveCardChange}
                  className="w-3 h-3"
                />
                <label htmlFor="saveCard" className="text-xs text-gray-700">
                  Save my card for future reservations
                </label>
              </div>
              <p className="text-[8px]">
                By selecting the button below, I agree to the Property Rules,
                Terms and Conditions, Privacy Policy and COVID-19 Safety
                Requirements.
              </p>
            </form>
          )}

          {paymentMethod === "UPI" && (
            <div className="text-gray-700">
              <p className="mb-4">
                Please select UPI payment option and follow the instructions
                provided by your payment service.
              </p>
              {/* Implement UPI payment instructions or fields here */}
            </div>
          )}

          <button
            onClick={handleClosePaymentModal}
            className="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentModal;
