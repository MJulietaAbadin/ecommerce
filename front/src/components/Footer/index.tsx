import { facebookIcon, instagramIcon, linkedinIcon } from "@/helpers/icons";
import React from "react";

export default function Footer() {
  return (
    <div className="h-16 items-center border-t border-black grid grid-cols-3">
      <div className=" flex  ps-4">
        <div className="ps-4">{facebookIcon}</div>
        <div className="ps-4">{instagramIcon}</div>
        <div className="ps-4">{linkedinIcon}</div>
      </div>
      <div>
        <p className="text-center text-sm ">
          ©2024 - All rights reserved
        </p>
      </div>
      <div className="text-end pe-8">
        <p className="font-bold">Malabis</p>
      </div>
    </div>
  );
}
