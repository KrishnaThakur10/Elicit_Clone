import React from 'react'
import GreenBtn from './Bluebtn'
import Whitebtn from './Whitebtn'
import Trust from './Trust'
import Herologo from './Herologo'

function HeroSection() {
  return (
    <div className='flex flex-col  m-auto lg:px-52  text-[#03045E] sm:px-10 items-center mt-6 lg:mt-3 '>
        <h1 className='text-5xl sm:text-6xl  lg:text-[4rem]  tracking-wide text-center m-auto font-semibold  '>
          Analyze research papers at <span className='bg-gradient-to-r from-[#03045E] to-[#0096C7] bg-clip-text text-transparent ' >{" "}superhuman speed</span> 
        </h1>
        <p className='mt-10 text-[1.2rem]   lg:px-32 px-14 text-center '>
        Automate time-consuming research tasks like summarizing papers, extracting data, and synthesizing your findings.
        </p>
        <div className='mt-10 flex  space-x-10 text-center'>
          <GreenBtn omg="Sign Up"/>
          <p className='text-xl items-center mt-4'>Or</p>
          <Whitebtn omg="Learn More"/>
        </div >
        <Trust/>
        <div className='mt-10'>
          <Herologo omg="#023E8A"/>
        </div>
        


    </div>
  )
}

export default HeroSection