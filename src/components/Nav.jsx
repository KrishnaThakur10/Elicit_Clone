import React, { useState } from "react";
import Logo from "./Logo";
import Bluebtn from "./Bluebtn";
import Whitebtn from "./Whitebtn";

function Nav() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 bg-[#ffffff70] backdrop-blur-lg border-b text-[#03045E] border-neutral-700/10 ">
      <div className="contaioner lg:px-6 mx-auto relative text-sm">
        <div className="flex  lg:justify-around justify-between items-center  h-20 -z-50">
          <div className="lg:flex items-center hidden flex-shrink-0 mr-0    ">
            <Logo height="25" widht="25" fill="#313848"/>
          </div>
          <ul className=" lg:flex lg:ml-10 space-x-16 text-[1rem] hidden ">
            <li className="  trasition hover:-translate-y-1 ease-in-out delay-100 duration-100 hover:scale-110">
              <a href="#Features">Features</a>
            </li>
            <li className="  trasition hover:-translate-y-1 ease-in-out delay-100 duration-100 hover:scale-110">
              {" "}
              <a href="#Testimonials ">Testimonials</a>
            </li>
            <li className="  trasition hover:-translate-y-1 ease-in-out delay-100 duration-100 hover:scale-110">
              {" "}
              <a href="#Pricing">Pricing</a>
            </li>
            <li className="  trasition hover:-translate-y-1 ease-in-out delay-100 duration-100 hover:scale-110">
              {" "}
              <a href="#FAQ">FAQ</a>
            </li>
            <li className="  trasition hover:-translate-y-1 ease-in-out delay-100 duration-100 hover:scale-110">
              {" "}
              <a href="#Careers">Careers</a>
            </li>
          </ul>
          <div className="ml-15 justify-center lg:flex space-x-5 items-center hidden ">
            <Whitebtn omg="Sign In"/>
            <Bluebtn omg="Sign Up" />
          </div>
          <div  className="lg:hidden md:flex flex-col justify-end ml-5 ">
            <label 
            htmlFor="nav_bar_icon"
            className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5"   >
            <input onClick={toggleNavbar} id="nav_bar_icon" type="checkbox" className="hidden peer" />
            <div className="w-2/3 h-1.5 bg-[#03045E] rounded-lg transition-all duration-300 origin-right      peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]" />
            <div className="w-full h-1.5 bg-[#03045E] rounded-lg transition-all duration-300 origin-center      peer-checked:rotate-90 peer-checked:translate-x-4" />
            <div className="w-2/3 h-1.5 bg-[#03045E] rounded-lg transition-all duration-300 origin-right      peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]" />
            </label>
          </div>
          <div className="lg:hidden  items-center flex-shrink-0     scale-125  -z-50  ">
                <Logo height="30" widht="30" fill="#313848" />
                 </div>

        </div>
        {mobileDrawerOpen && (             
            <div className="fixed right-0 h-screen top-0  bg-[#00122c] w-1/2  flex flex-col justify-center items-center lg:hidden ">
              <div className="realtive">
                 <div className="lg:hidden absolute top-20 items-center m-auto  left-20 scale-125  -z-20  ">
                <Logo height="25" widht="25" fill="white" />
                 </div>
              </div>   
              <ul className="right-0 mr-0 tracking-wide text-white space-y-4 text-xl">
                <li className="  trasition hover:-translate-y-1 ease-in-out delay-100 duration-100 hover:scale-110">
                 <a href="#Features">Features</a>
               </li>                
                <li className="  trasition hover:-translate-y-1 ease-in-out delay-100 duration-100 hover:scale-110">
                 <a href="#Testimonials">Testimonials</a>
               </li>                
                <li className="  trasition hover:-translate-y-1 ease-in-out delay-100 duration-100 hover:scale-110">
                 <a href="#Pricing">Pricing</a>
               </li>                
                <li className="  trasition hover:-translate-y-1 ease-in-out delay-100 duration-100 hover:scale-110">
                 <a href="#FAQ">FAQ</a>
               </li>                
                <li className="  trasition hover:-translate-y-1 ease-in-out delay-100 duration-100 hover:scale-110">
                 <a href="#Careers">Careers </a>
               </li>                
              </ul>
              <div className="text-center mt-16">

              <Bluebtn omg="Sign Up" />
              </div>
            </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
