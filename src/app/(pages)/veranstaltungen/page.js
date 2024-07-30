"use client";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Link from "next/link";


const Page = () => {
  return (
    <div className="min-h-screen w-screen flex itmes-center justify-center">
      <Link href="/">
        <ArrowLeftSvg />
      </Link>
      <img className="h-[500px] sm:h-[800px] w-auto p-2 my-40 z-10" src="/images/veranstaltungen/event_1.png" alt="flyer" />
    </div>
  );
};

export default Page;
