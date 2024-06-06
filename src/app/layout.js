import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootWrapper from "./RecoilRootWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "hofwiesen-cafe.de",
  description: "hofwiesen-cafe.de Kothendorf ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </html>
  );
}
