import React from "react";

const ClosingAtom = () => {
  return (
    <>
      <div className="relative flex flex-col w-10 h-10 items-center hover:scale-105 hover:rotate-3 transform transition-transform duration-100">
        <div className="absolute h-0.1 w-7 top-3.5 rotate-45 border rounded-full border-appBlue"></div>
        <div className="absolute h-0.1 w-7 top-3.5 -rotate-45 border rounded-full border-appBlue"></div>
      </div>
    </>
  );
};

export default ClosingAtom;
