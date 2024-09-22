import React from "react";
import hand from "../assets/hand.png"

function Testimonials2() {
  return (
    <div className="px-8">
      <div className="flex flex-col  m-auto lg:px-64  text-[#03045E] sm:px-10 items-center mt-6 lg:mt-3 ">
        <div className="w-fit tracking-widest rounded-full text-[#03045E] text-[1rem] font-[500]  uppercase bg-white  shadow-lg px-4 py-1">
          Features
        </div>
        <h4 className="text-3xl sm:text-4xl  lg:text-5xl px-4 lg:px-28 mt-10  tracking-wide text-center m-auto font-semibold">
          Tons of features to speed up your research{" "}
        </h4>
      </div>
      <div className=" grid lg:grid-cols-2 gap-7  lg:px-12  mt-16 ">
        <div className="group px-10 py-10 border rounded-lg bg-[#f8f8f8] border-[#e6e4e1] relative transition-all duration-500 hover:scale-105   shadow-xl ">
             <div className=" absolute bg-[#03045E] pl-3  rounded-full right-8 top-14 transition-all duration-500 group-hover:-translate-x-6 group-hover:translate-y-6 ">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffff  " viewBox="0 0 256 256"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"></path></svg>
                <p className="text-[0.9rem] ml-3 text-white">Haraway_2001.pdf</p>
                <div className="h-10 w-10 relative">
                <img src={hand} className=" absolute -bottom-6 -left-2"  />
              </div>
              </div>
             </div>
            <div className=" px-20 py-8 border-[3px] rounded-lg border-dashed bg-[#caf0f88f] border-gray-200 group-hover:border-[#03045E] transition ease-linear duration-500 delay-75 ">
              <div className=" h-16 w-16 bg-[#90e1efa2] rounded-full m-auto text-center px-4 py-4   ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#0077B6"
                  viewBox="0 0 256 256"
                >
                  <path d="M248,128a87.34,87.34,0,0,1-17.6,52.81,8,8,0,1,1-12.8-9.62A71.34,71.34,0,0,0,232,128a72,72,0,0,0-144,0,8,8,0,0,1-16,0,88,88,0,0,1,3.29-23.88C74.2,104,73.1,104,72,104a48,48,0,0,0,0,96H96a8,8,0,0,1,0,16H72A64,64,0,1,1,81.29,88.68,88,88,0,0,1,248,128Zm-90.34-5.66a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L144,147.31V208a8,8,0,0,0,16,0V147.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z"></path>
                </svg>
              </div>
              <div className="text-[#03045E] text-[1.1rem] text-center mt-3">
                Drag and drop PDFs here
              </div>
              <div className="text-[#00B4D8] text-[1.1rem] text-center mt-1">
                or click to browse
              </div>
            </div>
            <div className="flex  justify-between mt-4"> 
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#0077B6" viewBox="0 0 256 256"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"></path></svg>
              <p className="text-[#0077B6] text-[1rem] ml-3 ">McSweeney_2009.pdf</p>
              </div>
              <div>
               <svg width="25" height="25" viewBox="0 0 24 24" fill="#023d8a85" xmlns="http://www.w3.org/2000/ svg">
                <path d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z" fill="#023d8a85"></path>
                </svg>
              </div>
            </div>
            <div className="flex  justify-between mt-3"> 
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#0077B6" viewBox="0 0 256 256"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"></path></svg>
              <p className="text-[#0077B6] text-[1rem] ml-3 ">Khattab_2023.pdf</p>
              </div>
              <div>
               <svg width="25" height="25" viewBox="0 0 24 24" fill="#023d8a85" xmlns="http://www.w3.org/2000/ svg">
                <path d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z" fill="#023d8a85"></path>
                </svg>
              </div>
            </div>
            <h2 className="text-[#023E8A] font-[600] text-[1.5rem] mt-5">Upload your own PDFs</h2>
        </div>





        <div className=" pl-10 pt-10 border rounded-lg border-[#e6e4e1] relative transition-all duration-500 hover:scale-105 bg-[#f8f8f8]  shadow-xl ">
           <h3 className=" 1.1  text-[#023E8A] font-[600] text-[1.5rem]">Orient with a quick summary</h3>
           <div className=" 1.2 border rounded-tl-xl border-[#e6e4e1] bg-white  shadow-xl mt-6">
              <div className="1.2.1  flex py-4 px-6  ">
                 <div className="h-10 w-10 bg-[#90e1efa2] rounded-full m-auto text-center px-2 py-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077B6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875V15.875Z" fill="#0077B6"></path>
                  </svg>
                 </div>
                 <div className="text-[#023E8A] font-[500] text-[1.3rem] ml-5 tracking-tight">
                  How do you improve resting heart rate?
                 </div>
              </div>
              <div className="1.2.2 ">
                  <p className="text-[1.1rem] font-[500] text-[#023E8A] mt-1 ml-8">Summary of top 8 papers</p>
                  <div className="text-[1.1rem] font-[400] ml-8 mt-3 leading-7 text-[#0077B6]">Resting heart rate is an important indicator of cardiovascular health and risk. Several studies have found that lowering resting heart rate can have benefits for heart health and longevity ( <span className="text-[#023E8A] font-[500]">Husmann 2011</span>). Exercise training is one way to achieve a lower resting heart rate. <span className="text-[#023E8A] font-[500]">Choe 2015 </span> found that certain video processing</div>
              </div>
           </div>
        </div>



        <div className=" pl-10 pt-10 border rounded-lg border-[#e6e4e1] relative transition-all duration-500 hover:scale-105 bg-[#f8f8f8]  shadow-xl ">
           <h3 className=" 1.1  text-[#023E8A] font-[500] text-[1.5rem]">View sources for every answer </h3>
           <div className=" 1.2 border rounded-tl-2xl border-[#e6e4e1] bg-[#f8f8f8]  shadow-xl mt-5">
              <div className="1.2.1  flex py-4 pl-6 pr-4 border-b border-[#e6e4e1] items-center ">
                  <p className="uppercase text-[1rem] font-semibold tracking-wide text-[#023d8abd]">Source Quotes</p>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#3341553d" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z" fill="#3341553d"></path>
                    </svg>
                  </div>
                  <p className="text-[0.8rem]"> 1 <span className="uppercase font-semibold text-[#44526887] text-sm"> of </span> 2</p>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#3341553d" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1722 12L8.22217 7.04999L9.63617 5.63599L16.0002 12L9.63617 18.364L8.22217 16.95L13.1722 12Z" fill="#3341553d"></path>
                   </svg>
                  </div>
                  <div className=" pl-16 flex">
                    <div className="px-2 py-1 flex items-center border border-[#e6e4e1] rounded-lg text-[#023d8aca]">
                      <div className="text-sm">
                        Open paper
                      </div>
                      <div className="">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414V9.414Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                    <div className=" ml-3">
                      <svg width="23" height="23" viewBox="0 0 24 24" fill="#023d8a85" xmlns="http://www.w3.org/2000/ svg">
                      <path d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z" fill="#023d8a85"></path>
                     </svg>
                    </div>
                  </div>
              </div>
              <div className="1.2.2 bg-white pr-5 ">
                  <div className="text-[1.1rem] font-[400] ml-8 pt-5 leading-7 text-[#0077B6]">Resting heart rate is an important indicator of cardiovascular health and risk. Several studies have found that lowering resting heart rate can have benefits for heart health and longevity ( <span className="text-[#023E8A] font-[500]">Husmann 2011</span>). Exercise training is one way to achieve a lower resting heart rate. <span className="text-[#023E8A] font-[500]">Choe 2015 </span> found that certain video processing</div>
              </div>
           </div>
        </div>





        <div className=" pt-10 px-10  border rounded-lg border-[#e6e4e1] relative transition-all duration-500 hover:scale-105 bg-[#f8f8f8]  shadow-xl ">
           <h3 className=" 1.1  text-[#023E8A] font-[500] text-[1.5rem]">Ask questions to papers</h3>
           <div className="border mt-5 mb-8 rounded-lg border-[#e6e4e1] px-5 py-3 bg-white  shadow-xl">
            <h4 className="text-[1.1rem] font-[500]">Ask a question</h4>
            <div className="border  rounded-lg border-[#e6e4e1] text-[#023E8A] flex p-3">
              <p>What was the effect size in the first trial arm?</p>
              <div className="h-10 w-10 px-2 py-2 bg-[#e6e4e1] rounded-md">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M16.172 10.9999L10.808 5.63592L12.222 4.22192L20 11.9999L12.222 19.7779L10.808 18.3639L16.172 12.9999H4V10.9999H16.172Z" fill="white"></path>
                 </svg>
              </div>
            </div>
           </div>
           <div className="1.2.2 pr-5 ">
                  <div className="text-[1.1rem] font-[400] ml-8 pt-2 leading-7 text-[#0077B6]">Resting heart rate is an important indicator of cardiovascular health and risk. Several studies have found that lowering resting heart rate can have benefits for heart  </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials2;
