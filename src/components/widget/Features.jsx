import { features } from '@/constants/data'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className='bg-[#141219] w-full py-10 px-4 md:px-8 relative overflow-hidden'>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0), 
                           linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                           linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px, 50px 50px, 50px 50px",
        }}
      />
      <div className='sections_container !my-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20'>
          {
            features.map((feature, index) => (
              <div key={index} className='flex flex-col justify-center items-start gap-8'>
                <div className='bg-white/10 rounded-full p-4'>
                  <Image src={feature.icon} alt={feature.title}
                    height={24} width={24} className='w-full h-auto' />
                </div>
                <h3 className="text-white text-lg font-medium">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))
          }
        </div>
      </div>        
    </section>
  )
}

export default Features