import { Toaster } from "sonner";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "SAPIEN7 - AI Agents That Work for You",
  description: "Automate your entire business with Sapien7, a powerful multi-agent platform. Deploy intelligent agents, integrate with leading platforms, and streamline operations effortlessly.",
};

const inter = Inter({ subsets: ["latin"], 
  variable: "--font-inter", 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});
const urbanist = Urbanist({ subsets: ["latin"] ,
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function MainRootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${urbanist.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
