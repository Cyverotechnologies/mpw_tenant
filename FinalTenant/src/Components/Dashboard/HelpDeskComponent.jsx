import React, { useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import { HCharts } from "../Charts/HCharts";
import CustomDropdown from "../Common/CustomDropdown";

const options = [
  "Last 30 Days",
  "Last 45 Days",
  "Last 60 Days",
  "Last 90 Days",
];

const HelpDeskComponent = () => {
  const [lastDays, setLastDays] = useState("");
  const [inputText, setInputText] = useState("");
  
  const handleOptionChange = (option) => {
    setLastDays(option);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputText);
  };

  return (
    <div className="lg:mt-20 mt-[30px] mb-5 flex lg:flex-row flex-col lg:gap-20 xl:gap-36 gap-8 w-full">
      <div className="flex-1 lg:basis-[60%]">
        <div className="flex justify-between items-center sm:mb-7 mb-5">
          <h2 className="text-xl sm:text-2xl font-bold">Helpdesk</h2>
          <CustomDropdown
            options={options}
            selectedOption={lastDays}
            onOptionChange={handleOptionChange}
            showOpt={"--Select Days--"}
          />
          <div className="mt-5">
            <IoMdRefresh className="cursor-pointer sm:text-2xl text-xl" />
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="basis-[30%]"></div>

          <div className="basis-[30%] flex justify-end ">
            <button className="font-bold text-[#379AE6FF]">View All</button>
          </div>
        </div>
        <HCharts />
      </div>
      <div className="flex-1 lg:basis-[40%]">
        <h2 className="mb-5 lg:text-2xl text-xl font-bold">
          Like Us? Please Share Feedback
        </h2>
        <div className="border-2 p-2 rounded ">
          <form onSubmit={handleSubmit}>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              required
              placeholder="Input text"
              className="w-full resize-none outline-none focus:ring-0 h-[150px] border rounded px-2 py-1 border-none placeholder:text-black/60 placeholder:font-medium"
            ></textarea>
            <div className="flex items-center justify-center mt-2">
              <button
                type="submit"
                className="bg-mixblue px-4 py-2 text-white rounded-md font-medium hover:bg-[#0297ab] transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpDeskComponent;
