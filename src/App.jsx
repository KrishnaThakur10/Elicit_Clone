import React from 'react'
import Backvd from './components/Backvd'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import Feature from './components/Feature'
import Testimonials from './components/Testimonials'
import Testimonials2 from './components/Testimonials2'
import Testimonials3 from './components/Testimonials3'
import Pricing from './components/Pricing'
import Faq from './components/Faq'


function App() {
  return (
    <>
      <div className='supermain  lg:h-[120vh] sm:h-[120vh] h-[120vh] w-screen z-13 absolute top-0 bottom-auto left-0'>

      </div>
       <Backvd/>
       <Nav/>
       <HeroSection/>
       <Feature/>
       <Testimonials/>
       <Testimonials2/>
       <Testimonials3/>
       <Pricing/>
       <Faq/>
    </>
    
  )
}

export default App