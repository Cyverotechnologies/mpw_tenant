import React from "react";
import img_1 from "../../assets/img-1.jpeg";
import img_2 from "../../assets/img-2.jpeg";
import img_3 from "../../assets/img-3.jpeg";
import img_4 from "../../assets/img-4.jpeg";
const communityData = [
  {
    source: img_1,
    title: "Guests",
    description: "See all Guests",
  },
  {
    source: img_2,
    title: "Emergency Contact",
    description: "Access your emergency contacts",
  },
  {
    source: img_3,
    title: "Local Directory",
    description: "Manager , Chef , Security , Plumber",
  },
  {
    source: img_4,
    title: "Daily Help",
    description: "Laundry, Milkman , Car / Bike Cleaning , Maids",
  },
];
const Community = () => {
  return (
    <div className="px-5 lg:px-10 lg:mt-24">
      <div className="mb-6 ">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl cursor-default">
          Community
        </button>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
        {
            communityData.map((item,index)=>(<div key={index} className="bg-[#FAFAFBFF] px-8 pt-7 pb-12 rounded-md 2xl:pt-20 2xl:pb-60 cursor-pointer hover:bg-[#f2f2f5] duration-300 group">
               <div className="flex items-center justify-center mb-3">
               <div className=" px-1 py-1 border border-slate-300 rounded-full overflow-hidden">
                    <img src={item.source} className="size-20 2xl:size-32 object-cover rounded-full" alt="" />
                </div>
               </div>
                <h2 className="text-center text-lg 2xl:text-2xl font-semibold mb-3">{item.title}</h2>
                <h3 className="text-center text-sm 2xl:text-sm text-black/70 group-hover:text-black/90 duration-500">{item.description}</h3>
            </div>))
        }
      </div>
    </div>
  );
};

export default Community;
