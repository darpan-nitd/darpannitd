import ContentCard from "@/components/events/ContentCard";
import ImageCarousel from "@/components/events/ImageCarousal";
import { kalam } from "@/components/fonts/fonts";
import Navbar from "@/components/Navbar";
import { getEventImages } from "@/lib/data";
import { EventIDtoName, EventImages } from "@/lib/definations";
import clsx from "clsx";

export default async function EventsPage() {
  const eventImages = (await getEventImages()) || [];

  const groupedImages = eventImages.reduce((acc, image) => {
    const { event_id } = image;
    if (!acc[event_id]) {
      acc[event_id] = [];
    }
    acc[event_id].push(image);
    return acc;
  }, {});

  return (
    <div className="pt-28 flex flex-col items-center justify-center bg-[url('/bg-event-1.svg')] bg-fixed bg-bottom">
      <Navbar />
      {Object.entries(groupedImages).map(([eventId, images]) => (
        <div
          key={eventId}
          className="flex w-full flex-col items-center justify-center"
        >
          <div className="w-[95%] flex flex-col items-center justify-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-md m-8 rounded-3xl">
            <p className={clsx(`${kalam.className} text-6xl text-white p-8`)}>
              {EventIDtoName[eventId].hi}
            </p>
            <div className="lg:flex hidden w-full mb-10">
              {parseInt(eventId) % 2 === 1 ? (
                <span className="lg:w-1/2">
                  <ImageCarousel
                    images={images as EventImages[]}
                    key={eventId}
                  />
                </span>
              ) : (
                <span className="lg:w-1/2">
                  <ContentCard eventId={eventId} key={eventId} />
                </span>
              )}
              {parseInt(eventId) % 2 === 0 ? (
                <span className="lg:w-1/2">
                  <ImageCarousel
                    images={images as EventImages[]}
                    key={eventId}
                  />
                </span>
              ) : (
                <span className="lg:w-1/2">
                  <ContentCard eventId={eventId} key={eventId} />
                </span>
              )}
            </div>
            <div className="lg:hidden">
              <ImageCarousel images={images as EventImages[]} key={eventId} />
              <ContentCard eventId={eventId} key={eventId} />
            </div>
          </div>
          <span className="h-4 w-9/12 rounded-full bg-slate-500"></span>
        </div>
      ))}
    </div>
  );
}
