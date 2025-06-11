"use client";

import { motion } from "motion/react";
import Sapien7Logo from '@/../public/images/sapien7-icon.svg'
import WhatsAppIcon from '@/../public/images/whatsapp_icon.png'
import GenericIcon from '@/../public/images/generic.png'
import GmailIcon from '@/../public/images/gmail.png'
import TelegramIcon from '@/../public/images/telegram.png'
import ToolsIntegration from '@/../public/images/tools_integeration.png'
import Image from 'next/image'

const Container = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 10,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.3,
                delay: 1.2,
            }}
            className="relative z-10 my-10 rounded-3xl border border-neutral-800 bg-neutral-900 p-4 shadow-md 
            min-h-[680px] h-full"
        >
            <section className="relative bg-[#040404] p-8 text-center overflow-hidden w-full rounded-xl border border-[#040404] max-h-max">
                <div className="flex flex-col items-center justify-center gap-8 min-w-[660px] w-full pt-16 mx-auto text-center px-40">
                    {/* Heading */}
                    <h2 className="text-4xl lg:text-5xl leading-14 font-inter font-semibold text-white">
                        Integrations {""}
                        <span className="text-purple-400">With Your</span> {""}
                        Favorite {""}
                        <span className="text-purple-400">Tools.</span>
                    </h2>
                    <p className="text-base lg:text-lg font-medium text-white/60">
                        No matter which platforms or tools you rely on, Sapien7 seamlessly integrates with your ecosystem. 🚀
                    </p>
                </div>

                {/* Diagram */}

                <div className="flex items-center justify-center rounded-2xl shadow-2xl">
                    <Image 
                    src={ToolsIntegration}
                    alt="Tools Integeration"
                    height={425}
                    width={1105}
                    className="w-full h-auto rounded-md"
                    />
                </div>

            </section>
        </motion.div>
    )
}

export default Container