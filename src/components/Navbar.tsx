import Link from "next/link";
import clsx from "clsx";
import { khand, yatraOne } from "./fonts/fonts";

export default function Navbar() {
  return (
    <nav className="w-full fixed z-50 top-0 flex justify-between h-24 p-4 bg-black bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <a href="/">
        <div className="flex items-center text-gray-200 text-3xl">
          <img src="/darpan-logo.svg" alt="darpan-logo" className="h-16 p-2" />
          <p className={clsx(`${yatraOne.className} text-5xl pt-[4px]`)}>
            दर्पण
          </p>
        </div>
      </a>
      <div
        className={clsx(
          `${khand.className} flex items-center gap-8 font-medium text-2xl text-gray-300`
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
    </nav>
  );
}
