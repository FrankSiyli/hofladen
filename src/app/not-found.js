import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mx-auto w-screen h-screen">
      <img className="logo z-30 p-10" src="/images/logo.png" alt="logo" />

        <h2 className="my-10">uups... </h2>
        <p>
          <Link
            className="text-xl underline decoration-appBlue underline-offset-2"
            href="/"
          >
            zurück zur Startseite
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
