import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" w-full p-5 flex flex-col text-center bg-appGrey/80">
      <div className="h-40 flex justify-around">
      <div >
        <p className="text-appBlue ">Anschrift:</p>
        <p>Zu den Hofwiesen 3</p>
        <p>19075 Warsow</p>
        <p className="text-appBlue mt-3">Öffnungszeiten:</p>
        <p>Sa + So 13-18 Uhr</p>
      </div>
      <div >
        <p className="text-appBlue">Telefon:</p>
        <p>0173/8284585</p>
        <p className="text-appBlue mt-3">Email:</p>
        <a className="underline" href="hofwiesen-cafe@gmx.de">
          hofwiesen-cafe@gmx.de
        </a>
      </div></div>
      <div className="flex justify-center gap-5 mt-10 text-appBlue underline">
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </div>
    </div>
  );
};

export default Footer;
