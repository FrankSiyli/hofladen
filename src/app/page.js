"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ResponsiveGallery from "./components/ResponsiveGallery";

const imageUrls = [
  "/landingPage/17.png",
  "/landingPage/9.png",
  "/landingPage/13.png",
  "/landingPage/7.png",
  "/landingPage/6.png",
  "/landingPage/10.png",
  "/landingPage/3.png",
  "/landingPage/2.png",
  "/landingPage/hero.png",
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 ">
      <Header />
      <ResponsiveGallery images={imageUrls} />
      <Footer/>
    </main>
  );
}
