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
      className="w-auto h-full p-1"
      src="/logo.png"
      alt="logo"
      quality={100}
      priority
      width={400}
      height={200}
      onClick={handleLogoClick}
    />
  );
};

export default Logo;
