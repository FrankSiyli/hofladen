"use client";

import CookieConsent from "./CookieConsent";
import ResponsiveGallery from "./components/ResponsiveGallery/ResponsiveGallery";
import Text from "./components/Text/Text";

const imageUrls = [
  "/images/landingPage/11.png",
  "/images/landingPage/12.png",
  "/images/landingPage/13.png",
  "/images/landingPage/14.png",
  "/images/landingPage/15.png",
  "/images/landingPage/16.png",
  "/images/landingPage/18.png",
  "/images/landingPage/17.png",
  "/images/landingPage/19.png",
  "/images/landingPage/110.png",
  "/images/landingPage/111.png",
  "/images/landingPage/112.png",
  "/images/landingPage/113.png",
];


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-2 ">
      <CookieConsent />
      <div className="mt-40">
        <Text textValue="Herzlich willkommen im Hofwiesen-Café. Ihrem idyllischen Rückzugsort inmitten der wunderschönen ländlichen Umgebung. " />
      </div>
      <ResponsiveGallery images={imageUrls} />
        <Text textValue="Im Hofwiesen-Café legen wir großen Wert auf Qualität und Frische. Unsere vielfältige Auswahl an Kaffeespezialitäten, von klassischem Espresso bis hin zu kreativen Kaffeekreationen, lässt keine Wünsche offen." />
        <Text textValue="Begleiten Sie Ihren Kaffee mit einem Stück unserer liebevoll zubereiteten Kuchen oder Torten, die alle nach traditionellen Rezepten und mit regionalen Zutaten gebacken werden. Ob fruchtig, schokoladig oder nussig - bei uns finden Sie für jeden Geschmack das Passende." />
        <Text textValue="Lassen Sie sich von unserem Angebot inspirieren und gönnen Sie sich eine genussvolle Pause." />
        <Text textValue="Darüber hinaus bieten wir stets auch vegane 🌱 und glutenfreie 🌾 Optionen an." />
        
    </main>
  );
}
