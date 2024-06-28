"use client";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Link from "next/link";
import ResponsiveGallery from "@/app/components/ResponsiveGallery/ResponsiveGallery";
import Footer from "@/app/components/Footer/Footer";

const imageUrls = ["/veranstaltungen/5.png"];

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
