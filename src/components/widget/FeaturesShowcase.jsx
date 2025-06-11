import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaDiamond } from "react-icons/fa6";
import AgenticShowcase from "@/../public/images/agentic_showcase.png"
import { Button } from '../ui/button';

const FeaturesShowcase = () => {
    const firstSection = {
        title: "AI-DRIVEN EXPERIENCES",
        heading: "Optimize workflows with intelligent, self-learning AI agents",
        features: [
            "Automate repetitive tasks and free up human resources.",
            "Deploy multi-agent systems for specialized business functions",
            "AI learns and improves over time for better decision making",
            "Reduce operational costs while increasing productivity"
        ],
        buttonText: "Try AI Automation"
    };

    const secondSection = {
        title: "Seamless Integrations",
        heading: "Integrates with your tech stack, ensuring frictionless workflows",
        features: [
            "Built-in support for WhatsApp, Telegram, Amazon Echo, CRMs & more.",
            "API & SDK for custom integrations tailored to your needs.",
            "Real-time data synchronization across all connected platforms.",
            "Keep your existing tools while enhancing their capabilities."
        ],
        buttonText: "Explore Integrations"
    };

    const thirdSection = {
        title: "Intelligent Insights",
        heading: "Turn data into actionable insights with AI-powered analytics.",
        features: [
            "Real-time performance tracking of agents and workflows.",
            "Customizable dashboards for deep visibility into automation.",
            "AI-driven alerts to notify you of key business events.",
            "Ensure security, compliance, and transparency across operations."
        ],
        buttonText: "See AI Insights"
    }
    return (
        <section className='sections_container !my-0 py-10'>
            <div className="max-w-7xl mx-auto px-4 my-10 space-y-16">
                <h2 className="text-center text-4xl lg:text-5xl font-inter font-medium">
                    Features <span className="text-primary">Showcase</span>
                </h2>
                <div className='space-y-28'>
                    {/* First Feature Section */}
                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="bg-[#040404] rounded-xl p-6 order-2 md:order-1">
                            <div className='flex items-center justify-center'>
                                <Image
                                    src={AgenticShowcase}
                                    alt="Agentic Showcase"
                                    width={660}
                                    height={385}
                                    className='w-full h-auto'
                                />
                            </div>
                        </div>
                        <div className="order-1 md:order-2 flex flex-col justify-between gap-10 font-inter">
                            <h3 className="text-sm text-primary font-semibold">
                                {firstSection.title}
                            </h3>
                            <h4 className="text-2xl lg:text-3xl font-bold">
                                {firstSection.heading}
                            </h4>
                            <ul className="space-y-4">
                                {
                                    firstSection.features.map((feature, index) => (
                                        <li className="flex items-center gap-3" key={index}>
                                            <FaDiamond className='text-primary' />
                                            <span className="opacity-70 text-base font-medium font-inter">
                                                {feature}
                                            </span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <Link
                                href="#"
                            >
                                <Button
                                    className="bg-white/10 hover:bg-white/15 max-h-14 h-full max-w-[178px] w-full border border-primary text-white text-sm px-4 py-2 rounded-full transition-all hover:cursor-pointer"
                                >
                                    {firstSection.buttonText}
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Second Feature Section */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col justify-between gap-10 font-inter">
                            <h3 className="text-sm text-primary font-semibold">
                                {secondSection.title.toUpperCase()}
                            </h3>
                            <h4 className="text-2xl lg:text-3xl font-bold">
                                {secondSection.heading}
                            </h4>
                            <ul className="space-y-4">
                                {
                                    secondSection.features.map((feature, index) => (
                                        <li className="flex items-center gap-3" key={index}>
                                            <FaDiamond className='text-primary' />
                                            <span className="opacity-70 text-base font-medium font-inter">
                                                {feature}
                                            </span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <Link
                                href="#"
                            >
                                <Button
                                    className="bg-white/10 hover:bg-white/15 max-h-14 h-full max-w-[178px] w-full border border-primary text-white text-sm px-4 py-2 rounded-full transition-all hover:cursor-pointer"
                                >
                                    {secondSection.buttonText}
                                </Button>
                            </Link>
                        </div>
                        <div className="bg-[#040404] rounded-xl p-6">
                            <div className='flex items-center justify-center'>
                                <Image
                                    src={AgenticShowcase}
                                    alt="Agentic Showcase"
                                    width={660}
                                    height={385}
                                    className='w-full h-auto'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Third Feature Section */}
                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="bg-[#040404] rounded-xl p-6">
                            <div className='flex items-center justify-center'>
                                <Image
                                    src={AgenticShowcase}
                                    alt="Agentic Showcase"
                                    width={660}
                                    height={385}
                                    className='w-full h-auto'
                                />
                            </div>
                        </div>

                        <div className="order-1 md:order-2 flex flex-col justify-between gap-10 font-inter">
                            <h3 className="text-sm text-primary font-semibold">
                                {thirdSection.title.toUpperCase()}
                            </h3>
                            <h4 className="text-2xl lg:text-3xl font-bold">
                                {thirdSection.heading}
                            </h4>
                            <ul className="space-y-4">
                                {
                                    thirdSection.features.map((feature, index) => (
                                        <li className="flex items-center gap-3" key={index}>
                                            <FaDiamond className='text-primary' />
                                            <span className="opacity-70 text-base font-medium font-inter">
                                                {feature}
                                            </span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <Link
                                href="#"
                            >
                                <Button
                                    className="bg-white/10 hover:bg-white/15 max-h-14 h-full max-w-[178px] w-full border border-primary text-white text-sm px-4 py-2 rounded-full transition-all hover:cursor-pointer"
                                >
                                    {thirdSection.buttonText}
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <div className='h-1 w-[78.9vw] bg-[#F5F5F533]/20 mx-auto mt-16' />
        </section>
    )
}

export default FeaturesShowcase;