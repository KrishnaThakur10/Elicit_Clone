import React from "react";

function Bluebtn({ omg }) {
  return (
    <a
      href="#"
      className='cursor-pointer transition-all bg-[#023E8A] text-white text-[1rem] px-5 py-3 rounded-full
border-[#03045E]
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
  Button'
    >
      {omg}
    </a>
  );
}

export default Bluebtn;
