import React from "react";
import { MdOutlineMyLocation } from "react-icons/md";

const OrderdFood = () => {
  return (
    <div className=" bg-[#F7F7F7] h-[610px] OrderdFood">
      <div className=" h-full flex justify-start items-center">
        <div className="w-[750px] absolute left-[7%] ">
          <h1 className=" text-[40px] font-normal mb-11">
            It's the food and groceries you love,
            <br /> delivered
          </h1>
          <div className=" flex justify-between gap-8 p-4 bg-white rounded-2xl orderfoodInput ">
            <div className="flex items-center relative ">
              <input
                type="text"
                placeholder="Enter your full address"
                className="border rounded-md w-[580px] py-3 px-5 outline-none	"
              />
              <MdOutlineMyLocation className="cursor-pointer absolute right-5 text-[22px] text-[#ff2b85]" />
            </div>
            <button className="bg-[#e21b70] text-white px-3 rounded-md font-semibold ">
              Find food
            </button>
          </div>
        </div>
      </div>
      {/* <div className="OrderdFood absolute right-0 top-0 w-full h-[730px]"></div> */}
    </div>
  );
};

export default OrderdFood;
