"use client";
import ApplicationText from '@/components/shared/ApplicationText'
import main_icon from "@/../public/images/main_icon.svg"
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const CardWrapper = ({ children }) => {
  const router = useRouter()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl my-10">
        <Button
          variant="ghost"
          className="hover:cursor-pointer mt-4 ml-2"
          onClick={() => router.back()}
          size="lg"
        >
          <ChevronLeft size={40} />
          Back
        </Button>

        <div className="text-center mb-4">
          <ApplicationText />
        </div>

        {/* ↓↓↓ Updated wrapper ↓↓↓ */}
        <div
          className="bg-[radial-gradient(98.37%_109.43%_at_50%_50%,rgba(255,255,255,0)_36.6%,rgba(255,255,255,0.2)_100%)]
    border border-white/20
    backdrop-blur-sm rounded-2xl p-10
    max-w-5xl mt-20 mx-auto relative bg-cover bg-no-repeat bg-center
  "
          style={{ backgroundImage: `url('/images/gradient.png')` }}
        >
          {/* <div
            className=" h-auto w-auto ]"

          /> */}
          <div
            className="
              absolute top-0 left-1/2
              -translate-x-1/2 -translate-y-1/2
              flex items-center justify-center
            "
          >
            <Image
              src={main_icon}
              alt="main_icon"
              width={100}
              height={100}
            />
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}

export default CardWrapper;
