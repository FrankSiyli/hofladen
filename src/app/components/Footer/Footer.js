import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center gap-5 text-appText underline">
      <Link href="../pages/impressum">Impressum</Link>
      <Link href="../pages/datenschutz">Datenschutz</Link>
    </div>
  );
};

export default Footer;
