"use client";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Link from "next/link";
import Text from "@/app/components/Text/Text";

const Page = () => {
  return (
    <>
      <Link href="/">
        <ArrowLeftSvg />
      </Link>
      <div className="text-xl mt-40"><Text textValue={"2024"}></Text></div>
        <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center gap-1 my-5 mx-auto z-10">
          <img
            className="max-h-[480px] h-auto object-contain px-5"
            src="/images/veranstaltungen/event_1.png"
            alt="flyer"
          />
          <img
            className="max-w-[380px] sm:max-w-[750px] h-auto object-contain px-5"
            src="/images/veranstaltungen/event_11.png"
            alt="flyer"
          />
        </div>

    </>
  );
};

export default Page;
