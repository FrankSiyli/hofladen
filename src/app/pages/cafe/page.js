"use client";
import React from "react";
import ArrowLeftSvg from "../../svgCollection/ArrowLeftSvg";
import Link from "next/link";
import ResponsiveGallery from "@/app/components/ResponsiveGallery/ResponsiveGallery";
import Footer from "@/app/components/Footer/Footer";

const imageUrls = [
  "/cafe/6.png",
  "/cafe/16.png",
  "/cafe/19.png",
  "/cafe/cafe_1.png",
];

const page = () => {
  return (
    <div>
      <Link href="/">
        <ArrowLeftSvg />
      </Link>
      <ResponsiveGallery images={imageUrls} />
      <Footer />
    </div>
  );
};

export default page;
