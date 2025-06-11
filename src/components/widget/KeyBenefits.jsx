import { ChevronRight, LayoutGrid } from 'lucide-react';
import Image from 'next/image';
import SpienWhite from "@/../public/images/sapien_white.png"
import PersonProfile from "@/../public/images/person_profile.png"
import Link from 'next/link';
import React from 'react'
import Input from '../Form/Input';

const KeyBenefits = () => {
    return (
        <section className='py-10'>
            <div className="max-w-6xl mx-auto my-10 space-y-12">
                <h2 className="text-center text-4xl lg:text-5xl font-semibold font-inter">
                    Key <span className="text-primary">Benefits</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
                    {/* Intelligent Automation Card */}
                    <div className="flex flex-col gap-5">
                        <div className="bg-[#0F0F11] rounded-2xl px-6 py-8 max-w-[340px] w-full max-h-[397px] h-full">
                            <div className="space-y-8">
                                <div className="flex items-center gap-3">
                                    <div className='bg-white/10 rounded-full p-3'>
                                        <Image src={SpienWhite} alt="spien"
                                            height={24} width={24} className='w-full h-auto' />
                                    </div>
                                    <h4 className="text-sm font-normal font-inter opacity-60">
                                        Hi! Welcome to Sapien. I'll be assisting you here today.
                                    </h4>
                                </div>

                                <div className="flex flex-row-reverse justify-end items-center gap-3">
                                    {/* <div className='bg-white/10 rounded-full p-3'>
                                        <Image src={SpienWhite} alt="spien"
                                            height={24} width={24} className='w-full h-auto' />
                                    </div> */}
                                    <div className="flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
                                        <Image
                                            src={PersonProfile}
                                            alt={"User"}
                                            height={50}
                                            width={50}
                                            className="aspect-square h-full w-full"
                                        />
                                    </div>
                                    <div className="bg-primary rounded-lg p-3 max-w-[80%]">
                                        <p className="text-sm">
                                            Can you help me automate repetitive customer inquiries for my business?
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className='bg-white/10 rounded-full flex shrink-0 p-3 h-9 w-9'>
                                        <Image src={SpienWhite} alt="spien"
                                            height={24} width={24} className='spect-square w-full h-full' />
                                    </div>
                                    <p className="text-sm font-normal font-inter opacity-60">
                                        Our AI agents handle FAQs, appointment scheduling, and workflows effortlessly. What type of tasks do
                                        you want to automate first?
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    <Input
                                        placeholder="I'm primarily focused on"
                                        className="form_input !h-11"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='space-y-3 font-inter'>
                            <h3 className="text-xl font-medium">
                                Intelligent Automation
                            </h3>
                            <p className="text-[#ABAEBB] text-sm">
                                Deploy AI-driven agents to handle tasks, manage workflows, and boost efficiency.
                            </p>
                            <Link
                                href="https://docs.scoutos.com/docs/integrations/ai-chat-integrations/scout-copilot"
                                className="text-sm flex items-center gap-1 hover:text-purple-500 transition-colors"
                            >
                                Learn more <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Seamless Integrations Card */}
                    <div className="flex flex-col gap-5">
                        <div className="bg-[#0F0F11] rounded-2xl px-6 py-8 max-w-[340px] w-full max-h-[397px] h-full">
                            <div className="flex flex-col justify-between gap-8 h-full">
                                <div className="space-y-6 font-inter">
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
                                            <Image
                                                src={PersonProfile}
                                                alt={"User"}
                                                height={50}
                                                width={50}
                                                className="aspect-square h-full w-full"
                                            />
                                        </div>
                                        <div className='space-y-1'>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm">Johnathon Mcgregor</span>
                                                <span className="text-xs opacity-60">Today 9:45 AM</span>
                                            </div>
                                            <p className="text-sm opacity-60">
                                                Is there a way to integrate this with my existing stack using the APIs provided?
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className='bg-white/10 rounded-full flex shrink-0 p-3 h-9 w-9'>
                                            <Image src={SpienWhite} alt="spien"
                                                height={24} width={24} className='spect-square w-full h-full' />
                                        </div>
                                        <div className='space-y-1'>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm">Sapien 7</span>
                                                <span className="text-xs opacity-60">Today 9:46 AM</span>
                                            </div>
                                            <p className="text-sm opacity-60">
                                                Yes! The platform is designed for seamless compatibility. Which part of your stack are you looking
                                                to integrate with?
                                            </p>
                                            <div className="mt-2">
                                                <button className="bg-white/5 text-white text-sm py-1.5 px-3 rounded-md hover:bg-white/10 hover:cursor-pointer transition-all duration-300">
                                                    Get Started
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <Input
                                        placeholder="Reply..."
                                        className="form_input !h-11"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='space-y-3 font-inter'>
                            <h3 className="text-xl font-medium">Seamless Integrations</h3>
                            <p className="text-[#ABAEBB] text-sm">
                                Connect effortlessly with WhatsApp, Telegram, Amazon Echo, CRM, VIN, Fathom, and more.
                            </p>
                            <Link
                                href="https://docs.scoutos.com/docs/integrations/ai-chat-integrations/scout-copilot"
                                className="text-sm flex items-center gap-1 hover:text-purple-500 transition-colors"
                            >
                                Learn more <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* API & SDK Support Card */}
                    <div className="flex flex-col gap-5">
                        <div className="bg-[#0F0F11] rounded-2xl px-6 py-8 max-w-[340px] w-full max-h-[397px] h-full relative">
                            <div className="text-sm font-medium text-gray-300 space-y-3 leading-tight">
                                <div className="flex">
                                    <span className="text-gray-500 w-6">1</span>
                                    <span className="text-green-400">fetch</span>
                                    <span>(</span>
                                    <span className="text-yellow-300">'https://api.example.com/data'</span>
                                    <span>)</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-500 w-6">2</span>
                                    <span className="text-purple-400">.then</span>
                                    <span>(</span>
                                    <span>response =&gt; {"{"}</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-500 w-6">3</span>
                                    <span className="pl-4 text-purple-400">if</span>
                                    <span> (response.ok) {"{"}</span>
                                </div>
                                {/* 4 */}
                                <div className="flex">
                                    <span className="text-gray-500 w-6">4</span>
                                    <div className='space-x-0.5'>
                                        <span className="pl-8 text-purple-400">return</span>
                                        <span> response.json();</span>
                                    </div>
                                </div>
                                {/* 5 */}
                                <div className="flex">
                                    <span className="text-gray-500 w-6">5</span>
                                    <span className="pl-4">{"}"} </span>
                                    <span className="text-purple-400">else</span>
                                    <span> {"{"}</span>
                                </div>
                                {/* 6 */}
                                <div className="flex">
                                    <span className="text-gray-500 w-6">6</span>
                                    <div className='space-x-0.5'>
                                        <span className="pl-8 text-purple-400">throw</span>
                                        <span> new Error(</span>
                                    </div>
                                    <span className="text-yellow-300">'Not ok'</span>
                                    <span>);</span>
                                </div>
                                {/* 7 */}
                                <div className="flex">
                                    <span className="text-gray-500 w-6">7</span>
                                    <span className="pl-4">{"}"}</span>
                                </div>
                                {/* 8 */}
                                <div className="flex">
                                    <span className="text-gray-500 w-6">8</span>
                                    <span>{"}"})</span>
                                    <span className="text-purple-400">.then</span>
                                    <span>(data =&gt; {"{"}</span>
                                </div>
                                {/* 9 */}
                                <div className="flex">
                                    <span className="text-gray-500 w-6">9</span>
                                    <span className="pl-4 text-purple-400">console</span>
                                    <span>.log(data);</span>
                                </div>
                                {/* 10 */}
                                <div className="flex">
                                    <span className="text-gray-500 w-6">10</span>
                                    <span>{"}"})</span>
                                    <span className="text-purple-400">.catch</span>
                                    <span>(error =&gt; {"{"}</span>
                                </div>
                                {/* 11 */}
                                <div className="flex">
                                    <span className="text-gray-500 w-6">11</span>
                                    <span className="pl-4 text-purple-400">if</span>
                                    <span> (response.ok) {"{"}</span>
                                </div>
                                {/* 12 */}
                                <div className="flex">
                                    <span className="text-gray-500 w-6">12</span>
                                    <div className='space-x-0.5'>
                                        <span className="pl-8 text-purple-400">return</span>
                                        <span> response.json();</span>
                                    </div>
                                </div>

                                <div className="absolute left-1/2 top-2/5 transform -translate-x-1/2">
                                    <div className="bg-primary rounded-2xl flex items-center justify-center w-24 h-24 border-2 border-[#1F2020] drop-shadow-2xl shadow-2xl shadow-white/25"
                                    >
                                        <div className="bg-[#0F0F11] border-2 border-[#1F2020] text-white font-medium text-lg rounded-xl flex flex-col items-center justify-center h-16 w-16">
                                            <LayoutGrid />
                                            <span>
                                                API
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-3 font-inter'>
                            <h3 className="text-xl font-medium">
                                API & SDK Support
                            </h3>
                            <p className="text-[#ABAEBB] text-sm">
                                Enhance capabilities with our powerful API and SDK for deeper customization.
                            </p>
                            <Link
                                href="https://docs.scoutos.com/docs/integrations/ai-chat-integrations/scout-copilot"
                                className="text-sm flex items-center gap-1 hover:text-purple-500 transition-colors"
                            >
                                Learn more <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default KeyBenefits;