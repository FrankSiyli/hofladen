import React from "react";

const ButtonHamburgerMenu = ({ handleClick, secondProp }) => {
  return (
    <span
      onClick={handleClick}
      className="fixed right-5 top-5  md:right-10 md:top-10 shadow rounded p-3 hover:shadow-md cursor-pointer transform transition-transform duration-300"
    >
      <div
        className={`w-8 border border-appBlue transform transition-all duration-1000 ${
          secondProp ? "rotate-45 translate-y-2.5 opacity-0" : ""
        }`}
      ></div>

      <div
        className={`w-6 my-2 ml-2 border border-appBlue transform transition-all duration-700 ${
          secondProp ? "rotate-45 w-40" : ""
        }`}
      ></div>

      <div
        className={`w-8 border border-appBlue transform transition-all duration-1000 ${
          secondProp ? "-rotate-45 -translate-y-2.5 opacity-0" : ""
        }`}
      ></div>

      <style jsx>{`
        span:hover div {
          border-color: var(--appOrange);
        }
      `}</style>
    </span>
  );
};

export default ButtonHamburgerMenu;
