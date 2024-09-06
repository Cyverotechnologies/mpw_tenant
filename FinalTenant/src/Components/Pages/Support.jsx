import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
// import supportBanner from "./../../assets/support_banner.png"
// import NewSupportBanner from '../../assets/supportBanner.png';
import NewSupportBanner from '../../assets/supportBanner.svg'
const Support = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col items-start gap-3 sm:px-5 py-10">
        <div className="w-full lg:w-1/2 px-4 " >
          <div className="">
            <div>
              <h2 className="sm:text-4xl text-3xl font-bold mb-3">
                Need Support ?{" "}
              </h2>
              <p className="mb-2 text-lg text-[#999ea9]">Fill in the form to get in touch</p>
            </div>
            <div className="">
              <img
                className=" w-full  h-fit "
                // src={supportBanner}
                src={NewSupportBanner}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center ">
          <div className="w-full px-4 md:px-8 lg:px-4">
            <form className="bg-white rounded-md ">
              
              <div className="flex md:flex-row flex-col md:justify-between md:gap-2 gap-y-4 mb-8">
                <div className="w-full">
                  <label htmlFor="name" className="mb-2 block">
                    First Name
                  </label>
                  <input
                    id="name"
                    className=" bg-[#f3f4f6] px-3 py-2 w-full outline-none  "
                    type="text"
                    name="email"
                    placeholder="First Name "
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="name" className="mb-2 block">
                    Last Name
                  </label>
                  <input
                    id="name"
                    className=" px-3 py-2 w-full outline-none   bg-[#f3f4f6]"
                    type="email"
                    name="email"
                    placeholder="Last Name "
                  />
                </div>
              </div>
              <label htmlFor="email" className="mb-2 block">
                Email
              </label>
              <div className="flex items-center  bg-[#f3f4f6] mb-8 py-2 px-3">
                <input
                  id="email"
                  className=" pl-2 w-full bg-transparent  outline-none border-none"
                  type="email"
                  name="email"
                  placeholder="Email "
                />
              </div>
              <label htmlFor="email" className="mb-2 block">
                Phone number
              </label>
              <div className="flex bg-[#f3f4f6] items-center  mb-8 py-2 px-3">
                <input
                  id="number"
                  className=" pl-2  focus:outline-0 bg-transparent w-full outline-none border-none"
                  type="number"
                  name="number"
                  placeholder="Phone Number "
                />
              </div>
              <label htmlFor="email" className="mb-2 block">
                Which topic best fit for your needs?
              </label>
              <div className="mb-8 relative bg-[#f3f4f6]"> 
              <select
                name=""
                id=""
                className="w-full bg-transparent appearance-none  px-3 py-2 border  text-gray-400"
              >
                {" "}
                select
                <optgroup>
                  <option value="" className="w-full">
                    Which topic best fit for your need?{" "}
                  </option>
                  <option value="" className="w-full">
                    Topic two{" "}
                  </option>
                  <option value="" className="w-full">
                    Three{" "}
                  </option>
                </optgroup>
              </select>

              </div>
             

              <label htmlFor="message" className="block mb-2  ">
                How can we help?
              </label>
              <textarea
                id="message"
                rows={4}
                className="block bg-[#f3f4f6] p-2.5 w-full  text-gray-900 border focus:outline-none"
                placeholder="Please share what you want us to help"
              ></textarea>

              <button
                type="submit"
                className="block w-full  mt-8 bg-[#620602] py-4     text-white hover:-translate-y-1 transition-all duration-500 hover:text-white  font-semibold mb-2"
              >
                Submit
              </button>

              <div className="flex justify-around mt-8">
                <div>
                  <IoIosCall className="text-5xl text-blue-500" />
                </div>
                <div>
                  <MdEmail className="text-5xl text-blue-500" />
                </div>
                <div>
                  <GiProgression className="text-5xl text-blue-500" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
