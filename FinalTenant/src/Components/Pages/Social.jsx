import React from "react";
import bgimg from "../../assets/bgImg.png";

const Social = () => {
  return (
    <div
      className="h-[90vh] w-full flex items-center justify-center"
      style={{
        background: `url(${bgimg})`,
        backgroundSize: "90% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center">
        <p className="sm:text-7xl text-5xl text-mixblue font-extrabold uppercase mb-2">
          Coming
        </p>
        <p className="sm:text-7xl text-5xl text-mixblue font-extrabold uppercase mb-7">Soon</p>
        <button className="bg-black text-white px-14 py-2 rounded-3xl font-semibold opacity-80">
          Notify me
        </button>
      </div>
    </div>
  );
};

export default Social;
