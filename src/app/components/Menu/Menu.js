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
          className={`fixed top-0 right-0 h-1/2 w-48 p-5 bg-appGrey shadow-2xl flex flex-col justify-end items-center z-20 transform transition-transform ${
            showMenu ? "" : "translate-x-80"
          }  duration-300`}
        >
          <img
            className="absolute top-0 left-0 h-1/3 h-auto"
            width={300}
            height={1}
            src="/images/menu_1.png"
            alt="brote"
          />
          <div className="absolute left-0 -bottom-7 w-48 z-10">
            <span className="flex flex-col">
              {menuItemsArray.map((menuItem, menuItemIndex) => (
                <Link
                  onClick={() => setShowMenu(false)}
                  href={menuItem.link}
                  key={menuItemIndex}
                  className="relative flex justify-center items-center -ml-6 p-2 rounded m-3 text-appGrey shadow hover:shadow-xl border border-appGrey/50 cursor-pointer transform transition-transform duration-300"
                  style={{
                    background: hoveredItemIndex === menuItemIndex
                      ? `url('/images/cafe/${
                          menuItemIndex === 0
                            ? "37.png"
                            : menuItemIndex === 1
                            ? "36.png"
                            : menuItemIndex === 2
                            ? "38.png"
                            : "bg-appBlue"
                        }') center/cover no-repeat`
                      : `linear-gradient(to bottom, #0a4dbf 100%, transparent 15%),
                         url('/images/cafe/${
                           menuItemIndex === 0
                             ? "37.png"
                             : menuItemIndex === 1
                             ? "36.png"
                             : menuItemIndex === 2
                             ? "38.png"
                             : "bg-appBlue"
                         }') bottom/100% 15px no-repeat`,
                    transition: 'background-size 0.3s ease, background-position 0.3s ease',
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
