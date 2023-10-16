import React from "react";

const ForBusiness = () => {
  return (
    <div className="w-full h-[800px]  relative">
      <div className="max-w-[1320px] m-auto mb-8">
        <h1 className="text-3xl">Take your office out to lunch</h1>
      </div>
      <div className="bannerBusiness relative">
        <div className="absolute transform translate-y-[140%] translate-x-[18%] bg-white shadow-lg  w-[640px] p-6 rounded-2xl h-[220px]">
          <h1 className="text-2xl">
          foodpanda for business
          </h1>
          <p className="mt-8">
            Order lunch or fuel for work-from-home, late nights in the office,
            corporate events, client meetings, and much more.
          </p>

          <button className="cursor-pointer absolute bottom-4 left-6 bg-[#e21b70] text-white px-3 py-4 rounded-md font-semibold ">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForBusiness;
