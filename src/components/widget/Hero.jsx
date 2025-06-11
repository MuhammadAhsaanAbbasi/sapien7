import React from 'react'
import { Button } from '../ui/button';
import Container from './Container';

const Hero = () => {
  return (
    <section className='w-[80vw] mx-auto my-20 space-y-16'>
      <div className='flex flex-col justify-center items-center gap-8 font-inter text-center px-24'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
          AI Agents That <span>
            Work for You
          </span>
        </h1>
        <p className='text-base md:text-lg font-normal'>
          Automate your entire business with Sapien7, a powerful multi-agent platform. Deploy intelligent agents, integrate with leading platforms, and streamline operations effortlessly.
        </p>
        <div className='flex items-center justify-center gap-4'>
          <Button
            className={"bg-primary hover:bg-primary/90 text-white px-12 py-2 h-14 max-w-[220px] w-full rounded-full text-base font-medium font-inter hover:cursor-pointer"}
          >
            Get Started
          </Button>
          <Button
            className={"bg-white/10 border-2 border-white text-white px-12 py-2 h-14 max-w-[220px] w-full rounded-full text-base font-medium font-inter hover:cursor-pointer"}
          >
            Book Demo
          </Button>
        </div>
      </div>
      <Container />
    </section>
  )
}

export default Hero;