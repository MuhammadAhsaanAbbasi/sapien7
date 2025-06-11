import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/../public/images/sapien7_logo.png";

import {
  ChevronLeft,
  LayoutDashboard,
  AppWindowIcon as Apps,
  User,
  Settings,
  ListFilter,
  Shield,
  FileText,
  LogOut,
  Menu,
} from "lucide-react"

import { Switch } from "@/components/ui/switch";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from "@/components/ui/drawer";

const MainSidebar = () => {
  const [open, setOpen] = useState(false);
   const [apps, setApps] = useState({
    whatsapp: true,
    telegram: true,
    email: false,
    fathomAI: false,
    goHighLevel: false,
  });

  const integratedApps = [
    { name: "WhatsApp", key: "whatsapp", enabled: true },
    { name: "Telegram", key: "telegram", enabled: true },
    { name: "Email", key: "email", enabled: true },
    { name: "Fathom AI", key: "fathomAI", enabled: true },
    { name: "Go High Level", key: "goHighLevel", enabled: false },
  ]
  const router = useRouter();

  const handleLogout = () => {
    // 👇 replace with your real sign-out logic
    router.push("/logout");
  };

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="left">
      <DrawerTrigger>
        <div className="w-full">
          <Menu className="hover:cursor-pointer text-white" size={30} />
        </div>
      </DrawerTrigger>

      <DrawerContent
        className="bg-[#231A2E] border-none p-5 overflow-auto scrollbar-hide"
        style={{ width: 350 }}
      >
        {/* ─── HEADER ─────────────────────────────────────── */}
        <DrawerHeader>
          <DrawerTitle className="flex justify-between items-center text-white">
            <Image
              src={logo}
              alt="Sapien 7 Logo"
              width={180}
              height={35}
              className="hover:cursor-pointer"
            />
            <ChevronLeft
              size={32}
              className="hover:cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </DrawerTitle>
        </DrawerHeader>

        {/* ─── MAIN NAV ───────────────────────────────────── */}
        {/* Navigation */}
        <nav className="flex-1 space-y-1 my-3">
          <Link href="#" className="flex items-center px-2 py-2 text-lg text-[#949494] hover:bg-[#2a2435] rounded-md">
            <LayoutDashboard size={18} className="mr-3" />
            Dashboard
          </Link>

          {/* Integrated Apps Section */}
          <div className="py-2">
            <div className="flex items-center px-2 py-2 text-lg text-gray-300">
              <Apps size={18} className="mr-3" />
              Integrated Apps
            </div>
            <div className="max-w-[230px] mx-auto space-y-3 mt-2">
              {integratedApps.map((app, index) => (
                <div key={index} className="flex items-center justify-between text-lg text-[#CACACA]">
                  <span>{app.name}</span>
                  <Switch checked={apps[app.key]} onCheckedChange={(checked) =>
                  setApps((prev) => ({ ...prev, [app.key]: checked }))
                } className="scale-105" />
                </div>
              ))}
            </div>
          </div>

          {/* Other Menu Items */}
          <Link href="#" className="flex items-center px-2 py-2 text-lg text-[#949494] hover:bg-[#2a2435] rounded-md mt-4">
            <User size={18} className="mr-3" />
            Profile
          </Link>

          <Link href="#" className="flex items-center px-2 py-2 text-lg text-[#949494] hover:bg-[#2a2435] rounded-md">
            <Settings size={18} className="mr-3" />
            Settings
          </Link>

          <Link href="#" className="flex items-center px-2 py-2 text-lg text-[#949494] hover:bg-[#2a2435] rounded-md">
            <ListFilter size={18} className="mr-3" />
            Preferences
          </Link>

          <Link href="#" className="flex items-center px-2 py-2 text-lg text-[#949494] hover:bg-[#2a2435] rounded-md">
            <Shield size={18} className="mr-3" />
            Privacy
          </Link>

          <Link href="#" className="flex items-center px-2 py-2 text-lg text-[#949494] hover:bg-[#2a2435] rounded-md">
            <FileText size={18} className="mr-3" />
            Terms of Services
          </Link>
        </nav>
        <DrawerFooter className={"flex-1/6"}>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-[#FF60A5] py-2 px-3 hover:cursor-pointer rounded-md mt-4"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MainSidebar;
