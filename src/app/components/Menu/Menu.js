import ArrowRightSvg from "@/app/svgCollection/ArrowRightSvg";
import React, { forwardRef, useEffect, useState } from "react";
import menuItemsArray from "./menuItemsArray/menuItemsArray";
import ClosingAtom from "./components/ClosingAtom";
import Link from "next/link";

const Menu = forwardRef(({ showMenu, handleMenuClick }, ref) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <div
      className={`${
        showMenu
          ? "fixed top-0 right-0 w-full h-full shadow-2xl z-20 bg-neutral-800/30"
          : ""
      }`}
    >
      {loaded ? (
        <div
          ref={ref}
          className={`fixed top-1 right-1 bottom-1 w-64 p-5 bg-appGrey border-2 border-appBlue/50 rounded flex flex-col justify-center z-20 transform transition-transform ${
            showMenu ? "" : "translate-x-80"
          }  bg-appGrey duration-100`}
        >
          <span
            onClick={handleMenuClick}
            className="absolute top-5 right-8 cursor-pointer"
          >
            <ClosingAtom />
          </span>

          <div className="fixed top-10 md:top-28 left-0 w-full  p-2  text-appText">
            <p className="text-appBlue ">Anschrift:</p>
            <p>Zu den Hofwiesen 3</p>
            <p>19075 Warsow</p>
            <p className="text-appBlue mt-3">Öffnungszeiten:</p>
            <p>Sa + So</p>
            <p>13-18 Uhr</p>
            <p className="text-appBlue mt-3">Tel.:</p>
            <p>0173/8284585</p>
            <p className="text-appBlue mt-3">Email:</p>
            <a className="underline" href="hofwiesen-cafe@gmx.de">hofwiesen-cafe@gmx.de</a>
          <span className="mt-20 flex flex-col w-full">
            {menuItemsArray.map((menuItem, menuItemIndex) => (
              <Link
              href={menuItem.link}
                key={menuItemIndex}
                className="flex justify-between items-center my-1 border-b border-t text-appBlue cursor-pointer hover:scale-105 shadow transform transition-transform duration-100"
              >
                <p className="m-2">{menuItem.title}</p>
                <span className="scale-75">
                  <ArrowRightSvg />
                </span>
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
