"use client";
import React, { useEffect, useRef, useState, forwardRef } from "react";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";
import ButtonHamburgerMenu from "./buttons/ButtonHamburgerMenu";
import { useRecoilState } from "recoil";
import Footer from "./Footer";

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
      <div className="fixed z-10 top-0 left-0 w-full h-32 flex justify-center items-center bg-appGrey border-b border-black/20 shadow opacity-95">
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
      <Footer/>
    </>
  );
};

export default Header;
