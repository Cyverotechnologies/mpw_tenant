import React, { useState } from "react";
import signUpImg from "../../assets/signup.png";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdExitToApp } from "react-icons/md";

const SignUp = () => {
  // State for form fields
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});

  // Form validation
  const validate = () => {
    const errors = {};
    if (!role) errors.role = "Role is required";
    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) errors.phoneNumber = "Valid phone number is required";
    if (!otp || otp.length < 4) errors.otp = "OTP must be at least 4 digits";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Process form data here
      console.log("Form submitted:", { role, phoneNumber, otp });
    }
  };

  return (
    <div className="px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div className=" sm:h-[500px] flex items-center justify-center">
          <img src={signUpImg} alt="Login Home" className="w-[90%]  object-cover" />
        </div>
        <div className=" rounded-lg">
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="font-semibold text-black/50 my-2">Sign in  your account</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col items-start">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full sm:max-w-xs border border-purple-500 outline-none py-2 px-3 rounded-lg text-purple-500 text-sm font-semibold mt-5"
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}

            <div className="relative w-full sm:max-w-xs mt-8">
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full border border-sky-600 outline-none py-2 px-10 rounded-lg placeholder:text-sky-600 text-sky-600 text-sm font-semibold"
                placeholder="Enter Phone Number"
              />
              <IoIosPhonePortrait className="absolute top-3 left-3 text-sky-600 text-lg" />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>

            <input
              type="button"
              className="w-full sm:max-w-xs border outline-none py-2 px-2 rounded-lg text-sm font-semibold my-6 bg-sky-500 text-white"
              value="Request OTP"
              onClick={() => {
                // OTP request logic here
              }}
            />

            <div className="relative w-full sm:max-w-xs">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border border-sky-600 outline-none py-2 px-10 rounded-lg placeholder:text-sky-600 text-sky-600 text-sm font-semibold"
                placeholder="Enter OTP"
              />
              <MdExitToApp className="absolute top-3 left-3 text-sky-600 text-lg" />
              {errors.otp && <p className="text-red-500 text-sm">{errors.otp}</p>}
            </div>

            <div className="text-center w-full sm:max-w-xs my-10">
              <p className="text-sm text-black/40 font-semibold">
                By continuing you agree to our
              </p>
              <p className="text-black/50 font-semibold">
                Terms & Conditions and Privacy Policy
              </p>
            </div>

            <input
              type="submit"
              className="w-full sm:max-w-xs border outline-none py-2.5 px-2 rounded-lg text-sm font-semibold bg-cyan-500 text-white"
              value="Continue"
            />

            <p className="font-semibold text-sm text-black/50 text-center w-full sm:max-w-xs mt-14">
              New to MyPg World? <span className="text-cyan-500 cursor-pointer">Sign Up</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;