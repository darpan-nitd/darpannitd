import clsx from "clsx";
import { jersey10, rozhaOne } from "./fonts/fonts";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { LocateIcon, MailIcon, PhoneCallIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center bg-slate-800 text-white">
        <div className="flex lg:flex-row flex-col items-center justify-center w-full">
          <div className="lg:w-1/3">
            <span className="m-4">
              <p className={clsx(`${rozhaOne.className} text-center text-2xl`)}>
                हिंदी छात्रसंघ
              </p>
              <p className={clsx(`${rozhaOne.className} text-center text-5xl`)}>
                दर्पण
              </p>
              <p className={clsx(`${rozhaOne.className} text-center text-2xl`)}>
                राष्ट्रीय प्रौद्योगिकी संस्थान, दुर्गापुर
              </p>
            </span>
          </div>
          <span className="hidden lg:flex h-32 w-1 bg-white opacity-50 rounded-full"></span>
          <div className="lg:w-1/3">
            <span className="flex flex-col lg:m-4 items-center justify-center">
              <p className={`${jersey10.className} text-2xl`}>Follow us:</p>
              <span className="flex">
                <a href="https://www.facebook.com/darpan.nitdgp/">
                  <FaFacebook className="text-blue-800 text-5xl m-4 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/darpan_nitdgp/">
                  <FaInstagram className="text-pink-600 text-5xl m-4 cursor-pointer" />
                </a>
                <a href="https://linkedin.com">
                  <FaLinkedin className="text-blue-700 text-5xl m-4 cursor-pointer" />
                </a>
                <a href="https://www.youtube.com/@darpan-nitdurgapur1089">
                  <FaYoutube className="text-red-500 text-5xl m-4 cursor-pointer" />
                </a>
              </span>
            </span>
          </div>
          {/* <span className="hiddem h-32 w-1 bg-white opacity-50 rounded-full"></span> */}
          <div className="lg:w-1/3">
            <span className="lg:m-4 flex flex-col items-center justify-center">
              <p className={`${jersey10.className} text-2xl`}>Contact us:</p>
              <p className="text-lg flex items-center justify-center">
                <LocateIcon className="text-blue-500 text-2xl mr-2" />
                <span className="text-blue-500">
                  NIT Durgapur, West Bengal, India
                </span>
              </p>
              <p className="text-lg flex items-center justify-center">
                <MailIcon className="text-blue-500 text-2xl mr-2" />
                <a href="mailto:" className="text-blue-500">
                  darpannitdurgapur@gmail.com
                </a>
              </p>
              <p className="text-lg flex items-center justify-center">
                <PhoneCallIcon className="text-blue-500 text-2xl mr-2" />
                <a href="tel:" className="text-blue-500">
                  7007965966
                </a>
              </p>
            </span>
          </div>
        </div>
        <div className="w-full bg-slate-900 text-white text-center p-4">
          <p className={`${jersey10.className} text-lg`}>
            &copy; 2024 Darpan. All rights reserved. Designed and developed by{" "}
            <a
              href="#"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              Darpan WebD Team
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
