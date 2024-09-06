import React from "react";
import {  NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo1.png";
import {
  MdOutlineDashboard,
  MdMiscellaneousServices,
  MdOutlineEmojiEmotions,
} from "react-icons/md";
import { FaXmark } from "react-icons/fa6";

import { BsCurrencyRupee } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";

function Aside({ setAsideToggleActive }) {
  const { pathname } = useLocation();

  const dashboardData = [
    { title: "Dashboard", icon: <MdOutlineDashboard />, path: "/" },
    { title: "My Profile", icon: <CgProfile />, path: "/profile" },
    { title: "Payments", icon: <BsCurrencyRupee />, path: "/payments" },
    {
      title: "Community",
      icon: <FaUserFriends />,
      path: "/community",
    },
    {
      title: "Services",
      icon: <MdMiscellaneousServices />,
      path: "/services",
    },
    {
      title: "Social",
      icon: <MdOutlineEmojiEmotions />,
      path: "/social",
    },
    {
      title: "Notices",
      icon: <BiNotepad />,
      path: "/notices",
    },
    {
      title: "Helpdesk",
      icon: <TfiHeadphoneAlt />,
      path: "/helpdesk",
    },
  /*   {
      title: "Sign Up",
      icon: <IoIosLogIn />,
      path: "/signup",
    }, */
  ];

  return (
    <div className="w-full bg-white relative">
      <div className="logo  p-3  sticky top-0 bg-white">
        <img src={logo} alt="Logo" className="h-28 w-full object-cover" />
        <div
          className="lg:hidden absolute right-0 bg-black text-white p-2 font-bold rounded-bl-lg cursor-pointer top-0"
          onClick={() => setAsideToggleActive(false)}
        >
          <FaXmark size={20} />
        </div>
      </div>

      <div className="p-2 flex flex-col gap-1">
        {dashboardData.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `cursor-pointer p-2 flex items-center group hover:bg-mixblue   gap-2 font-medium duration-700  rounded  ${
                isActive ? "bg-mixblue text-white" : " "
              }`
            }
            onClick={() => setAsideToggleActive(false)} // Close sidebar on click
          >
            <div
              className={`text-2xl   group-hover:text-white ${
                item.path === pathname ? "text-white" : "text-mixblue"
              }`}
            >
              {item.icon}
            </div>
            <p
              className={`group-hover:text-white  ${
                item.path === pathname ? "text-white" : "text-black/70"
              }`}
            >
              {item.title}
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Aside;
