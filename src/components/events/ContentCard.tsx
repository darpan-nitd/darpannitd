import { eventContent } from "@/lib/raw_data";
import { kalam } from "../fonts/fonts";

export default function ContentCard({ eventId }: { eventId: string }) {
  const content = eventContent[eventId];
  return (
    <div
      className="lg:h-[600px] h-[400px] w-[100%] mt-5 mb-5 relative 
                      before:content-[''] before:absolute before:inset-0 before:scale-[1]"
    >
      <div className="w-full h-full animate-[spin_30s_ease-in-out_infinite_alternate] relative">
        <div
          className="w-full h-full transition-[border-radius] duration-3000 ease-out absolute overflow-hidden z-[5]
                          animate-[morph_20s_ease-in-out_infinite_alternate]"
        >
          <div
            className="w-[142%] h-[142%] absolute -left-[21%] -top-[21%] bg-center bg-cover
                            flex items-center justify-center text-center text-[#003] text-xl font-bold uppercase
                            animate-[spin_12s_ease-in-out_infinite_alternate-reverse] bg-[#1f2b4a] "
          >
            <p
              className={`${kalam.className} w-[60%] text-white lg:text-xl text-sm`}
            >
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
