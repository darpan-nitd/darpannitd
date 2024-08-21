import clsx from "clsx";
import { rozhaOne } from "../fonts/fonts";
import { getEventPoster } from "@/lib/data";
import { EventImages } from "@/lib/definations";

export default async function EventCard() {
  const eventPoster = (await getEventPoster()) as EventImages[];

  return (
    <>
      <div className="bg-gray-200 bg-opacity-50 m-4 rounded-3xl w-[80%] backdrop-blur-sm border-4 border-double border-white">
        <p
          className={clsx(
            `${rozhaOne.className} text-white text-5xl p-10 text-center`
          )}
        >
          आयोजन
        </p>
      </div>
      <div className="flex flex-wrap justify-between h-[85%] w-[70%] bg-white gap-8 p-4 rounded-2xl bg-opacity-30 backdrop-blur-sm border-gray-600 border-4">
        {eventPoster?.map((image: EventImages) => (
          <span
            key={image.id}
            className="w-[500px] h-[300px] bg-slate-300 rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]"
          >
            <img src={image.url} alt={image.event_id} />
          </span>
        ))}
        {/* <span className="w-[500px] h-[300px] bg-slate-300 rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
          <img src="/jhankar_img.jpg" alt="" />
        </span>
        <span className="w-[500px] h-[300px] bg-slate-300 rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
          <img src="/goonj_img.jpg" alt="" />
        </span>
        <span className="w-[500px] h-[300px] bg-slate-300 rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
          <img src="/arzkiyahai_img.jpg" alt="" />
        </span>
        <span className="w-[500px] h-[300px] bg-slate-300 rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
          <img src="/chaipecharcha_img.jpg" alt="" />
        </span> */}
      </div>
    </>
  );
}
