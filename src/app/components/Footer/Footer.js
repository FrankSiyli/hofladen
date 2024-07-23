import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row justify-between p-5 items-center text-center bg-appGrey/50">
      <div >
        <p className="text-appBlue ">Anschrift:</p>
        <p>Zu den Hofwiesen 3</p>
        <p>19075 Warsow</p>
        <p>OT Kothendorf</p>
        <p className="text-appBlue mt-3">Öffnungszeiten:</p>
        <p>Sa + So 13-18 Uhr</p>
      </div>
      <div >
        <p className="text-appBlue mt-3 md:mt-0">Telefon:</p>
        <p>0173 / 82 84 585</p>
        <p className="text-appBlue mt-3">Email:</p>
        <a className="underline" href="hofwiesen-cafe@gmx.de">
          hofwiesen-cafe@gmx.de
        </a>
      </div>
      <div className="flex flex-col justify-center gap-2 mt-10 md:mt-0 text-appBlue underline">
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </div>
      </div>
  );
};

export default Footer;
