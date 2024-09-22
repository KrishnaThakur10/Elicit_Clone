import React from 'react'
import videobg from '../assets/videobg.mp4'

function Backvd() {
  return (
    <div className='main '>
      <video autoPlay muted loop className=' '>
        <source src={videobg}/>
      </video>
    </div>
    
  )
}

export default Backvd