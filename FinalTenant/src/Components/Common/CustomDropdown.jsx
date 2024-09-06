import { FaChevronDown } from "react-icons/fa";
import React, { useState, useRef, useEffect } from "react";

const CustomDropdown = ({
  options,
  selectedOption,
  onOptionChange,
  showOpt,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    onOptionChange(option);
    setIsOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="border-2 px-4 py-1 text-sm font-medium text-gray-500 bg-white rounded flex items-center justify-between w-full cursor-pointer"
      >
        {selectedOption || showOpt}
        <FaChevronDown
          className={`text-sm ml-6 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border-2 rounded shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
