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
          className={`fixed top-0 right-0 h-1/2 rounded w-48 bg-white/90 shadow-2xl flex flex-col justify-end items-center z-20 transform transition-transform ${
            showMenu ? "" : "translate-x-80"
          } duration-300`}
        >
          <img
            className="absolute top-0 left-0 h-1/3 h-auto opacity-70"
            width={300}
            height={1}
            src="/images/menu_1.png"
            alt="brote"
          />
          <div className="w-48 z-10">
            <span className="flex flex-col">
              {menuItemsArray.map((menuItem, menuItemIndex) => (
                <Link
                  onClick={() => setShowMenu(false)}
                  href={menuItem.link}
                  key={menuItemIndex}
                  className="relative flex items-center h-14 bg-appGrey m-1 p-1 mt-4 text-appText cursor-pointer"
                  style={{
                    boxShadow: hoveredItemIndex === menuItemIndex ? "5px 5px 7px #0a11205f" : "3px 3px 5px #0a11205f",
                    transform: hoveredItemIndex === menuItemIndex ? "translate(-1px, -1px)" : "",
                  }}
                  onMouseEnter={() => setHoveredItemIndex(menuItemIndex)}
                  onMouseLeave={() => setHoveredItemIndex(null)}
                >
                  <span className="relative bg-appGrey/90 w-full text-center p-2 rounded z-10">{menuItem.title}</span>
                  <span
                    className="absolute inset-0 z-0 bg-center bg-cover rounded"
                    style={{
                      backgroundImage: `url('/images/cafe/${
                        menuItemIndex === 0
                          ? "37.png"
                          : menuItemIndex === 1
                          ? "36.png"
                          : menuItemIndex === 2
                          ? "38.png"
                          : "bg-appBlue"
                      }')`,
                      opacity: 0.9,
                    }}
                  />
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
