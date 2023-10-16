import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import Language from "./Language";
const Header = ({ showLogoAndIcon }) => {
  return (
    <div className="w-full fixed top-0 left-0 bg-white headerBoxShadow ">
      <div className=" max-w-[1320px] h-[64px] m-auto flex items-center justify-between ">
        <Link href="/" className="flex items-center gap-[6px]">
          <img
            src="./images/foodpanda.png"
            alt="logo.panda"
            className="w-[29px] h-[29px]"
          />
          <p className="text-[#ff2b85] font-semibold text-2xl">foodpanda</p>
        </Link>
        <div className="flex items-center justify-between gap-[24px]">
          <div className="flex items-center max-w-[276px] gap-6">
            {
              showLogoAndIcon && (
                <button className="h-[34px] w-[75px] border rounded-lg border-[#e21b70]">
                <Link
                  href="./LoginSignup"
                  className=" text-[#e21b70] text-sm font-semibold"
                >
                  Log in
                </Link>
              </button>
              )
            }
           {
            showLogoAndIcon && (
              <button className="h-[34px] w-[75px] text-sm border border-transparent rounded-lg bg-[#e21b70]">
              <Link href="./LoginSignup" className="  text-white font-semibold">
                Sign up
              </Link>
            </button>

            )
           }
           
            <div><Language /> </div>
          
          </div> 
          { showLogoAndIcon && (

          <div className="hover:bg-[#fdf2f7] ease-in-out duration-300 cursor-pointer h-[58px] w-[58px] flex items-center justify-center rounded-full">
            <AiOutlineShopping className= "  text-[#ff2b85] text-2xl" />
          </div>
          )

          }
        </div>
      </div>
    </div>
  );
};

export default Header;
