"use client";
import MobileSvg from "@/app/components/buttons/svgCollection/MobileSvg";
import RotateSvg from "@/app/components/buttons/svgCollection/RotateSvg";
import React, { useState, useEffect } from "react";

const TurnYourDeviceOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      setShowOverlay(windowHeight < 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {showOverlay && (
        <div className="fixed  flex flex-col items-center justify-center z-50 rounded-sm top-0 gap-5 left-0 right-0 bottom-0 bg-appGrey text-xl opacity-95 shadow-2xl">
          <p className="text-appBlue">Bitte drehe dein Handy</p>
          <div className="flex items-center m-4 gap-6 text-appText">
            <MobileSvg rotate={90} />
            <RotateSvg />
            <MobileSvg rotate={0} />
          </div>
        </div>
      )}
    </>
  );
};

export default TurnYourDeviceOverlay;
