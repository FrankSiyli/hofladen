import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootWrapper from "./RecoilRootWrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hofwiesen-Cafe Kothendorf | Köstliche hausgemachte Torten und eine gemütliche Atmosphäre",
  description: "Herzlich willkommen im Hofwiesen-Café. Ihrem idyllischen Rückzugsort inmitten der wunderschönen ländlichen Umgebung. Im Hofwiesen-Café legen wir großen Wert auf Qualität und Frische. Unsere vielfältige Auswahl an Kaffeespezialitäten, von klassischem Espresso bis hin zu kreativen Kaffeekreationen, lässt keine Wünsche offen. Begleiten Sie Ihren Kaffee mit einem Stück unserer liebevoll zubereiteten Kuchen oder Torten, die alle nach traditionellen Rezepten und mit regionalen Zutaten gebacken werden. Ob fruchtig, schokoladig oder nussig - bei uns finden Sie für jeden Geschmack das Passende. Lassen Sie sich von unserem Angebot inspirieren und gönnen Sie sich eine genussvolle Pause im Hofwiesen-Café. #Hofladen #Schwerin #Warsow #Kaffee #Kuchen #Radausflug #Landliebe #vegan",
  icons: {
    icon: '/favicon.ico', 
  },
  image: "https://hofwiesen-cafe.de/images/7.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Hofwiesen Cafe",
          "image": metadata.image, 
          "url": "https://hofwiesen-cafe.de",
          "priceRange": "$$"
        }) }} />
      </Head>
      <body
        className={`${inter.variable} font-sans bg-[url('../../public/images/background.png')] bg-fill bg-fixed bg-center`}
      >
        
        <RecoilRootWrapper>
          <Header />
          {children}
        </RecoilRootWrapper>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-00V3L0ZYJB" />
    </html>
  );
}
