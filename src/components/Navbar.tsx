"use client";
import Link from "next/link";
import clsx from "clsx";
import { khand, yatraOne } from "./fonts/fonts";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full fixed z-50 top-0 flex justify-between h-24 p-4 bg-black bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <a href="/">
        <div className="flex items-center text-gray-200">
          <img
            src="/darpan-logo.svg"
            alt="darpan-logo"
            className="h-12 p-0 pr-1 lg:p-2 lg:h-16"
          />
          <p
            className={clsx(
              `${yatraOne.className} lg:text-5xl text-4xl pt-[4px]`
            )}
          >
            दर्पण
          </p>
        </div>
      </a>
      <div
        className={clsx(
          `${khand.className} lg:flex items-center gap-8 font-medium text-2xl text-gray-300 hidden`
        )}
      >
        <Link href={"/"}>
          <p>मुख्य पृष्ठ</p>
        </Link>
        <Link href={"/members"}>
          <p>सदस्य</p>
        </Link>
        <Link href={"/events"}>
          <p>आयोजन</p>
        </Link>
        <Link href={"/contact"}>
          <p>संपर्क</p>
        </Link>
      </div>
      <div className="lg:hidden">
        <button className="text-gray-200 text-2xl" onClick={toggleMenu}>
          {isOpen ? (
            <img
              src="/nav-menu-close.svg"
              className="h-11 bg-gray-100 rounded-lg p-1 hover:h-12 hover:bg-white"
            ></img>
          ) : (
            <img
              src="/nav-menu-open.svg"
              className="h-11 bg-gray-100 rounded-lg p-[1px] hover:h-12 hover:bg-white"
            ></img>
          )}
        </button>
        {isOpen && (
          <div className="absolute w-fit right-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg m-3 p-4 rounded-xl">
            <div className="flex flex-col items-center">
              <Link href={"/"}>
                <p className="text-gray-100 text-2xl p-3 hover:text-black">
                  मुख्य पृष्ठ
                </p>
              </Link>
              <hr className="w-3/4 border-black border-1"></hr>
              <Link href={"/members"}>
                <p className="text-gray-100 text-2xl p-3 hover:text-black">
                  सदस्य
                </p>
              </Link>
              <hr className="w-3/4 border-black border-1"></hr>
              <Link href={"/events"}>
                <p className="text-gray-100 text-2xl p-3 hover:text-black">
                  आयोजन
                </p>
              </Link>
              <hr className="w-3/4 border-black border-1"></hr>
              <Link href={"/contact"}>
                <p className="text-gray-100 text-2xl p-3 hover:text-black">
                  संपर्क
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
