import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootWrapper from "./RecoilRootWrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Hofwiesen-Cafe Kothendorf | Köstliche hausgemachte Torten und eine gemütliche Atmosphäre",
  description:
    "Herzlich willkommen im Hofwiesen-Café. Ihrem idyllischen Rückzugsort inmitten der wunderschönen ländlichen Umgebung. Im Hofwiesen-Café legen wir großen Wert auf Qualität und Frische. Unsere vielfältige Auswahl an Kaffeespezialitäten, von klassischem Espresso bis hin zu kreativen Kaffeekreationen, lässt keine Wünsche offen. Begleiten Sie Ihren Kaffee mit einem Stück unserer liebevoll zubereiteten Kuchen oder Torten, die alle nach traditionellen Rezepten und mit regionalen Zutaten gebacken werden. Ob fruchtig, schokoladig oder nussig - bei uns finden Sie für jeden Geschmack das Passende. Lassen Sie sich von unserem Angebot inspirieren und gönnen Sie sich eine genussvolle Pause im Hofwiesen-Café. #Hofladen #Schwerin #Warsow #Kaffee #Kuchen #Radausflug #Landliebe #vegan",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: ["/images/google_search_image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" sizes="32x32" href={metadata.icons.icon} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
      </Head>
      <body
        className={`${inter.variable} font-sans bg-[url('../../public/images/background.png')] bg-fill bg-fixed bg-center`}
      >
        <RecoilRootWrapper>
          <img
            className="h-0"
            src="/images/google_search_image.png"
            alt="google_search_image"
          />

          <Header />
          {children}
        </RecoilRootWrapper>
        <Footer />
      </body>

      <GoogleAnalytics gaId="G-00V3L0ZYJB" />
    </html>
  );
}
