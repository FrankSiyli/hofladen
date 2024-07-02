"use client";
import React, { useEffect, useRef, useState, forwardRef } from "react";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import ButtonHamburgerMenu from "../buttons/ButtonHamburgerMenu";
import { useRecoilState } from "recoil";
import { showMenuState } from "@/app/recoil/atoms/showMenuState";

const Header = () => {
  const [showMenu, setShowMenu] = useRecoilState(showMenuState);
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
      <div className="headerBackground fixed z-20 top-0 left-0 w-screen md:h-24 h-16 bg-appGrey/90 flex justify-center items-center shadow-xl ">
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
