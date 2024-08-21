import { eventContent } from "@/lib/raw_data";

export default function ContentCard({ eventId }: { eventId: string }) {
  const content = eventContent[eventId];
  return (
    <div
      className="w-[95%] h-[600px] relative 
                      before:content-[''] before:absolute before:inset-0 before:scale-[1.42]"
    >
      <div className="w-full h-full animate-[spin_40s_ease-in-out_infinite_alternate] relative">
        <div
          className="w-full h-full transition-[border-radius] duration-3000 ease-out absolute overflow-hidden z-[5]
                          animate-[morph_30s_ease-in-out_infinite_alternate] rounded-[60%_40%_27%_73%/_69%_72%_28%_31% ]"
        >
          <div
            className="w-[142%] h-[142%] absolute -left-[21%] -top-[21%] bg-center bg-cover
                            flex items-center justify-center text-center text-[#003] text-xl font-bold uppercase
                            animate-[spin_12s_ease-in-out_infinite_alternate-reverse] bg-[#1f2b4a] "
          >
            <p className="w-[40%] text-white">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
