import React, { useState } from "react";
import Input from "@/components/Form/Input";
import ai_icon from "@/../public/images/ai_icon.svg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Typography } from "@mui/material";
import { ChevronRight } from "lucide-react";



const RightSideDrawer = () => {
  const [openChange, setOpenChange] = useState(false);
  return (
    <Drawer
      direction="right"
      open={openChange}
      onOpenChange={setOpenChange}
    >
      <DrawerTrigger>
        <div
          className="text-white cursor-pointer bg-[linear-gradient(90deg,#785BEF_0%,#2268EE_100%)] py-3 px-6 rounded-4xl flex justify-center gap-3 items-center min-w-[200px] w-full"
        >
          <Image src={ai_icon} alt="ai_icon" width={"18"} />{" "}
          <span> Ask AI Assistant</span>
        </div>
      </DrawerTrigger>
      <DrawerContent className={"bg-[#231A2E] border-none p-5"}
        style={{ width: 350 }}
      >
        <DrawerHeader>
          <DrawerTitle className={"flex justify-between items-center gap-5 text-white"}>
            <div className={"flex items-center gap-2"}>
              <Image src={ai_icon} alt="ai_icon" width={"22"} />{" "}
              <span className="text-lg font-inter font-medium">
                Ask AI assistant
              </span>
            </div>
            <ChevronRight size={24} className="h-6 w-6 hover:cursor-pointer" 
            onClick={() => setOpenChange(false)}
            />
          </DrawerTitle>
          <DrawerDescription className={"py-8 flex flex-col gap-4 text-white"}>
            <span className="text-base font-inter font-medium">
              Hi John
            </span>
            <span className="text-sm font-inter font-normal">
              I can answer most questions about building workflows in here.
            </span>
            <span className="text-sm font-inter font-normal">
              For specific tasks, you’ll see the buttons in the UI.
            </span>
            <span className="text-sm font-inter font-normal">
              How can I help?
            </span>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          {/* <Button>Submit</Button> */}
          <Input
            type="email"
            placeholder="Ask anything"
            className="w-full" // Added background here
            inputClasses="rounded-xl py-4"
            endIcon={
              <img
                src="/images/click_arrow.svg"
                alt=""
                className="cursor-pointer"
              />
            }
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default RightSideDrawer;