"use client";
import Image from "next/image";
import React from "react";
import auth_logo from "../../../../../public/images/auth_logo.svg";
import Input from "@/_components/Form/Input";

const RecoveryEmail = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center   min-h-screen max-h-auto w-full z-0 bg-[#141219]"
      style={{ backgroundImage: `url('/images/gradient.png')` }}
    >
      <div className="w-full min-h-[50vh] max-h-auto flex justify-center items-center flex-col">
        <div className="flex justify-center items-start w-full pt-8 px-5">
          <div className=""></div>

          <div className="flex justify-center items-center text-center w-full relative">
            <div
              className="bg-cover bg-no-repeat bg-center h-36 w-36 rounded-full bg-[radial-gradient(98.37%_109.43%_at_50%_50%,rgba(255,255,255,0)_36.6%,rgba(255,255,255,0.2)_100%)]"
              style={{ backgroundImage: `url('/images/heading_bg.png')` }}
            ></div>
            <h1 className="text-white font-medium text-3xl text-center pt-10  absolute top-1">
              Hi! I'm Sapien <span className="text-[#FF60A5]"> 7</span>
            </h1>
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-center gap-3 w-[550px] mx-auto  text-white bg-[radial-gradient(98.37%_109.43%_at_50%_50%,rgba(255,255,255,0)_36.6%,rgba(255,255,255,0.2)_100%)] border-[1px] border-solid border-[#FFFFFF33] px-3 py-14 mt-12 rounded-xl ">
          <div className="absolute -top-16">
            <Image
              alt="main_logo"
              src={auth_logo}
              width={"80"}
              className="py-4"
            />
          </div>

          <div className="w-9/12 mx-auto">
            <h1 className="text-white font-normal text-3xl text-center">
              Forgot Your Password?{" "}
            </h1>
            <p className="py-3 text-sm font-light text-center !font-urbanist text-[#FFFFFF] px-12">
              Enter your email address and we will send you instructions to
              reset your password.
            </p>

            <div className="py-4">
              <div className="">
                <Input
                  labelIcon={
                    <img
                      src="/images/email_icon.svg"
                      alt=""
                      className="cursor-pointer"
                    />
                  }
                  title="Email"
                  type="email"
                  placeholder="Enter Email here"
                  className="w-full" // Added background here
                  inputClasses="rounded-xl py-4"
                />
              </div>
              <div className="w-full py-8">
              <button className="rounded-4xl !font-urbanist w-full py-4 bg-[linear-gradient(90deg,#785BEF_0%,#2268EE_100%)] shadow-[0px_0px_48px_1px_#FFFFFF26_inset]">
            Continue
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoveryEmail;
