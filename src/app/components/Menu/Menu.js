"use client";
import React, { forwardRef, useEffect, useState } from "react";
import menuItemsArray from "./menuItemsArray/menuItemsArray";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { showMenuState } from "@/app/recoil/atoms/showMenuState";

const Menu = forwardRef(({ handleMenuClick }, ref) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  const [showMenu, setShowMenu] = useRecoilState(showMenuState);

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
          className={`fixed top-0 right-1 bottom-0 w-48 p-5 bg-appGrey border-l-1 border-b-1 border-t-1 border-appBlue rounded shadow-2xl flex flex-col justify-center items-center z-20 transform transition-transform ${
            showMenu ? "" : "translate-x-80"
          }  duration-300`}
        >
          <img
            className="absolute top-0 left-0 h-1/3 sm:h-auto opacity-70"
            width={300}
            height={1}
            src="/images/menu_1.png"
            alt="brote"
          />
          <div className="relative w-48 z-10">
            <span className="flex flex-col">
            {menuItemsArray.map((menuItem, menuItemIndex) => (
  <Link
    onClick={() => setShowMenu(false)}
    href={menuItem.link}
    key={menuItemIndex}
    className="-ml-8 p-2 text-xl text-center rounded m-1 text-appGrey hover:shadow hover:-translate-x-0.5 hover:-translate-y-0.5 border border-appGrey cursor-pointer transform transition-transform duration-300"
    style={{
      backgroundImage: `url('/images/cafe/${
        menuItemIndex === 0 ? '37.png' : 
        menuItemIndex === 1 ? '36.png' : 
        menuItemIndex === 2 ? '38.png' : 'default.png'
      }')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      
    }}
  >
                  <p className="backdrop-blur rounded p-1">{menuItem.title}</p>
                </Link>
              ))}
            </span>
          </div>
          <img
            className="absolute bottom-0 left-0 opacity-70 h-1/3 sm:h-auto"
            width={300}
            height={1}
            src="/images/menu_2.png"
            alt="torte"
          />
        </div>
      ) : null}
    </div>
  );
});

Menu.displayName = "Menu";

export default Menu;
