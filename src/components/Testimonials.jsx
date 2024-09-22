import React from "react";
import { testimonials1 } from "../constant";
import { testimonials2 } from "../constant";

function Testimonials() {
  return (
    <div id="Testimonials" className=" new lg:mt-96 pb-44 pt-32 flex flex-col m-auto items-center text-[#03045E] lg:px-28 justify-center ">
      <div className="w-fit rounded-full text-[#03045E] text-[1rem] font-[500] tracking-widest uppercase bg-white  shadow-lg px-4 py-1">
        Synthesis
      </div>
      <p className="text-3xl sm:text-4xl font-semibold lg:text-5xl  flex flex-col lg:px-64 sm:px-20 px-10 text-center  mt-12 ">
        Don't just take our word for it
      </p>
      <div className="mt-20 text-left">
        <div className="lg:flex lg:justify-between   ">
          {testimonials1.map((testimonials , index)=>(
             <div key={index} className="flex flex-col items-start lg:justify-between sm:px-10 px-10 lg:px-5 lg:w-1/3  mb-16 ">
              <p  className="text-[1.2rem] tracking-wide lg:mb-20 mb-5">{testimonials.text}</p>
              <div  className="flex justify-start items-center  ">
                <img src={testimonials.image} className="rounded-full h-14 w-14 mr-6 " />
                <div>
                  <h4  className="text-xl font-[500]">{testimonials.user}</h4>
                  <p className="text-[0.9rem] mt-2">{testimonials.details}</p>
                </div>
              </div>
             </div>
        ))}
        </div>
        <div className="hidden">
          {testimonials2.map((testimonials , index)=>(
             <div key={index}>
              <p>{testimonials.text}</p>
              <div>
                <img src={testimonials.image} alt="" />
                <div>
                  <h4>{testimonials.user}</h4>
                  <p>{testimonials.details}</p>
                </div>
              </div>
             </div>
        ))}
        </div>
      </div>


      <div className="flex justify-between items-center w-8 ">
          <div className="h-3 w-3 bg-neutral-500 hover:bg-neutral-400 rounded-full cursor-pointer"></div>
          <div className="h-3 w-3 bg-neutral-500 hover:bg-neutral-400 rounded-full cursor-pointer"></div>
      </div>
    </div>
  );
}

export default Testimonials;
