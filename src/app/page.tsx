import { rozhaOne } from "@/components/fonts/fonts";
import ContentCard from "@/components/home/ContentCard";
import SocialHandles from "@/components/home/SocialHandles";
import CustomMediaCarousel from "@/components/home/VideoCarousal";
import Navbar from "@/components/Navbar";
import clsx from "clsx";
import EventCard from "@/components/home/EventCard";
import ImageCollage from "@/components/home/ImageCollage";

export default function HomePage() {
  return (
    <div>
      <div className="min-h-screen bg-[url('/bg-home-1.svg')] bg-no-repeat bg-cover bg-top">
        <Navbar />
        <div className="pt-24 flex flex-col items-center">
          <div className="w-full flex justify-between p-4">
            <img src="/nit-dgp-logo.svg" alt="nit-dgp-logo" />
            <img src="/darpan-logo.svg" alt="darpan-logo" />
          </div>
          <div className="flex flex-col items-center">
            <p className={clsx(`${rozhaOne.className} text-white text-5xl`)}>
              हिंदी छात्रसंघ
            </p>
            <img className="max-w-sm" src="/darpan-word.png" alt="" />
          </div>
          <div className="w-[80%] bg-slate-200 bg-opacity-20 backdrop-blur-sm rounded-3xl pt-12">
            <CustomMediaCarousel />
          </div>
        </div>
      </div>
      <div className="">
        <SocialHandles />
      </div>
      <div className="flex bg-[url('/bg-home-2.svg')] bg-cover">
        <div className="w-[40%] content-center backdrop-blur-sm m-8">
          <ContentCard />
        </div>
        <div className="w-[60%] backdrop-blur-sm">
          <ImageCollage />
        </div>
      </div>
      <div className="flex flex-col min-h-screen w-screen items-center justify-center bg-[url('/bg-home-2.svg')] bg-cover pb-10">
        <EventCard />
      </div>
    </div>
  );
}
