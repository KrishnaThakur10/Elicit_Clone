import React from 'react'

function Testimonials3() {
  return (
       <div className='h-fit w-screen mt-28 mb-28 bg-[#023E8A]'>
        <div className='1 py-24  sm:px-10 lg:flex justify-start  lg:pr-8 '>
            <div className='lg:pr-8 lg:w-1/2'>
              <h2 className='lg:text-[4.5rem] lg:mx-10   mx-5 text-5xl font-semibold text-white font-sans lg:leading-[4.2rem] '>Research for the machine intelligence age</h2>
              <p className='text-base text-[#0095c79b] mt-14 lg:block  hidden lg:mx-10 '>1. In a survey of users, 10% of respondents said that Elicit saves them 5 or more hours each week.</p>
              <p className='text-base text-[#0095c79b] mt-6 lg:mx-10 lg:block  hidden'>2. In pilot projects, we were able to save research groups 50% in costs and more than 50% in time by automating data extraction work they previously did manually.</p>
            </div >
              <div className='ml-4'>
                <div className='text-[#90e1efa2] flex items-center mt-6 mr-10 '>
                  <div className='text-8xl font-light   '>5</div>
                  <div className='font-light text-[1.2rem] ml-5 '>Elicit's users save up to <strong className='font-bold text-xl'> 5 hours </strong> per week1</div>             
                </div>
                <div className='text-[#90e1efa2] flex items-center mt-8 mr-10 '>
                  <div className='text-8xl font-light   '>125</div>
                  <div className='font-light text-[1.2rem] ml-5  '>Search across <strong className='font-bold text-xl'>125 million <br /> </strong> academic papers using natural language</div>             
                </div>
                <div className='text-[#90e1efa2] flex items-center mt-8 mr-10 '>
                  <div className='text-8xl font-light   '>50%</div>
                  <div className='font-light text-[1.2rem] ml-5  '>Extract details from papers at <strong className='font-bold text-xl'>50% <br /> </strong> of the time and cost of doing it manually</div>             
                </div>
              </div>
        </div>
      </div>

  )
}

export default Testimonials3