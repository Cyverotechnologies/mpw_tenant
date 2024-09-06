import React from "react";
import { FaBars } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import DashboardAvatarDropdown from "../Dashboard/DashboardAvatarDropdown";

function Navbar({ setAsideToggleActive }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const showNavbarContent = [
    "/profile",
    "/payments",
    "/notices",
    "/services",
    "/community",
    "/social",
    "/helpdesk",
  ];

  console.log(currentPath)
 
  const shouldShowNavbar = showNavbarContent.includes(currentPath);

  return (
    shouldShowNavbar && (
      <div className="flex justify-between lg:justify-end items-center">
        <div
          className="cursor-pointer text-2xl lg:hidden inline-block mb-5"
          onClick={() => setAsideToggleActive(true)}
        >
          <FaBars />
        </div>
        <DashboardAvatarDropdown />
      </div>
    )
  );
}

export default Navbar;
