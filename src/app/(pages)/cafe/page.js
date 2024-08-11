"use client";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Link from "next/link";
import ResponsiveGallery from "@/app/components/ResponsiveGallery/ResponsiveGallery";
import Text from "@/app/components/Text/Text";

const imageUrls = [
  "/images/cafe/31.png",
  "/images/cafe/32.png",
  "/images/cafe/33.png",
  "/images/cafe/34.png",
  "/images/cafe/36.png",
  "/images/cafe/37.png",
  "/images/cafe/38.png",
  "/images/cafe/39.png",
  "/images/cafe/310.png",
  "/images/cafe/311.png",
  
];

const Page = () => {
  return (
    <div className="min-h-screen">
      <Link href="/">
        <ArrowLeftSvg />
      </Link>
      <div className="mt-40">
      <Text
        textValue="Genießen Sie bei uns eine Auszeit vom Alltag und lassen Sie sich von der gemütlichen Atmosphäre und unserem freundlichen Service verzaubern. Egal ob Sie auf einen duftenden Kaffee, ein Stück hausgemachten Kuchen oder eine unserer leckeren Torten vorbeischauen wir freuen uns darauf, Sie zu verwöhnen."
      />
     
        <ResponsiveGallery images={imageUrls} />
        <Text
        textValue="Machen Sie es sich auf unserer sonnigen Terrasse bequem oder genießen Sie die Gemütlichkeit unseres Innenbereichs. Wir freuen uns auf Ihren Besuch."
      />
      </div>
    </div>
  );
};

export default Page;
