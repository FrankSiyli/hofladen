"use client";
import React from "react";
import ArrowLeftSvg from "../../svgCollection/ArrowLeftSvg";
import Link from "next/link";
import ResponsiveGallery from "@/app/components/ResponsiveGallery/ResponsiveGallery";
import Footer from "@/app/components/Footer/Footer";

const imageUrls = [
  "/bestellungen/5.png",
  "/bestellungen/7.png",
  "/bestellungen/9.png",
  "/bestellungen/11.png",
  "/bestellungen/12.png",
  "/bestellungen/13.png",
  "/bestellungen/14.png",
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
