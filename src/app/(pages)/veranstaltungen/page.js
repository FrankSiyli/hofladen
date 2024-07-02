"use client";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Link from "next/link";
import ResponsiveGallery from "@/app/components/ResponsiveGallery/ResponsiveGallery";

const imageUrls = ["/veranstaltungen/5.png"];

const Page = () => {
  return (
    <div>
      <Link href="/">
        <ArrowLeftSvg />
      </Link>
     <ResponsiveGallery images={imageUrls} /> 
    </div>
  );
};

export default Page;
