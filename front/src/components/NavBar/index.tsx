"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cartIcon, heartIcon } from "@/helpers/icons";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="border-b border-black flex h-16 items-center justify-between px-4">
        <div className="flex-1">
          <h1 className="font-bold text-2xl ">Malabis</h1>
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
          <ul className="flex text-sm ">
            <li className="flex pe-10 font-medium hover:underline">
              Categories
            </li>
            <li className="pe-10 font-medium hover:underline">Sign In</li>
            <li className="pe-10 font-medium hover:underline">Sign Up</li>
            <li className="pe-10 font-medium">{heartIcon}</li>
            <li className="pe-10 font-medium">{cartIcon}</li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-start p-4 space-y-2">
            <li className="font-medium hover:underline">Categories</li>
            <li className="font-medium hover:underline">Sign In</li>
            <li className="font-medium hover:underline">Sign Up</li>
            <li className="font-medium hover:underline">Favorites</li>
            <li className="font-medium hover:underline">View Cart</li>
          </ul>
        </div>
      )}
    </>
  );
}
/* 
        <div className=' w-1/2 flex justify-end ' >
        <ul className='flex' >
            <li className='flex pe-10 font-medium'> <div className='pe-2'>{categoryIcon}</div>Categories</li>
            <li className='pe-10 font-medium' >Sign In</li>
            <li className='pe-10 font-medium'>Sign Up</li>
            <li className='pe-10 font-medium'>{heartIcon}</li>
            <li className='pe-10 font-medium'>{cartIcon}</li>
        </ul>
        </div>  */

/* <div className=' flex h-16 items-center border-b border-black'>
        <div className='w-1/2 ps-10'>
        <h1 className='font-bold text-2xl'>Malabis</h1>
        </div>
        <div className=' w-1/2 flex justify-end ' >
        <ul className='flex' >
            <li className='flex pe-10 font-medium'> <div className='pe-2'>{categoryIcon}</div>Categories</li>
            <li className='pe-10 font-medium' >Sign In</li>
            <li className='pe-10 font-medium'>Sign Up</li>
            <li className='pe-10 font-medium'>{heartIcon}</li>
            <li className='pe-10 font-medium'>{cartIcon}</li>
        </ul>
        </div>
    </div> */

/*  <div className=''>
        <div className=''>
        <h1 className=''>Malabis</h1>
        </div>
        <div className='' >
        <ul className='' >
            <li className=''> <div className=''>{categoryIcon}</div>Categories</li>
            <li className='' >Sign In</li>
            <li className=''>Sign Up</li>
            <li className=''>{heartIcon}</li>
            <li className=''>{cartIcon}</li>
        </ul>
        </div>
    </div> */
