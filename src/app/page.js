"use client";

import CookieConsent from "./CookieConsent";
import TurnYourDeviceOverlay from "./TurnYourDeviceOverlay/TurnYourDeviceOverlay";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ResponsiveGallery from "./components/ResponsiveGallery/ResponsiveGallery";

const imageUrls = [
  "/landingPage/17.png",
  "/landingPage/3.png",
  "/landingPage/13.png",
  "/landingPage/7.png",
  "/landingPage/6.png",
  "/landingPage/10.png",
  "/landingPage/19.png",
  "/landingPage/2.png",
  "/landingPage/hero_2.png",
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 ">
      <CookieConsent/>
      <TurnYourDeviceOverlay />
      <Header />
      <ResponsiveGallery images={imageUrls} />
      <Footer />
    </main>
  );
}
