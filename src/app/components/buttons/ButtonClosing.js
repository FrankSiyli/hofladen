import React from "react";

const ButtonClosing = ({ handleClick, secondProp }) => {
  return (
    <span
      onClick={handleClick}
      className="absolute top-7 right-5 cursor-pointer transform transition-all duration-300"
    >
     
    </span>
  );
};

export default ButtonClosing;
