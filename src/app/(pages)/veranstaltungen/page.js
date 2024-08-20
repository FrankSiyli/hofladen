"use client";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Link from "next/link";
import Text from "@/app/components/Text/Text";


const Page = () => {
  return (
    <div className="min-h-screen w-screen mt-48 sm:mt-20 flex flex-col text-center itmes-center justify-center">
      <Link href="/">
        <ArrowLeftSvg />
      </Link>
        <Text 
        textValue={"2024"}
        className="mx-auto  bg-appGrey text-xl text-appBlue"></Text>
      <div className="flex flex-col sm:flex-row items-center gap-1 mt-10 mb-40 mx-auto z-10">
      <img className="max-h-[480px] h-auto object-contain px-5" src="/images/veranstaltungen/event_1.png" alt="flyer" />
      <img className="max-w-[380px] sm:max-w-[750px] h-auto object-contain px-5"  src="/images/veranstaltungen/event_11.png" alt="flyer" />
    </div>
    </div>
  );
};

export default Page;
