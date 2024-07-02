"use client";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Link from "next/link";
import ResponsiveGallery from "@/app/components/ResponsiveGallery/ResponsiveGallery";
import Text from "@/app/components/Text/Text";

const imageUrls = [
  "/bestellungen/5.png",
  "/bestellungen/7.png",
  "/bestellungen/9.png",
  "/bestellungen/11.png",
  "/bestellungen/12.png",
  "/bestellungen/13.png",
];

const Page = () => {
  return (
    <>
      <Link href="/">
        <ArrowLeftSvg />
      </Link>
      <div className="mt-40">
      <Text textValue="Exklusive Torten - Handgefertigt nach Ihren Wünschen" />
      <div className="border opacity-50 m-1 max-w-[500px] mx-auto"></div>
      <Text textValue="Sie suchen nach einer besonderen Torte für einen speziellen Anlass? Im Hofwiesen Café fertigen wir auf Bestellung exklusive Torten, die nicht nur optisch ein Highlight sind, sondern auch geschmacklich überzeugen." />
       <ResponsiveGallery images={imageUrls} />
       <Text textValue="Ob Geburtstag, Hochzeit, Jubiläum oder ein anderer besonderer Tag - wir gestalten Ihre Torte mit viel Liebe zum Detail und verwenden dabei nur die besten Zutaten aus der Region. Lassen Sie sich von unseren Kreationen inspirieren und sprechen Sie uns an, um Ihre Wunsch-Torte in Auftrag zu geben." />
      <div className="border opacity-50 m-1 max-w-[500px] mx-auto"></div>
      <Text textValue="Wir freuen uns darauf, Ihren besonderen Moment noch unvergesslicher zu machen." />
     
      </div></>
  );
};

export default Page;
