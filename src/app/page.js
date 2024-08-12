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
      <div className="relative mb-20 rounded text-center max-w-xs p-3 mx-auto bg-appGrey/60 backdrop-blur-sm border border-appBlue/50 text-appBlue">
        <span className="absolute sm:-top-5 -top-7 sm:-left-14 -left-5 bg-appGrey border border-appRed rounded  p-1 shadow">Veranstaltung</span>
        <p className="">Am 18.8. Frühschoppen mit dem Shanty-Chor</p>
        <p className="text-xs mt-3">Alle Infos im Menu unter Veranstaltungen</p>
      </div>
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
