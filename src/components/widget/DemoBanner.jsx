import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';

const DemoBanner = () => {
    return (
        <div className="py-12 px-4 flex justify-center items-center">
            <div className="w-full max-w-5xl rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-12 text-center relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute inset-0 opacity-90">
                        <div className="absolute -left-10 top-48 w-40 h-80">
                            <Image 
                            src={"/images/sapien_90.png"}
                            alt='sapien logo'
                            width={155}
                            height={160}
                            className='w-full h-auto'
                            />
                        </div>
                        <div className="absolute -right-10 bottom-10 w-40 h-80">
                            <Image 
                            src={"/images/sapien_180.png"}
                            alt='sapien logo'
                            width={155}
                            height={160}
                            className='w-full h-auto'
                            />
                        </div>
                    </div>

                    <div className="relative z-10 space-y-6 font-inter">
                        <h2 className="text-white text-3xl md:text-4xl font-bold">Power Up Your Business with AI Agents</h2>

                        <p className="text-white/90 text-xl font-light max-w-2xl mx-auto">
                            Join hundreds of businesses using Sapien7 to automate, integrate, and scale their operations. ✨
                        </p>

                        <div className="pt-4">
                            <Button className="bg-[#14121926] hover:bg-[#14121926]/90 text-white border border-[#FFFFFF66] font-medium px-8 py-4 h-auto text-lg rounded-full hover:cursor-pointer">
                                <Image
                                    src={"/images/sapien_white.png"}
                                    alt="sapien logo"
                                    width={25}
                                    height={25}
                                    className='w-full h-auto'
                                />
                                <span>
                                    Book a Demo
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoBanner;