import React from "react";

const ListResturant = () => {
  return (
    <div className="w-full h-[800px]  relative">
        

       
      <div className="max-w-[1320px] m-auto mb-8">
        <h1 className="text-3xl">You prepare the food, we handle the rest</h1>
      </div>
      <div className="listBanner w-full relative">


      <div className= "absolute transform translate-y-[60%] translate-x-[18%] bg-white shadow-lg  w-[600px] p-6 rounded-2xl h-[350px] grid ">
        <h1 className="text-2xl">List your restaurant or shop on foodpanda</h1>
        <p>
          Would you like millions of new customers to enjoy your amazing food
          and groceries? So would we!
        </p>
        <p>
          It's simple: we list your menu and product lists online, help you
          process orders, pick them up, and deliver them to hungry pandas – in a
          heartbeat!
        </p>
        <p className="mb-5">Interested? Let's start our partnership today!</p>
        <button className="cursor-pointer absolute bottom-4 left-6 bg-[#e21b70] text-white px-3 py-4 rounded-md font-semibold ">
          Get started
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default ListResturant;
