import ArrowRightSvg from "@/app/svgCollection/ArrowRightSvg";
import React, { forwardRef, useEffect, useState } from "react";
import menuItemsArray from "./menuItemsArray/menuItemsArray";
import ClosingAtom from "./components/ClosingAtom";

const Menu = forwardRef(({ showMenu, handleMenuClick }, ref) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <div
      className={`${
        showMenu
          ? "fixed top-0 right-0 w-full h-full shadow-2xl z-10 bg-neutral-800/30"
          : ""
      }`}
    >
      {loaded ? (
        <div
          ref={ref}
          className={`fixed top-1 right-1 bottom-1 text-sm xl:text-xl w-80 p-5 bg-appGrey border border-appBlue/50 rounded flex flex-col justify-center z-20 transform transition-transform ${
            showMenu ? "" : "translate-x-80"
          }  bg-appGrey duration-100`}
        >
          <span
            onClick={handleMenuClick}
            className="absolute top-5 right-8 cursor-pointer"
          >
            <ClosingAtom />
          </span>

          <span className="fixed left-0 right-0 flex flex-col w-80">
            {menuItemsArray.map((menuItem, menuItemIndex) => (
              <div
                key={menuItemIndex}
                className="flex justify-between items-center m-1 text-appText cursor-pointer border-b"
              >
                <p className="ml-2">{menuItem.title}</p>
                <span className="scale-75">
                  <ArrowRightSvg />
                </span>
              </div>
            ))}
          </span>
          <div className="fixed bottom-1 xl:bottom-10 left-2 w-72 m-2 p-2  text-appText">
            <p className="text-appBlue text-2xl">Wo:</p>
            <p>Zu den Hofwiesen 3</p>
            <p>19075 Warsow</p>
            <br></br>
            <p className="text-appBlue text-2xl">Wann:</p>
            <p>Sa + So</p>
            <p>13-18 Uhr</p>
          </div>
        </div>
      ) : null}
    </div>
  );
});

Menu.displayName = "Menu";

export default Menu;