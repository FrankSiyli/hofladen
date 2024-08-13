import React, { useState } from "react";

const ButtonHamburgerMenu = ({ handleClick, secondProp }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onClick={handleClick}
      className="fixed flex flex-col items-center justify-center z-30 right-5 top-5 sm:right-10 rounded p-2 cursor-pointer transform transition-transform duration-300"
      style={{
        backgroundImage: `url('/images/cafe/37.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: isHovered ? '5px 5px 7px #0a11205f' : '3px 3px 5px #0a11205f',
        translate: isHovered ? '-1px -1px ' : '',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-8 border rounded border-white transform transition-all duration-1000 ${
          secondProp ? "rotate-45 translate-y-2.5 opacity-0" : ""
        }`}
      ></div>

      <div
        className={`text-white m-1 backdrop-blur backdropSafari text-xs transform transition-all duration-700 ${
          secondProp ? "" : ""
        }`}
      >MENU</div>

      <div
        className={`w-8 border rounded border-white transform transition-all duration-1000 ${
          secondProp ? "-rotate-45 -translate-y-2.5 opacity-0" : ""
        }`}
      ></div>
    </span>
  );
};

export default ButtonHamburgerMenu;
