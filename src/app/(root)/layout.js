import React from 'react'

export const metadata = {
    title: "SAPIEN7 - AI Agents That Work for You",
    description: "Automate your entire business with Sapien7, a powerful multi-agent platform. Deploy intelligent agents, integrate with leading platforms, and streamline operations effortlessly.",
};


const RootLayout = ({ children }) => {
    return (
        <main style={{ backgroundImage: `url('/images/gradient.png')` }} className="bg-cover bg-no-repeat bg-center min-h-dvw max-h-auto w-full z-0 bg-[#141219] text-white">
            {children}
        </main>
    )
}

export default RootLayout;