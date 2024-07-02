import { activeComponentState } from "@/app/recoil/atoms/activeComponentState";
import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";

const Logo = () => {
  const [, setActiveComponent] = useRecoilState(activeComponentState);

  const handleLogoClick = () => {
    setActiveComponent("clickMenuResult");
  };

  return (
    <Image
      className="w-auto md:h-24 h-16 z-30"
      src="/logo.png"
      alt="logo"
      quality={100}
      priority
      width={200}
      height={1}
      onClick={handleLogoClick}
    />
  );
};

export default Logo;
