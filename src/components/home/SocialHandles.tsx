"use client";
import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

type SocialItemProps = {
  icon: React.ReactNode;
  platform: string;
  followers: number;
  url?: string;
};

const SocialHandles: React.FC = () => {
  return (
    <div className="flex justify-around items-center w-[1100px] h-[250px] bg-zinc-900 rounded-full p-5 m-auto mb-16 mt-16 shadow-[0px_0px_10px_rgba(221,_221,_221,_1),_0_0_40px_rgba(204,_204,_204,_1)]">
      <SocialItem
        icon={<FaInstagram className="text-pink-500 text-6xl mb-2" />}
        platform="Instagram"
        followers={1000}
        url="https://www.instagram.com/darpan_nitdgp/"
      />
      <SocialItem
        icon={<FaLinkedin className="text-blue-600 text-6xl mb-2" />}
        platform="LinkedIn"
        followers={500}
        url="https://linkedin.com"
      />
      <SocialItem
        icon={<FaFacebook className="text-blue-800 text-6xl mb-2" />}
        platform="Facebook"
        followers={2200}
        url="https://www.facebook.com/darpan.nitdgp/"
      />
      <SocialItem
        icon={<FaYoutube className="text-red-600 text-6xl mb-2" />}
        platform="YouTube"
        followers={1200}
        url="https://www.youtube.com/@darpan-nitdurgapur1089"
      />
    </div>
  );
};

const SocialItem: React.FC<SocialItemProps> = ({
  icon,
  platform,
  followers,
  url,
}) => (
  <motion.div
    className="flex flex-col items-center cursor-pointer"
    whileHover={{ scale: 1.1 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    onClick={() => window.open(url, "_blank")}
  >
    {icon}
    <div className="text-center">
      <span className="text-lg text-white font-semibold">{platform}</span>
      <motion.span
        className="text-xl text-white font-bold mt-1 block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {followers.toLocaleString()}+ Followers
      </motion.span>
    </div>
  </motion.div>
);

export default SocialHandles;
