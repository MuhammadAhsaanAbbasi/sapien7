"use client";
import Input from "@/components/Form/Input";
import Image from "next/image";
import React, { useState } from "react";
import main_icon from "@/../public/images/main_icon.svg";
import wtp_icon from "@/../public/images/wtp_icon.svg";
import tlg_icon from "@/../public/images/tlg_icon.svg";
import ghl_icon from "@/../public/images/ghl_icon.svg";
import gmail_icon from "@/../public/images/gmail_icon.svg";
import MainSidebar from "@/components/drawer/sidebarLeft";
import RightSideDrawer from "@/components/drawer/side_drawer";
import ApplicationText from "@/components/shared/ApplicationText";
import { Mic } from "lucide-react";


const UserPreference = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="flex flex-col items-center bg-cover bg-no-repeat bg-center min-h-screen max-h-auto w-full z-0 bg-[#141219] text-white"
        style={{ backgroundImage: `url('/images/gradient.png')` }}
      >
        {/* Header */}
        <header className="w-full flex justify-between items-start p-8">
          <MainSidebar />
          <div className="hidden md:flex justify-center items-center text-center w-full transform translate-x-1/12 relative">
            <div
              className="bg-cover bg-no-repeat bg-center h-40 w-40 rounded-full bg-[radial-gradient(98.37%_109.43%_at_50%_50%,rgba(255,255,255,0)_36.6%,rgba(255,255,255,0.2)_100%)]"
              style={{ backgroundImage: `url('/images/heading_bg.png')` }}
            ></div>
            <div className="pt-10 absolute top-1">
              <ApplicationText />
            </div>
          </div>
          <RightSideDrawer />
        </header>

        {/* Main content */}
        <main className="flex-1 flex flex-col items-center justify-center gap-8 md:gap-12 w-full max-w-xl my-5 mx-auto px-4">
          {/* Sapien7 Logo Responsivness */}
          <div className="flex justify-center items-center md:hidden text-center w-full relative mb-5">
            <div
              className="bg-cover bg-no-repeat bg-center h-40 w-40 rounded-full bg-[radial-gradient(98.37%_109.43%_at_50%_50%,rgba(255,255,255,0)_36.6%,rgba(255,255,255,0.2)_100%)]"
              style={{ backgroundImage: `url('/images/heading_bg.png')` }}
            ></div>
            <div className="pt-10 absolute top-1">
              <ApplicationText />
            </div>
          </div>

          {/* Color Logo */}
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-lg md:text-xl font-normal font-inter">Talk to me, I&apos;m here to help</h3>
            {/* AI Orb */}
            <div className="relative max-h-44 max-w-44">
              <Image
                src={main_icon}
                alt="AI Orb"
                height={180}
                width={180}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Input field */}
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="How can I help you today?"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full form_input"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Mic className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Integrated apps */}
          <div className="w-full flex flex-col items-center gap-6">
            <p className="text-lg md:text-xl font-normal font-inter">Select Integrated Apps</p>
            <div className="flex justify-center gap-8">
              <div
                className={`h - 16 w-16 shadow-[0px_0px_0px_1px_#FFFFFF1A_inset]
              bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0)_30%,rgba(255,255,255,0.15)_100%)]
              rounded-full 
                         p-2 flex justify-center`}
              >
                <Image
                  alt="wtp_icon"
                  src={wtp_icon}
                  width={"46"}
                  className=""
                />
              </div>
              <div
                className="h-16 w-16 shadow-[0px_0px_0px_1px_#FFFFFF1A_inset] 
                         bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0)_30%,rgba(255,255,255,0.15)_100%)] 
                         rounded-full 
                         p-2 flex justify-center"
              >
                <Image
                  alt="gmail_icon"
                  src={gmail_icon}
                  width={"46"}
                  className=""
                />
              </div>
              <div
                className="h-16 w-16 shadow-[0px_0px_0px_1px_#FFFFFF1A_inset] 
                         bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0)_30%,rgba(255,255,255,0.15)_100%)] 
                         rounded-full 
                         p-2 flex justify-center"
              >
                <Image
                  alt="ghl_icon"
                  src={ghl_icon}
                  width={"46"}
                  className=""
                />
              </div>

              <div
                className="h-16 w-16 shadow-[0px_0px_0px_1px_#FFFFFF1A_inset] 
                         bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0)_30%,rgba(255,255,255,0.15)_100%)] 
                         rounded-full 
                         p-2 flex justify-center"
              >
                <Image
                  alt="tlg_icon"
                  src={tlg_icon}
                  width={"46"}
                  className=""
                />
              </div>
            </div>
          </div>
        </main >
      </div >
    </>
  );
};

export default UserPreference;
