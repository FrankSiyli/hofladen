"use client";

import Header from "./components/Header";
import ResponsiveGallery from "./components/ResponsiveGallery";

const imageUrls = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/5.png",
  "/6.png",
  "/7.png",
  "/8.png",
  "/9.png",
  "/10.png",
  "/11.png",
  "/12.png",
  "/13.png",
  "/14.png",
  "/15.png",
  "/16.png",
  "/17.png",
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 ">
      <Header />
      <ResponsiveGallery images={imageUrls} />
    </main>
  );
}
