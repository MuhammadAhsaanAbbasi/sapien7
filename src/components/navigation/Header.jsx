"use client"
import React, { useState } from "react"
import Link from "next/link"
import { ChevronDown, X } from "lucide-react"
import logo from "@/../public/images/sapien7_logo.png"
import Image from "next/image"

const Header = () => {
    const [showBanner, setShowBanner] = useState(true)
    return (
        <div className="sticky top-0 z-50">
            {showBanner && (
                <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white py-3 px-4 flex justify-between items-center">
                    <div className="flex-1"></div>
                    <p className="text-center flex-grow text-sm">
                        Get 3 Months Free! Sign up now and enjoy 3 months free - no commitment.{" "}
                        <Link href="#" className="underline font-medium">
                            Read more
                        </Link>{" "}
                        →
                    </p>
                    <div className="flex-1 flex justify-end">
                        <button onClick={() => setShowBanner(false)} aria-label="Close banner">
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            )}
            <div className="bg-[#141219] text-white py-6 px-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src={logo}
                            alt="Sapien 7 Logo"
                            width={180}
                            height={35}
                            className="hover:cursor-pointer"
                        />
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <NavItem label="Product" hasDropdown />
                        <NavItem label="Resources" hasDropdown />
                        <Link href="/pricing" className="text-sm hover:text-purple-400 transition-colors">
                            Pricing
                        </Link>
                        <Link href="/contact" className="text-sm hover:text-purple-400 transition-colors">
                            Contact
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link href="/signin" className="text-sm hover:text-purple-400 transition-colors">
                            Sign In
                        </Link>
                        <Link
                            href="/demo"
                            className="text-sm border border-purple-500 text-white rounded-full px-5 py-2 hover:bg-purple-500/10 transition-colors"
                        >
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;


function NavItem({ label, hasDropdown = false }) {
    return (
        <div className="relative group">
            <button className="flex items-center text-sm hover:text-purple-400 transition-colors">
                {label}
                {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
            </button>
            {hasDropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                        <Link href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800">
                            Option 1
                        </Link>
                        <Link href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800">
                            Option 2
                        </Link>
                        <Link href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800">
                            Option 3
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}
