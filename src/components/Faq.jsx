import React from "react";

function Faq() {
  return (
    <div id="FAQ" className="px-16 py-48">
      <div className="flex items-start justify-start">
        <div className="w-96 text-left">
          <div className="w-fit tracking-widest rounded-full text-[#03045E] text-[1rem] font-[500]  uppercase bg-white  shadow-lg px-4 py-1">
            FAQ
          </div>
          <h4 className="text-3xl sm:text-3xl  lg:text-5xl text-left mt-10 text-[#03045E] tracking-wide   font-semibold">
            Common questions. Great answers.
          </h4>
          <p className="text-[1.1rem] text-[#0077B6] mt-7">
            Have more questions?{" "}
            <a href="#" className="text-[#0096C7]">
              Send us an email.
            </a>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Faq;
