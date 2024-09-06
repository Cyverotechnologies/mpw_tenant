import React from "react";

import { FaBars } from "react-icons/fa6";
import DashboardAvatarDropdown from "./DashboardAvatarDropdown";

function DashboardTopHeader({ setAsideToggleActive }) {
  return (
    <div className="px-5 lg:ps-10 xl:ps-20 mb-5 ">
      <div className="w-full flex justify-between lg:justify-end items-center lg:hidden ">
        <div
          className="cursor-pointer text-2xl  "
          onClick={() => setAsideToggleActive(true)}
        >
          <FaBars />
        </div>
        <div className="">
          <DashboardAvatarDropdown />
        </div>
      </div>
      <div className="lg:flex lg:justify-between  lg:items-center grid grid-cols-1  mt-3 lg:mt-0   lg:gap-0 ">
        <div className="lg:flex 2xl:gap-52 2xl:justify-start  lg:justify-between lg:w-1/2 grid grid-cols-2  xs:grid-cols-3">
          <h2 className=" font-bold sm:text-2xl text-lg">Smart PG</h2>
          <h2 className="  font-bold sm:text-2xl text-lg  lg:ms-0">T123455</h2>
          <h2 className="  font-bold sm:text-2xl text-lg  ">A103b</h2>
        </div>
        <div className="lg:block hidden">
          <DashboardAvatarDropdown />
        </div>
      </div>
    </div>
  );
}

export default DashboardTopHeader;
