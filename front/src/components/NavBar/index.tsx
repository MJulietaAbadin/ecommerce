"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { cartIcon, userIcon } from "@/helpers/icons";
import { UserContext } from "@/context/user";
import Logo from "../Logo";
import { categoriesToPreload } from "@/helpers/categories";

export default function NavBar() {
  const { isLogged } = useContext(UserContext);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const handleCategoryClick = () => {
    setIsCategoriesOpen(false);
  };

  return (
    <div className="fixed w-full z-50 bg-transparent backdrop-blur-sm text-white border-black flex h-16 items-center justify-between px-4">
      <div className="ps-10">
        <Link href={"/"}>
          <Logo w={60} h={60} />
        </Link>
      </div>

      <div className="flex justify-center ">
        <ul className="flex text-sm font-bold">
          <li className="flex me-10 font-medium">
            <Link
              className="transition duration-300 ease-in-out hover:text-pageColor"
              href={"/home"}
            >
              HOME
            </Link>
          </li>
          <li className="pe-10 font-medium relative">
            <button
              onClick={toggleCategories}
              className="transition duration-300 ease-in-out hover:text-pageColor"
            >
              CATEGORIES
            </button>
            {isCategoriesOpen && (
              <ul className="absolute bg-gray-900 text-white mt-2 p-2 shadow-md rounded-md">
                {categoriesToPreload &&
                  categoriesToPreload.map((category) => (
                    <li
                      className="hover:bg-pageColor px-4 py-2"
                      key={category.id}
                    >
                      <Link
                        href={`/products/${category.id}`}
                        onClick={handleCategoryClick}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </li>
          <li className="flex font-medium">
            <Link
              href={"/contact"}
              className="transition duration-300 ease-in-out hover:text-pageColor"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-end">
        {isLogged ? (
          <ul className="flex text-sm">
            <li className="flex pe-10 font-medium hover:underline">
              <Link
                href={"/cart"}
                className="group text-white transition duration-300 ease-in-out hover:text-pageColor"
              >
                {cartIcon}
              </Link>
            </li>
            <li className="flex pe-10 font-medium hover:underline">
              <Link
                className="group text-white transition duration-300 ease-in-out hover:text-pageColor"
                href={"/user-dashboard"}
              >
                {userIcon}
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="flex text-sm">
            <li className="flex pe-10 font-medium hover:underline">
              <Link href={"/login"}>{userIcon}</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

/* "use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { cartIcon, userIcon } from "@/helpers/icons";
import { UserContext } from "@/context/user";
import Logo from "../Logo";
import { categoriesToPreload } from "@/helpers/categories";

export default function NavBar() {
  const { isLogged } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen); 
  };

  const handleCategoryClick = () => {
    setIsCategoriesOpen(false); 
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="fixed w-full z-50 bg-transparent backdrop-blur-sm text-white border-black flex h-16 items-center justify-between px-4">
        <div className="ps-10">
          <Link href={"/"}>
            <Logo w={60} h={60} />
          </Link>
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
        <div className="hidden md:flex justify-center ">
          <ul className="flex text-sm font-bold">
            <li className="flex me-10 font-medium">
              <Link  className="transition duration-300 ease-in-out hover:text-pageColor" href={"/home"}>HOME</Link>
            </li>
            <li className="pe-10 font-medium relative">
              <button onClick={toggleCategories}  className="transition duration-300 ease-in-out hover:text-pageColor">
                CATEGORIES
              </button>
              {isCategoriesOpen && (
                <ul className="absolute bg-gray-900 text-white mt-2 p-2 shadow-md rounded-md">
                  {categoriesToPreload && categoriesToPreload.map((category) => (
                    <li className="hover:bg-pageColor px-4 py-2" key={category.id}>
                      <Link href={`/products/${category.id}`} onClick={handleCategoryClick}>{category.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="flex font-medium">
              <Link
                href={"/contact"}
                className="transition duration-300 ease-in-out hover:text-pageColor"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex justify-end">
          {isLogged ? (
            <ul className="flex text-sm">
              <li className="flex pe-10 font-medium hover:underline">
                <Link href={"/cart"} className="group text-white transition duration-300 ease-in-out hover:text-pageColor">
                  {cartIcon}
                </Link>
              </li>

              <li className="flex pe-10 font-medium hover:underline">
                <Link className="group text-white transition duration-300 ease-in-out hover:text-pageColor" href={"/user-dashboard"}>{userIcon}</Link>
              </li>
            </ul>
          ) : (
            <ul className="flex text-sm">
              <li className="flex pe-10 font-medium hover:underline">
                <Link href={"/login"}>{userIcon}</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-16 left-0 right-0 bg-gray-900 text-white z-50 md:hidden">
          <ul className="flex flex-col items-start p-4 space-y-2">
            <li className="font-medium hover:underline">
              <Link href={"/home"}>HOME</Link>
            </li>
            <li className="font-medium hover:underline">
              <button onClick={toggleCategories}>CATEGORIES</button>
              {isCategoriesOpen && (
                <ul className="ml-4 mt-2">
                  {categoriesToPreload && categoriesToPreload.map((category) => (
                    <li className="hover:underline" key={category.id}>
                      <Link href={`/products/${category.id}`} onClick={handleCategoryClick}>{category.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="font-medium hover:underline">
              <Link href={"/contact"}>CONTACT</Link>
            </li>
            {isLogged ? (
              <>
                <li className="font-medium hover:underline">
                  <Link href={"/cart"}>CART</Link>
                </li>
                <li className="font-medium hover:underline">
                  <Link href={"/user-dashboard"}>USER DASHBOARD</Link>
                </li>
              </>
            ) : (
              <li className="font-medium hover:underline">
                <Link href={"/login"}>LOGIN</Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
 */
