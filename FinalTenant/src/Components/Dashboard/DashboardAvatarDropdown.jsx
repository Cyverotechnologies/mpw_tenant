import React, { useState, useRef, useEffect } from "react";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa"; // Importing icons
import { Link, useLocation } from "react-router-dom";

function DashboardAvatarDropdown() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown menu

  function HandleMenuVisable() {
    setIsMenuVisible(!isMenuVisible);
  }

  // Function to handle clicks outside the dropdown
  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuVisible(false);
    }
  }

  // Add and remove the event listener for clicks outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative flex items-center"
      ref={dropdownRef}
      onClick={HandleMenuVisable}
    >
      {/* Avatar */}
      <div className="flex items-end mb-1 gap-1 cursor-pointer">
        <div className="flex flex-col items-end mb-0.5">
          <p className="font-semibold md:text-base text-sm">Ankit Kumar</p>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS884FEaQN4oz4i1nwi10Tk0JvCEuUR-h06-pcU5ZYB7MT8JtGBawo9YZGGog&s" // Static avatar image URL
          alt="User Avatar"
          className="size-10 md:size-12 rounded-full border-2 border-gray-300 cursor-pointer object-cover"
        />
      </div>

      {/* Dropdown Menu */}
      {isMenuVisible && (
        <div className="absolute top-11 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <div className="p-2">
            {/* Profile Option */}
            <Link
              to={"/profile"}
              className="w-full flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <FaUserCircle className="text-xl mr-2" />
              <span>Profile</span>
            </Link>

            {/* Logout Option */}
            <button className="w-full flex items-center p-2 text-red-500 hover:bg-red-50 rounded-lg">
              <FaSignOutAlt className="text-xl mr-2" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardAvatarDropdown;
