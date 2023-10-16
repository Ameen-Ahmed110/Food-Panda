import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Header from "@/components/Header";
const LoginSignup = () => {
  return (
    <>
    <Header showLogoAndIcon={false} />
    
    <div className=" relative">
      <div className="loginSignup max-w-[408px] h-[550px] rounded-3xl p-8">
        <h1 className="font-bold text-3xl mb-2">Welcome!</h1>
        <p className="text-[#333333] text-[14px] mb-9 ">
          Sign up or log in to continue
        </p>
        <div className="w-full flex flex-col gap-7">
          <div className="  relative flex items-center ">
            <FaFacebook className="text-white text-[19px] absolute left-4 top-[24%] " />
            <button className="w-full h-9 text-[14px] rounded bg-[#1877f2] text-white font-semibold">
              Continue with Facebook
            </button>
          </div>
          <div className="relative">
          <FcGoogle className=" text-[19px] absolute left-4 top-[24%] " />

            <button className="w-full h-9 text-[14px] rounded bg-transparent border text-black font-normal ">
              Continue with Google
            </button>
          </div>
          <div className="relative">
          <BsApple className="text-white text-[19px] absolute left-4 top-[24%] " />

            <button className="w-full h-9 text-[14px] rounded bg-black text-white font-semibold">
              Continue with Apple
            </button>
          </div>
        </div>
        <div className="text-center my-3">
          <span>or</span>
        </div>
        <div className="flex flex-col gap-4 my-6">
          <button className="h-[48px] rounded-md bg-[#e21b70] text-white font-semibold">
            Log in
          </button>
          <button className="h-[48px] border  border-[#e21b70] text-[#e21b70] rounded-md font-semibold">
            Sign up
          </button>
        </div>
        <p className="font-normal text-[#767676] text-[12px]">
          By signing up, you agree to our{" "}
          <span className="text-[#e21b70] text-sm font-semibold	">
            Terms and Condition
          </span>{" "}
          and{" "}
          <span className="text-[#e21b70] text-sm font-semibold	">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </div>
    </>
  );
};

export default LoginSignup;
