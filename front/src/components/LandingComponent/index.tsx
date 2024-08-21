import React from "react";
import Button from "../Button";

export default function LandingComponent() {
  return (
    <div className="bg-landing bg-cover bg-center h-screen sm:ps-10 ">
      <div className="flex flex-col items-start justify-center min-h-screen  py-10 px-4">
        <div className="text-left mb-6 max-w-xl">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
            WHERE STYLE MEETS COMFORT.
          </h1>
        </div>
        <Button href="/home" content="SHOP NOW" />
      </div>
    </div>
  );
}

{/* <>
<div className="flex flex-col justify-end h-screen ps-10 pb-28 bg-gradient-to-b from-white to-zinc-300 ">
  <div className=" w-1/3 mb-4">
    <h1 className="font-bold text-4xl tracking-widest">WHERE STYLE MEETS COMFORT.</h1>
  </div>
  <Button href="/home" content='SHOP NOW' />

</div>
</> */}

