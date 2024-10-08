"use client";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Link from "next/link";
import ResponsiveGallery from "@/app/components/ResponsiveGallery/ResponsiveGallery";
import Text from "@/app/components/Text/Text";
import Head from "next/head";

const imageUrls = [
  "/images/bestellungen/21.png",
  "/images/bestellungen/22.png",
  "/images/bestellungen/23.png",
  "/images/bestellungen/24.png",
  "/images/bestellungen/25.png",
  "/images/bestellungen/26.png",
  "/images/bestellungen/27.png",
  "/images/bestellungen/28.png",
  "/images/bestellungen/29.png",
  "/images/bestellungen/210.png",
  "/images/bestellungen/211.png",
];

const Page = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="min-h-screen">
        <Link href="/">
          <ArrowLeftSvg />
        </Link>
        <div className="mt-40">
          <Text textValue="Exklusive Torten - Handgefertigt nach Ihren Wünschen" />
          <Text textValue="Sie suchen nach einer besonderen Torte für einen speziellen Anlass? Im Hofwiesen-Café fertigen wir auf Bestellung exklusive Torten, die nicht nur optisch ein Highlight sind, sondern auch geschmacklich überzeugen." />
          <ResponsiveGallery images={imageUrls} />
          <Text textValue="Ob Geburtstag, Hochzeit, Jubiläum oder ein anderer besonderer Tag - wir gestalten Ihre Torte mit viel Liebe zum Detail und verwenden dabei nur die besten Zutaten aus der Region. Lassen Sie sich von unseren Kreationen inspirieren und sprechen Sie uns an, um Ihre Wunsch-Torte in Auftrag zu geben." />
          <Text textValue="Wir freuen uns darauf, Ihren besonderen Moment noch unvergesslicher zu machen." />
        </div>
      </div>
    </>
  );
};

export default Page;
