"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cartIcon } from "@/helpers/icons";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 border-b border-black bg-white z-50 flex h-16 items-center justify-between px-4">
        <div className="flex-1">
          <h1 className="font-bold text-2xl">Malabis</h1>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} type="button" className="text-black">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex flex-1 justify-end w-1/2">
          <ul className="flex text-sm">
            <li className="flex pe-10 font-medium hover:underline">
              <Link href={"/home"}>Home</Link>
            </li>
            <li className="pe-10 font-medium hover:underline">
              <Link href={"/user-dashboard"}>User Dashboard</Link>
            </li>
            <li className="pe-10 font-medium">
              <Link href={"/cart"}>{cartIcon}</Link>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-16 left-0 right-0 bg-white z-50 md:hidden">
          <ul className="flex flex-col items-start p-4 space-y-2">
            <li className="font-medium hover:underline">
              <Link href={"/home"}>Home</Link>
            </li>
            <li className="font-medium hover:underline">
              <Link href={"/user-dashboard"}>User Dashboard</Link>
            </li>
            <li className="font-medium hover:underline">
              <Link href={"/cart"}>View Cart</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

