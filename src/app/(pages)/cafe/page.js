"use client";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Link from "next/link";
import ResponsiveGallery from "@/app/components/ResponsiveGallery/ResponsiveGallery";
import Footer from "@/app/components/Footer/Footer";
import Text from "@/app/components/Text/Text";

const imageUrls = [
  "/cafe/6.png",
  "/cafe/16.png",
  "/cafe/19.png",
  "/cafe/cafe_1.png",
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
