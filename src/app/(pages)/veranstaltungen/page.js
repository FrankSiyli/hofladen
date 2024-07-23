"use client";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Link from "next/link";

const imageUrls = ["/images/event_1.png"];

const Page = () => {
  return (
    <div className="min-h-screen w-screen flex itmes-center justify-center">
      <Link href="/">
        <ArrowLeftSvg />
      </Link>
      <img className="h-3xl w-auto p-2 my-40 z-10 shadow" src="/images/event_1.png" alt="flyer" />
     
    </div>
  );
};

export default Page;
