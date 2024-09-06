import React, { useState } from "react";
import img_1 from "../../assets/A2.png";
import { LuBuilding, LuUploadCloud } from "react-icons/lu";
import { CiCalendarDate } from "react-icons/ci";
import { MdHome, MdOutlineFoodBank } from "react-icons/md";
import { IoMdBed } from "react-icons/io";
import { GoHome } from "react-icons/go";

const Profile = () => {
  const [image, setImage] = useState(null);
  const [aadharFile, setAadharFile] = useState(null);
  const [panFile, setPanFile] = useState(null);

  // Handle file input changes
  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (type === "aadhar") {
      setAadharFile(file);
    } else if (type === "pan") {
      setPanFile(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profileImage", image);
    formData.append("aadharFile", aadharFile);
    formData.append("panFile", panFile);

    formData.append("propertyName", e.target.propertyName.value);
    formData.append("fullName", e.target.fullName.value);
    formData.append("email", e.target.email.value);
    formData.append("phone", e.target.phone.value);
    formData.append("HouseNo", e.target.HouseNo.value);
    formData.append("city", e.target.city.value);
    formData.append("pincode", e.target.pincode.value);
    formData.append("state", e.target.state.value);
    formData.append("fullAddress", e.target.fullAddress.value);
    formData.append("checkInDate", e.target.checkInDate.value);
    formData.append("block", e.target.block.value);
    formData.append("room", e.target.room.value);
    formData.append("bed", e.target.bed.value);
    formData.append("foodPreference", e.target.foodPreference.value);
    formData.append("aadhar", e.target.aadhar.value);
    formData.append("pan", e.target.pan.value);

    try {
      // Simulate form submission (replace with actual API call)
      console.log("Form submitted with data:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };

  // Handle form reset
  const handleReset = () => {
    setImage(null);
    setAadharFile(null);
    setPanFile(null);
    document.getElementById("profileForm").reset();
  };

  return (
    <section className="px-5 lg:px-10 overflow-x-hidden lg:mt-12">
      <div className="mb-5 mt-10">
        <h2 className="font-bold text-xl sm:text-2xl">My Profile</h2>
      </div>
      <div className="w-full flex flex-col xl:flex-row gap-20 mb-3">
        <div className="lg:basis-3/5 w-full py-">
          <div className="flex items-center gap-x-3 mb-2">
            <img
              src={image ? URL.createObjectURL(image) : img_1}
              className="sm:w-36 sm:h-36 w-20 h-20 object-cover rounded"
              alt="Profile"
            />
            <div>
              <h2 className="mb-2 text-base">Upload your photo</h2>
              <p className="mb-4 text-sm text-black/50">
                Your photo should be in PNG or JPG format
              </p>
              <div className="flex flex-nowrap">
                <label
                  htmlFor="change_image"
                  className="text-mixblue border-mixblue border-2 rounded-lg cursor-pointer px-2 py-1 sm:px-4 sm:text-lg text-xs flex items-center justify-center"
                >
                  Change Image
                </label>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="hidden"
                  id="change_image"
                />
                <button
                  className="mx-2 text-black/60 px-4 py-2 rounded-md hover:bg-gray-300"
                  onClick={() => setImage(null)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          <form id="profileForm" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="propertyName"
                className="text-lg font-semibold mb-1"
              >
                Property Name
              </label>
              <input
                id="propertyName"
                name="propertyName"
                type="text"
                placeholder="Autopopulated"
                className="w-full px-2 py-2 bg-gray-100 rounded text-sm font-semibold focus:outline-none"
                autoComplete="off"
                autoFocus
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="fullName" className="text-lg font-semibold mb-1">
                Full Name*
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Your full name"
                className="w-full px-2 py-2 bg-gray-100 rounded text-sm font-semibold focus:outline-none"
                autoComplete="off"
                required
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="email" className="text-lg font-semibold mb-1">
                Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                className="w-full px-2 py-2 bg-gray-100 rounded text-sm font-semibold focus:outline-none"
                autoComplete="off"
                required
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="phone" className="text-lg font-semibold mb-1">
                Phone number*
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
                className="w-full px-2 py-2 bg-gray-100 rounded text-sm font-semibold focus:outline-none"
                autoComplete="off"
                required
              />
            </div>
            <div className="flex flex-col mb-3">
              {/* HouseNo and City in one row */}
              <label htmlFor="address" className="text-lg font-semibold mb-1">
                Permanent Address*
              </label>
              <div className="flex gap-4 mb-3 xs:flex-row flex-col">
                <div className="flex-1">
                  <input
                    id="HouseNo"
                    name="HouseNo"
                    type="text"
                    placeholder="House No."
                    className="w-full px-3 py-2 bg-gray-100 rounded text-sm font-semibold focus:outline-none"
                    autoComplete="off"
                  />
                </div>
                <div className="flex-1">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="City"
                    className="w-full px-3 py-2 bg-gray-100 rounded text-sm font-semibold focus:outline-none"
                    autoComplete="off"
                  />
                </div>
              </div>

              {/* Pincode and State in one row */}
              <div className="flex gap-4 mb-3 xs:flex-row flex-col">
                <div className="flex-1">
                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    placeholder="Pincode"
                    className="w-full px-3 py-2 bg-gray-100 rounded text-sm font-semibold focus:outline-none"
                    autoComplete="off"
                  />
                </div>
                <div className="flex-1">
                  <input
                    id="state"
                    name="state"
                    type="text"
                    placeholder="State"
                    className="w-full px-3 py-2 bg-gray-100 rounded text-sm font-semibold focus:outline-none"
                    autoComplete="off"
                  />
                </div>
              </div>

              {/* Full Address on a complete row */}
              <div>
                <input
                  id="fullAddress"
                  name="fullAddress"
                  type="text"
                  placeholder="Full Address"
                  className="w-full px-3 py-2 bg-gray-100 rounded text-sm font-semibold focus:outline-none"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="mb-2 flex flex-wrap gap-3 text-nowrap">
              {/* Check-in Date Input */}
              <div className="border-mixblue rounded shadow-mixblue shadow-sm border flex gap-1 items-center px-2 py-1 flex-1 cursor-pointer">
                <CiCalendarDate className="text-black" size={22} />
                <input
                  type="date"
                  name="checkInDate"
                  placeholder="Check in Date*"
                  className="flex-1 bg-transparent border-none placeholder:text-gray-300 text-sm font-medium focus:outline-none"
                  aria-label="Check in Date"
                  autoComplete="off"
                />
              </div>

              {/* Block Input */}
              <div className="border-mixblue rounded shadow-mixblue shadow-sm border flex gap-1 items-center px-2 py-1 flex-1 cursor-pointer">
                <LuBuilding className="text-black" size={22} />
                <input
                  type="text"
                  name="block"
                  placeholder="Block*"
                  className="flex-1 bg-transparent border-none placeholder:text-gray-300 text-sm font-medium focus:outline-none"
                  aria-label="Block"
                  autoComplete="off"
                />
              </div>

              {/* Room Input */}
              <div className="border-mixblue rounded shadow-mixblue shadow-sm border flex gap-1 items-center px-2 py-1 flex-1 cursor-pointer">
                <GoHome className="text-black" size={22} />
                <input
                  type="text"
                  name="room"
                  placeholder="Room*"
                  className="flex-1 bg-transparent border-none placeholder:text-gray-300 text-sm font-medium focus:outline-none"
                  aria-label="Room"
                  autoComplete="off"
                />
              </div>

              {/* Bed Input */}
              <div className="border-mixblue rounded shadow-mixblue shadow-sm border flex gap-1 items-center px-2 py-1 flex-1 cursor-pointer">
                <IoMdBed className="text-black" size={22} />
                <input
                  type="text"
                  name="bed"
                  placeholder="Bed*"
                  className="flex-1 bg-transparent border-none placeholder:text-gray-300 text-sm font-medium focus:outline-none"
                  aria-label="Bed"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="flex mb-2 xs:gap-3 gap-1  flex-col xs:items-center">
              {/* Food Preference Input */}
              <div className=" flex flex-col gap-2 w-full  rounded">
                <label className="text-lg font-semibold ">
                  Food Preference*
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-mixblue transition-colors">
                    <input
                      type="radio"
                      name="foodPreference"
                      value="Veg"
                      className="form-radio text-mixblue  focus:ring-mixblue"
                      aria-label="Veg"
                      required
                    />
                    <span className="text-sm text-gray-700 font-medium">
                      Veg
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-mixblue transition-colors">
                    <input
                      type="radio"
                      name="foodPreference"
                      value="Non-Veg"
                      className="form-radio text-mixblue  focus:ring-mixblue"
                      aria-label="Non-Veg"
                      required
                    />
                    <span className="text-sm text-gray-700 font-medium">
                      Non-Veg
                    </span>
                  </label>
                </div>
              </div>

              {/* Aadhar Input */}
              <div className=" w-full flex flex-col">
                <label htmlFor="aadhar" className="text-lg font-semibold mb-1">
                  Aadhar*
                </label>
                <input
                  type="text"
                  id="aadhar"
                  name="aadhar"
                  className="w-full px-2 py-2 rounded-sm bg-gray-100 text-sm font-semibold outline-none"
                  placeholder="Your Aadhar Number"
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mb-3">
              <label htmlFor="pan" className="text-lg font-semibold mb-1">
                PAN
              </label>
              <input
                id="pan"
                name="pan"
                type="text"
                placeholder="Your PAN number"
                className="w-full px-2 py-2 bg-gray-100 rounded text-sm font-semibold focus:outline-none"
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <p className="text-sky-500 underline cursor-pointer text-sm">
                View and agree selected property terms & conditions *
              </p>
            </div>
            <div className="flex justify-end">
              <div className="flex gap-8">
                <button
                  type="button"
                  onClick={handleReset}
                  className="xs:px-5 xs:py-2 px-2 py-2 hover:bg-gray-400 hover:text-white rounded-md text-black/50 font-medium text-base"
                >
                  Reset
                </button>
                <div className="">
                  <button
                    type="submit"
                    className="xs:px-5 xs:py-2 px-2 py-2 text-nowrap bg-mixblue font-medium text-base text-white rounded-md  group relative"
                  >
                    Submit for Verification
                    <div className="bg-white min-w-[200px] absolute bottom-full text-mixblue text-start p-3 mb-2 shadow-sm right-0 text-lg invisible group-hover:visible">
                      Profile submitted for Verification.
                      <br />
                      You will receive an email once <br /> verified.
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:basis-2/5 w-full flex flex-col gap-10">
          <div className="w-full flex flex-col justify-center gap-5">
            <div className="border-dashed border-4 bg-gray-50 rounded-md flex flex-col items-center justify-center py-9">
              <div>
                <LuUploadCloud className="text-gray-300" size={80} />
              </div>
              <h2 className="mb-2 text-xl font-semibold text-black/70">
                Aadhar *
              </h2>
              <p className="mb-4 text-sm text-black/50 font-medium">
                Supported format: PNG, JPG
              </p>
              <span className="mb-2 text-base font-bold text-black/60">OR</span>
              <h3 className="font-semibold text-mixblue">Browse files</h3>
              <input
                type="file"
                className="cursor-pointer p-1 w-40 z-50 ml-5 opacity-0 -mt-6 border"
                onChange={(e) => handleFileChange(e, "aadhar")}
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center gap-5">
            <div className="border-dashed border-4 bg-gray-50 rounded-md flex flex-col items-center justify-center py-9">
              <div>
                <LuUploadCloud className="text-gray-300" size={80} />
              </div>
              <h2 className="mb-2 text-xl font-semibold text-black/70">
                PAN *
              </h2>
              <p className="mb-4 text-sm text-black/50 font-medium">
                Supported format: PNG, JPG
              </p>
              <span className="mb-2 text-base font-bold text-black/60">OR</span>
              <h3 className="font-semibold text-mixblue">Browse files</h3>
              <input
                type="file"
                className="cursor-pointer p-1 w-40 z-50 ml-5 opacity-0 -mt-6 border"
                onChange={(e) => handleFileChange(e, "pan")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
