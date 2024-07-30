"use client";
import React, { useEffect, useRef, useState } from "react";
import Menu from "../Menu/Menu";
import ButtonHamburgerMenu from "../buttons/ButtonHamburgerMenu";
import { useRecoilState } from "recoil";
import { showMenuState } from "@/app/recoil/atoms/showMenuState";

const Header = () => {
  const [showMenu, setShowMenu] = useRecoilState(showMenuState);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [lastHideScrollY, setLastHideScrollY] = useState(0);
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
  }, [setShowMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowHeader(false);
          setLastHideScrollY(currentScrollY); 
        } else if (currentScrollY < lastScrollY && lastHideScrollY - currentScrollY > 100) {
          setShowHeader(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY, lastHideScrollY]);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div
        className={`fixed-header ${showHeader ? "transform translate-y-0" : "transform -translate-y-full"}`}
      >
        <div className="headerImage"></div>
        <img className="logo z-30 p-10" src="/images/logo.png" alt="logo" />
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
