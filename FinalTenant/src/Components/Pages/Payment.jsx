import React, { useState } from "react";
import img_1 from "../../assets/img-1.jpeg";
import img_2 from "../../assets/img-2.jpeg";
import img_3 from "../../assets/img-3.jpeg";
import img_4 from "../../assets/img-4.jpeg";
import img_5 from "../../assets/img-5.jpeg";
import PaymentModal from "../Payment/PaymentModal";
import CustomDropdown from "../Common/CustomDropdown";

const duesData = [
  {
    id: 1,
    payment_type: "Monthly Rent",
    amount: "4000",
    date_of_invoice: "1, May 2024",
  },
  {
    id: 2,
    payment_type: "Monthly Maintenance & Electricity",
    amount: "8000",
    date_of_invoice: "1, May 2024",
  },
  {
    id: 3,
    payment_type: "Monthly Food Charges",
    amount: "2000",
    date_of_invoice: "1, May 2024",
  },
  {
    id: 4,
    payment_type: "Security Deposit",
    amount: "4000",
    date_of_invoice: "15, April 2024",
  },
  {
    id: 5,
    payment_type: "Monthly Revenue",
    amount: "4000",
    date_of_invoice: "1, May 2024",
  },
  {
    id: 6,
    payment_type: "Monthly Maintenance & Electricity",
    amount: "2000",
    date_of_invoice: "1, May 2024",
  },
  {
    id: 7,
    payment_type: "Monthly Food Charges",
    amount: "2000",
    date_of_invoice: "1, May 2024",
  },
  {
    id: 8,
    payment_type: "Security Deposit",
    amount: "4000",
    date_of_invoice: "15, April 2024",
  },
];
const pastPayment = [
  {
    id: 1,
    payment_type: "Monthly Revenue",
    amount: "4000",
    date_of_invoice: "1, May 2024",
    date_of_payment: "1, May 2024",
  },
  {
    id: 2,
    payment_type: "Monthly Maintenance & Electricity",
    amount: "2000",
    date_of_invoice: "1, May 2024",
    date_of_payment: "1, May 2024",
  },
  {
    id: 3,
    payment_type: "Monthly Food Charges",
    amount: "2000",
    date_of_invoice: "1, May 2024",
    date_of_payment: "1, May 2024",
  },
  {
    id: 4,
    payment_type: "Security Deposit",
    amount: "4000",
    date_of_invoice: "15, April 2024",
    date_of_payment: "1, May 2024",
  },
  {
    id: 5,
    payment_type: "Monthly Revenue",
    amount: "4000",
    date_of_invoice: "1, May 2024",
    date_of_payment: "1, May 2024",
  },
  {
    id: 6,
    payment_type: "Monthly Maintenance & Electricity",
    amount: "2000",
    date_of_invoice: "1, May 2024",
    date_of_payment: "1, May 2024",
  },
  {
    id: 7,
    payment_type: "Monthly Food Charges",
    amount: "2000",
    date_of_invoice: "1, May 2024",
    date_of_payment: "1, May 2024",
  },
  {
    id: 8,
    payment_type: "Security Deposit",
    amount: "4000",
    date_of_invoice: "15, April 2024",
    date_of_payment: "1, May 2024",
  },
];
const financialDetails = [
  {
    id: 1,
    source: img_1,
    title: "Check in Date ",
    money: "01 Apr 2004",
  },
  { id: 2, source: img_2, title: "Monthly Rent", money: "$98" },
  { id: 3, source: img_3, title: "Monthly Food Charges", money: "$27" },
  {
    id: 4,
    source: img_4,
    title: "Monthly Maintenance & Electricity",
    money: "$71",
  },
  { id: 5, source: img_5, title: "Security Deposit", money: "$91" },
  { id: 6, source: img_1, title: "Booking Amount", money: "$41" },
  { id: 7, source: img_2, title: "Advance Amount", money: "$58" },
];

const options = ["2021", "2022", "2023", "2024", "2025"];

const Payment = () => {
  const [year, setYear] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOptionChange = (option) => {
    setYear(option);
  };  

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleConfirm = () => {
    // Add your confirmation logic here
    handleModalClose();
  };
  return (
    <section className="w-full px-5 lg:px-10 lg:mt-16 ">
      <div className="flex justify-end mb-5">
        <div className="custom-select-wrapper relative ">
          <CustomDropdown
            options={options}
            selectedOption={year}
            onOptionChange={handleOptionChange}
            showOpt={"--Select Year--"}
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-10">
        <div className="xl:basis-[70%] basis-full">
          <div className="mb-4">
            <button className="px-5 py-2 font-semibold text-white bg-[#9C99B2] rounded-lg text-xl">
              Dues
            </button>
          </div>
          <div className="overflow-x-auto  text-nowrap w-[300px]  xs:min-w-full mb-4">
            <div className="h-[250px] overflow-y-auto  scrollbarak border">
              <table className="w-full text-sm text-left rtl:text-right ">
                <thead className="text-xs  uppercase bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="p-4  font-medium text-sm text-black/70 "
                    >
                      S.NO.
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3   font-medium text-sm text-black/50"
                    >
                      PAYMENT TYPE
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3   font-medium text-sm text-black/70"
                    >
                      AMOUNT
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3   font-medium text-sm text-black/50"
                    >
                      DATE OF INVOICE
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3   font-medium text-sm text-black/70"
                    >
                      DOWNLOAD
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {duesData.map((item, ind) => (
                    <tr
                      key={item.id}
                      className={`border-b ${
                        ind % 2 !== 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="w-4 p-4 ">
                        <div className="flex items-center justify-center">
                          <input
                            id={`checkbox-${item.id}`}
                            type="checkbox"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                        {item.payment_type}
                      </td>
                      <td className="px-6 py-4 text-black/50 ">
                        {item.amount}
                      </td>
                      <td className="px-6 py-4 text-black/70">
                        {item.date_of_invoice}
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-mixblue font-semibold">
                          Invoice
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex xs:flex-none flex-wrap xs:gap-5 gap-2 mb-4">
            <div className="relative">
              {/* Button to open modal */}
              <button
                onClick={handleModalOpen}
                className="px-4 py-2 bg-mixblue text-white rounded-md xs:w-auto text-sm font-semibold w-full"
              >
                MARK SELECTED AS PAID
              </button>

              {/* Modal */}
              {isModalVisible && (
                <div className="absolute bottom-full left-1/2 mb-2 transform -translate-x-1/2 mt-2 bg-white p-4 rounded-lg shadow-lg border border-gray-300 w-[170px] z-10">
                  <h3 className="text-lg font-semibold mb-4">Are You Sure?</h3>
                  <div className="flex justify-between ">
                    <button
                      onClick={handleConfirm}
                      className="px-4 py-1 bg-green-500 text-gray-600 rounded-full hover:bg-green-600"
                    >
                      Yes
                    </button>
                    <button
                      onClick={handleModalClose}
                      className="px-4 py-1 bg-red-500 text-white  rounded-full hover:bg-red-600"
                    >
                      No
                    </button>
                  </div>
                  <button className="px-4 py-2 bg-mixblue mt-4  text-white rounded-md xs:w-auto text-sm font-semibold w-full">
                    Submit
                  </button>
                </div>
              )}
            </div>
            <PaymentModal />
          </div>
          <div className="mb-6">
            <button className="px-5 py-2 font-semibold text-white bg-[#9C99B2] rounded-lg text-xl">
              Past Payments
            </button>
          </div>
          <div className="overflow-x-auto  text-nowrap w-[300px]  xs:min-w-full mb-4">
            <div className="h-[250px] overflow-y-auto  scrollbarak border">
              <table className="w-full text-sm text-left rtl:text-right ">
                <thead className="text-xs  uppercase bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="p-4  font-medium text-sm text-black/70 "
                    >
                      S.NO.
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3   font-medium text-sm text-black/50"
                    >
                      PAYMENT TYPE
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3   font-medium text-sm text-black/70"
                    >
                      AMOUNT
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3   font-medium text-sm text-black/50"
                    >
                      DATE OF INVOICE
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3   font-medium text-sm text-black/70"
                    >
                      DATE OF PAYMENT
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3   font-medium text-sm text-black/50"
                    >
                      DOWNLOAD
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pastPayment.map((item, ind) => (
                    <tr
                      key={item.id}
                      className={`border-b ${
                        ind % 2 !== 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="w-4 p-4 ">
                        <div className="flex items-center justify-center">
                          <input
                            id={`checkbox-${item.id}`}
                            type="checkbox"
                            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                        {item.payment_type}
                      </td>
                      <td className="px-6 py-4 text-black/50 ">
                        {item.amount}
                      </td>
                      <td className="px-6 py-4 text-black/70">
                        {item.date_of_invoice}
                      </td>
                      <td className="px-6 py-4 text-black/70">
                        {item.date_of_payment}
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-mixblue font-semibold">
                          Invoice/Receipt
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className=" xl:basis-[30%] basis-full mb-4">
          <div className="mb-4">
            <button className="px-5 py-2 font-semibold text-white bg-[#9C99B2] rounded-lg text-xl">
              Financial Details
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {financialDetails.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center  gap-2  py-3 px-3 rounded-md ${
                  item.id % 2 === 1 ? "bg-slate-50" : "bg-white"
                }`}
              >
                <div className="flex gap-10 items-center">
                  <img
                    src={item.source}
                    className="size-10 object-cover rounded-md"
                    alt=""
                  />
                  <h2 className="items-center font-semibold text-sm">
                    {item.title}
                  </h2>
                </div>
                <h3 className="flex items-center text-sm text-black/60 w-16 justify-end">
                  {item.money}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
