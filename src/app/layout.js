import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootWrapper from "./RecoilRootWrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "hofwiesen-cafe.de",
  description: "hofwiesen-cafe Kothendorf ",
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
