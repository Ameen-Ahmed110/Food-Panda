import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";
import {PiCopyrightLight} from "react-icons/pi";
const Footer = () => {

  const handleFacebookLink = () => {
    window.open('https://www.facebook.com/foodpanda.pk', '_blank');
  };
  const handleInstaLink = () => {
    window.open('https://www.instagram.com/foodpanda_pakistan/', '_blank');
  };

  return (
    <div className="py-12">
      <div className="max-w-[1220px] m-auto 	 ">
        <div className="flex items-center justify-between border-y-2	py-9">
          <div className="flex items-center cursor-default gap-1">
            <img
              className="w-[29px] h-[29px] text-[#cacaca]"
              src="./images/foodpandamodified.png"
              alt=""
            />
            <p className="font-semibold text-2xl text-[#cacaca]">foodpanda</p>
          </div>
          <div className=" flex items-center gap-5  font-normal	">
            <div onClick={handleFacebookLink} className="hover:border-[#ff2b85] cursor-pointer text-[22px] rounded-full w-[48px] h-[48px] border border-[#cacaca] flex items-center justify-center">
              
              <SlSocialFacebook className="text-[#cacaca] hover:text-[#ff2b85]" />
            </div>
            <div  onClick={handleInstaLink} className="hover:border-[#ff2b85] cursor-pointer rounded-full text-[22px] w-[48px] h-[48px] border border-[#cacaca] flex items-center justify-center">
             
              <RxInstagramLogo className="text-[#cacaca] hover:text-[#ff2b85]" />
            </div>
          </div>
        </div>
        <div className="border-b-2 py-5 ">
          <div className="flex items-center  "><PiCopyrightLight className="font-thin text-[#33333]" /> <p className="text-[#33333] font-thin">2023foodpanda</p></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
