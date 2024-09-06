import React from "react";
import { FaBicycle } from "react-icons/fa";
import { FaCarRear, FaSchoolFlag } from "react-icons/fa6";
import { GiWashingMachine } from "react-icons/gi";
import { LiaSwimmerSolid } from "react-icons/lia";

// Define your amenities as an array of objects
const amenities = [
  { id: 1, icon: <FaSchoolFlag size={20} />, label: "GYM" },
  { id: 2, icon: <LiaSwimmerSolid size={20} />, label: "Swimming Pool" },
  { id: 3, icon: <GiWashingMachine size={20} />, label: "Washing Machine" },
  { id: 4, icon: <FaBicycle size={20} />, label: "2 wheeler parking" },
  { id: 5, icon: <FaCarRear size={20} />, label: "4 wheeler parking" },
];

const FinancialProperty = () => {
  return (
    <div className="lg:mt-[50px] mt-[30px] mb-5 flex lg:flex-row flex-col lg:gap-20 xl:gap-36 gap-8">
      <div className="flex-1 lg:basis-[60%]">
        <h2 className="text-xl sm:text-2xl font-bold mb-8">Financials</h2>
        <div className="flex justify-between mb-10">
          <div className="flex gap-1 items-center">
            <p className="text-black/50 font-medium">
              <span className="text-black">&#8377;&nbsp;</span>5000
            </p>
          </div>
          <p className="text-black/50 font-medium">Total Dues</p>
        </div>
        <div className="flex justify-between mb-10">
          <div className="flex gap-1 items-center">
            <p className="text-black/50 font-medium">
              <span className="text-black">&#8377;&nbsp;</span>5000
            </p>
          </div>
          <p className="text-black/50 font-medium">Total Over Dues</p>
        </div>
        <div>
          <p className="text-black/50 font-medium">Account Statement</p>
        </div>
      </div>
      <div className="flex-1 lg:basis-[40%]">
        <h2 className="text-xl sm:text-2xl font-bold mb-8">
          Property Amenities
        </h2>
        <div className="grid grid-cols-2 gap-5 justify-between">
          {amenities.map((amenity) => (
            <div
              key={amenity.id}
              className="flex items-center gap-2 mb-7 text-sky-500 cursor-pointer hover:font-medium transition-all duration-500 ease-in-out hover:scale-[1.01] "
            >
              {amenity.icon}
              <p className="text-sm">{amenity.label}</p>
            </div>
          ))}
          <div className="text-sky-500 flex items-center mb-7">
            <p className="font-semibold text-sm underline cursor-pointer">
              See All Amenities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialProperty;
