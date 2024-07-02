"use client";

import CookieConsent from "./CookieConsent";
import ResponsiveGallery from "./components/ResponsiveGallery/ResponsiveGallery";
import Text from "./components/Text/Text";

const imageUrls = [
  "/landingPage/17.png",
  "/landingPage/3.png",
  "/landingPage/13.png",
  "/landingPage/7.png",
  "/landingPage/6.png",
  "/landingPage/10.png",
  "/landingPage/19.png",
  "/landingPage/2.png",
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
        <div className="border w-full opacity-50 m-1 max-w-[500px] mx-auto"></div>
        <Text textValue="Begleiten Sie Ihren Kaffee mit einem Stück unserer liebevoll zubereiteten Kuchen oder Torten, die alle nach traditionellen Rezepten und mit regionalen Zutaten gebacken werden. Ob fruchtig, schokoladig oder nussig - bei uns finden Sie für jeden Geschmack das Passende." />
        <div className="border w-full opacity-50 m-1 max-w-[500px] mx-auto"></div>
        <Text textValue="Lassen Sie sich von unserem Angebot inspirieren und gönnen Sie sich eine genussvolle Pause im Hofwiesen-Café." />
    </main>
  );
}
