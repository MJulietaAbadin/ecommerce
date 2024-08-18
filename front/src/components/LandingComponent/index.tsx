import Link from "next/link";
import React from "react";
import backgroundImage from "../../../public/landingBackground.jpg";

export default function LandingComponent() {
  return (
    <>
        <div className="h-full flex flex-col justify-center ms-40">
        <div className="w-1/3  mb-4  ">
            <h1 className="font-bold text-4xl tracking-widest">WHERE STYLE MEETS COMFORT.</h1>
        </div>
        <div className="bg-black w-28 text-center rounded p-2 hover:bg-neutral-950">
            <Link href={"/home"}>
            <button className="text-xs text-white">SHOP NOW</button>
            </Link>
        </div>
        </div>
    </>
  );
}


