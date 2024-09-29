import { emailIcon, facebookIcon, instagramIcon, linkedinIcon, twitterIcon } from "@/helpers/icons";
import React from "react";
import Logo from "../Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="absolute bottom-0 left-0 w-full text-pageColor bg-black h-60 items-center border-t border-black grid grid-cols-3">
      <div className="flex justify-end">
      <div className="text-end w-2/3 flex flex-col ">
        <p className="text-center font-bold text-xl pb-4">About Us</p>
        <p className= "text-white text-center text-xs font-light">At DIGITAL DEPOT, we're dedicated to bringing you the best in tech. Explore our curated selection and enjoy exceptional quality and service.</p>
      </div>
      </div>
      <div className="flex justify-center">
        <Logo w={150} h={150}/>
      </div>
      <div className="flex justify-start">
        <div className="flex flex-col">
          <p className="text-center font-bold text-xl pb-4">Follow Us</p>
          <div className="flex justify-center">
          <Link href='/#' className="ps-4">{facebookIcon}</Link>
          <Link href='/#' className="ps-4">{instagramIcon}</Link>
          <Link href='/#' className="ps-4">{linkedinIcon}</Link>
          <Link href='/#' className="ps-4">{twitterIcon}</Link>
          <Link href='/#' className="ps-4">{emailIcon}</Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}


/* import { facebookIcon, instagramIcon, linkedinIcon } from "@/helpers/icons";
import React from "react";

export default function Footer() {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-gray-900 h-16 items-center border-t border-black grid grid-cols-3">
      <div className="flex ps-4">
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
        <p className="font-bold">MALABIS</p>
      </div>
    </div>
  );
}
 */
