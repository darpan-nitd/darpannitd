"use client";
import { useState } from "react";
import { MemberInfo } from "@/lib/definations";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Cards(member: MemberInfo) {
  const [useOriginalImage, setUseOriginalImage] = useState(false);

  const getSmallPicUrl = (url: string) => {
    const urlParts = url.split("/");
    const filename = urlParts.pop();
    const newFilename = `small_${filename}`;
    return [...urlParts, newFilename].join("/");
  };

  const handleError = () => {
    setUseOriginalImage(true);
  };

  return (
    <div
      key={member.id}
      className={`lg:w-60 lg:h-80 w-72 h-80 ${
        member.pass_year == 2025 ? "bg-red-950 text-white" : "bg-gray-300"
      } rounded-lg bg-opacity-40 backdrop-filter backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,.9)] mb-6`}
    >
      <div className="h-full p-4 flex flex-col place-content-between">
        <img
          className="w-40 h-40 rounded-full mx-auto  bg-slate-200 border-4 border-double border-gray-600 shadow-2xl"
          src={
            useOriginalImage || member.pic_url == null
              ? member.pic_url || "/blank-profile-picture.webp"
              : getSmallPicUrl(member.pic_url)
          }
          alt="avatar"
          onError={handleError}
          style={{ objectFit: "cover", objectPosition: "20% 20%" }}
          loading="lazy"
        />
        <div>
          <h3 className="text-xl font-bold text-center">{member.name}</h3>
          <p className="text-center">
            {member.post == "NA" ? "" : member.post}
          </p>
        </div>
        <div>
          <div className="flex justify-center gap-4">
            {member.facebook_id == "NA" ? (
              <FaFacebook className="text-blue-800 text-3xl mb-2 cursor-not-allowed" />
            ) : (
              <a href={member.facebook_id}>
                <FaFacebook className="text-blue-800 text-3xl mb-2 cursor-pointer" />
              </a>
            )}
            {member.instagram_id == "NA" ? (
              <FaInstagram className="text-pink-600 text-3xl mb-2 cursor-not-allowed" />
            ) : (
              <a href={member.instagram_id}>
                <FaInstagram className="text-pink-600 text-3xl mb-2 cursor-pointer" />
              </a>
            )}
            {member.linkedin_id == "NA" ? (
              <FaLinkedin className="text-blue-700 text-3xl mb-2 cursor-not-allowed" />
            ) : (
              <a href={member.linkedin_id}>
                <FaLinkedin className="text-blue-700 text-3xl mb-2 cursor-pointer" />
              </a>
            )}
            {member.x_id == "NA" ? (
              <FaTwitter className="text-blue-500 text-3xl mb-2 cursor-not-allowed" />
            ) : (
              <a href={member.x_id}>
                <FaTwitter className="text-blue-500 text-3xl mb-2 cursor-pointer" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
