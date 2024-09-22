import React from "react";
import Side1 from "../assets/Side1.webp";

function Feature() {
  return (
    <>
      <div className=" pt-52 pb-28  " id="Features">
        <div className=" lg:flex  justify-start items-start relative  overflow-hidden">
          <div className=" ml-16 mb-10 flex  flex-col justify-center lg:pr-12 ">
            <div className=" w-fit rounded-full tracking-widest text-[#03045E] text-[1rem] font-[500]  uppercase bg-white  shadow-lg px-4 py-1">
              discovery
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-16 font-semibold text-[#023E8A]">
              Search for research papers
            </h1>
            <p className="text-[1.1rem] mt-10 text-[#0077B6]">
              Ask a research question and get back a list of relevant papers
              from our database of 125 million
            </p>
            <div className="flex mt-12 items-center space-x-6">
              <div className="h-12 w-12 bg-[#90E0EF] rounded-full text-center px-3 py-3">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="#005989"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 5V15H9V11C7.93913 11 6.92172 10.5786 6.17157 9.82843C5.42143 9.07828 5 8.06087 5 7C5 5.93913 5.42143 4.92172 6.17157 4.17157C6.92172 3.42143 7.93913 3 9 3H17V5H15V15H13V5H11ZM9 5C8.46957 5 7.96086 5.21071 7.58579 5.58579C7.21071 5.96086 7 6.46957 7 7C7 7.53043 7.21071 8.03914 7.58579 8.41421C7.96086 8.78929 8.46957 9 9 9V5ZM17 17V14.5L21 18L17 21.5V19H5V17H17Z"
                    fill="#005989"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl text-[#0077B6]">
                Get one sentence abstract summaries
              </h3>
            </div>
            <div className="flex mt-6 items-center space-x-6">
              <div className="h-12 w-12 bg-[#90E0EF] rounded-full text-center px-3 py-3">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="#005989"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 4H5V20H19V8H15V4ZM3 2.992C3 2.444 3.447 2 3.999 2H16L21 7V20.993C21.0009 21.1243 20.976 21.2545 20.9266 21.3762C20.8772 21.4979 20.8043 21.6087 20.7121 21.7022C20.6199 21.7957 20.5101 21.8701 20.3892 21.9212C20.2682 21.9723 20.1383 21.9991 20.007 22H3.993C3.73038 21.9982 3.47902 21.8931 3.29322 21.7075C3.10742 21.5219 3.00209 21.2706 3 21.008V2.992ZM13.529 14.446C12.6903 14.936 11.7021 15.1043 10.7485 14.9195C9.79488 14.7346 8.94106 14.2093 8.34623 13.4414C7.75139 12.6735 7.45614 11.7154 7.51553 10.7459C7.57492 9.77639 7.98489 8.86156 8.669 8.172C9.35745 7.48368 10.2733 7.07006 11.2449 7.00865C12.2165 6.94725 13.1771 7.24228 13.9467 7.83845C14.7163 8.43463 15.2421 9.29101 15.4255 10.2471C15.6089 11.2032 15.4374 12.1934 14.943 13.032L17.153 15.242L15.739 16.657L13.529 14.447V14.446ZM12.911 12.414C13.102 12.2295 13.2544 12.0088 13.3592 11.7648C13.464 11.5208 13.5192 11.2584 13.5215 10.9928C13.5238 10.7272 13.4732 10.4639 13.3726 10.2181C13.2721 9.9723 13.1236 9.749 12.9358 9.56121C12.748 9.37342 12.5247 9.22492 12.2789 9.12436C12.0331 9.02379 11.7698 8.97319 11.5042 8.9755C11.2386 8.97781 10.9762 9.03298 10.7322 9.1378C10.4882 9.24262 10.2675 9.39498 10.083 9.586C9.71868 9.9632 9.5171 10.4684 9.52165 10.9928C9.52621 11.5172 9.73655 12.0188 10.1074 12.3896C10.4782 12.7605 10.9798 12.9708 11.5042 12.9753C12.0286 12.9799 12.5338 12.7783 12.911 12.414V12.414Z"
                    fill="#005989"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl text-[#0077B6]">
                Select relevant papers and search for more like them
              </h3>
            </div>
            <div className="flex mt-6 items-center space-x-6">
              <div className="h-12 w-12 bg-[#90E0EF] rounded-full text-center px-3 py-3">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="#005989"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 8H20V5H4V8ZM14 19V10H10V19H14ZM16 19H20V10H16V19ZM8 19V10H4V19H8ZM3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3V3Z"
                    fill="#005989"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl text-[#0077B6]">
                Extract details from papers into an organized table
              </h3>
            </div>
          </div>
          <div className="relative cursor-pointer transition-all duration-500 hover:scale-110  h-[150vh] bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
            <div className="overflow-hidden">
              <img className=" " src={Side1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-52 pb-28">
        <div className="lg:flex lg:flex-row-reverse justify-start items-start relative  overflow-hidden">
          <div className=" lg:ml-36 ml-10 mb-10 flex  flex-col justify-center lg:pr-12">
            <div className="w-fit tracking-widest rounded-full text-[#03045E] text-[1rem] font-[500]  uppercase bg-white  shadow-lg px-4 py-1">
              Synthesis
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl  mt-16 font-semibold text-[#023E8A]">
              Find themes and concepts across many papers
            </h1>
            <p className="text-[1.1rem] mt-10 text-[#0077B6]">
              What are all of the effects of this drug? What are all of the
              datasets that have been used? Get a list of the thing you’re
              looking for, synthesized from many papers.
            </p>
          </div>
          <div className="relative cursor-pointer transition-all duration-500 hover:scale-110  h-[120vh] bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-between  w-[140vw]">
            <div className="overflow-hidden">
              <img className=" " src={Side1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
