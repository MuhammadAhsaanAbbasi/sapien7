import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#1B1724] border border-[#FFFFFF1A] text-white py-16">
            <div className="container mx-auto px-6">
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className="space-y-8 font-inter">
                        <div className='space-y-4'>
                            <div className="flex items-center gap-2">
                                <div className='flex justify-center items-center'>
                                    <Image
                                        src={"/images/sapien_white.png"}
                                        alt='Sapien Logo'
                                        width={35}
                                        height={35}
                                        className='w-full h-auto'
                                    />
                                </div>
                                <span className="text-2xl font-bold">SAPIEN 7</span>
                            </div>
                            <p className="text-lg lg:text-xl font-normal">
                                Deploy intelligent agents, integrate
                                <br />
                                with leading platforms.
                            </p>
                        </div>
                        <div className='space-y-4'>
                            <div className="flex space-x-4">
                                <Link href="#">
                                    <FaLinkedin size={32} className='text-[#D9D7E6]' />
                                </Link>
                                <Link href="#" >
                                    <FaTwitter size={32} className='text-[#D9D7E6]' />
                                </Link>
                                <Link href="#">
                                    <FaYoutube size={32} className='text-[#D9D7E6]' />
                                </Link>
                                <div className='flex justify-center items-center'>
                                    <Link href="#">
                                        <Image
                                            src={"/images/cr2.png"}
                                            alt='Sapien Logo'
                                            width={32}
                                            height={32}
                                            className='w-full h-auto'
                                        />
                                    </Link>
                                </div>
                            </div>
                            <p className="text-base font-normal">
                                Copyright © Sapien 7. 2025 All Rights Reserved
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        <div className='space-y-6 font-inter'>
                            <h3 className="text-xl font-bold">
                                Company
                            </h3>
                            <ul className="space-y-4">
                                <li className='text-[#D8D3FF] text-base'>
                                    <Link href="#">
                                        Home
                                    </Link>
                                </li>
                                <li className='text-[#D8D3FF] text-base'>
                                    <Link href="#">
                                        About Us
                                    </Link>
                                </li>
                                <li className='text-[#D8D3FF] text-base'>
                                    <Link href="#">
                                        Careers
                                    </Link>
                                </li>
                                <li className='text-[#D8D3FF] text-base'>
                                    <Link href="#">
                                        Press
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className='space-y-6 font-inter'>
                            <h3 className="text-xl font-bold">Product</h3>
                            <ul className="space-y-4">
                                <li className='text-[#D8D3FF] text-base'>
                                    <Link href="#">
                                        Changelog
                                    </Link>
                                </li>
                                <li className='text-[#D8D3FF] text-base'>
                                    <Link href="#">
                                        Integrations
                                    </Link>
                                </li>
                                <li className='text-[#D8D3FF] text-base'>
                                    <Link href="#" className="hover:text-gray-300">
                                        Templates
                                    </Link>
                                </li>
                                <li className='text-[#D8D3FF] text-base'>
                                    <Link href="#" className="hover:text-gray-300">
                                        Status Page
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className='space-y-6 font-inter'>
                            <h3 className="text-xl font-bold">Resources</h3>
                            <ul className="space-y-4">
                                <li className='text-[#D8D3FF] text-base'>
                                    <Link href="#" className="hover:text-gray-300">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className='text-[#D8D3FF] text-base'>
                                    <Link href="#" className="hover:text-gray-300">
                                        Security
                                    </Link>
                                </li>
                                <li className='text-[#D8D3FF] text-base'>
                                    <Link href="#" className="hover:text-gray-300">
                                        Commitment to Privacy
                                    </Link>
                                </li>
                                <li className='text-[#D8D3FF] text-base'>
                                    <Link href="#" className="hover:text-gray-300">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;