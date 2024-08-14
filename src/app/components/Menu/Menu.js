"use client";
import React, { forwardRef, useEffect, useState } from "react";
import menuItemsArray from "./menuItemsArray/menuItemsArray";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { showMenuState } from "@/app/recoil/atoms/showMenuState";

const Menu = forwardRef(({ handleMenuClick }, ref) => {
  const [loaded, setLoaded] = useState(false);
  const [showMenu, setShowMenu] = useRecoilState(showMenuState);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={`${
        showMenu
          ? "fixed top-0 right-0 w-full h-full shadow-2xl z-30 bg-neutral-800/70"
          : ""
      }`}
    >
      {loaded ? (
        <div
          ref={ref}
          className={`fixed top-0 right-0 h-full rounded w-48 p-5 bg-appGrey/90 shadow-2xl flex flex-col justify-center items-center z-20 transform transition-transform ${
            showMenu ? "" : "translate-x-80"
          }  duration-300`}
        >
          <img
            className="absolute top-0 left-0 h-1/3 h-auto opacity-70"
            width={300}
            height={1}
            src="/images/menu_1.png"
            alt="brote"
          />
          <div className=" w-48 z-10">
            <span className="flex flex-col">
              {menuItemsArray.map((menuItem, menuItemIndex) => (
                <Link
                  onClick={() => setShowMenu(false)}
                  href={menuItem.link}
                  key={menuItemIndex}
                  className="relative flex justify-center items-center h-16 first:mt-20 -ml-3 p-2 rounded m-2 text-appBlue bg-appGrey border border-appText cursor-pointer transform transition-transform duration-300"
                  style={{
                    
                    transition: 'background-size 0.3s ease, background-position 0.3s ease',
                    boxShadow: hoveredItemIndex === menuItemIndex ? '5px 5px 7px #0a11205f' : '3px 3px 5px #0a11205f',
                    translate: hoveredItemIndex === menuItemIndex ? '-1px -1px ' : '',
                
                  }}
                  onMouseEnter={() => setHoveredItemIndex(menuItemIndex)}
                  onMouseLeave={() => setHoveredItemIndex(null)}
                >
                  <span>{menuItem.title}</span>
                </Link>
              ))}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
});

Menu.displayName = "Menu";

export default Menu;
