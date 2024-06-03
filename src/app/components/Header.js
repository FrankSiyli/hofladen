"use client";
import React, { useEffect, useRef, useState, forwardRef } from "react";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";
import ButtonHamburgerMenu from "./buttons/ButtonHamburgerMenu";
import { useRecoilState } from "recoil";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (typeof window !== "undefined") {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, []);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="fixed z-10 top-0 left-0 w-full h-24 flex justify-between items-center backdrop-blur border-b border-black/20 shadow">
        <Logo />

        <ButtonHamburgerMenu
          handleClick={handleMenuClick}
          secondProp={showMenu}
        />
      </div>

      <Menu
        ref={menuRef}
        showMenu={showMenu}
        handleMenuClick={handleMenuClick}
      />
    </>
  );
};

export default Header;
