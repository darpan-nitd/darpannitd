import { amita, rozhaOne } from "@/components/fonts/fonts";
import Cards from "@/components/member/cards";
import Navbar from "@/components/Navbar";
import { getMembers } from "@/lib/data";
import { MemberInfo } from "@/lib/definations";
import clsx from "clsx";

export default async function MembersPage() {
  const members = await getMembers();

  return (
    <div className="bg-[url('/bg-members-1.svg')]">
      <Navbar />
      <div className="pt-28">
        <div className="bg-zinc-900 m-8 p-4 rounded-full">
          <p
            className={clsx(
              `${rozhaOne.className} text-center text-5xl text-gray-200 m-4`
            )}
          >
            हमारे सदस्य
          </p>
          <p
            className={clsx(
              `${rozhaOne.className} text-center text-2xl text-gray-400`
            )}
          >
            समर्पित सदस्यों की हमारी टीम से मिलें।
          </p>
        </div>
        <div>
          <p
            className={clsx(
              `${amita.className} text-4xl text-white text-center`
            )}
          >
            पोस्ट धारक
          </p>
          <div className="flex flex-wrap gap-10 p-12 justify-center">
            {members?.map((member: MemberInfo) => {
              if (member.pass_year == 2025)
                return <Cards {...member} key={member.id} />;
            })}
          </div>
        </div>
        <div className="w-[80%] h-2 bg-slate-600 bg-opacity-30 rounded-3xl mb-12 m-auto"></div>
        <div>
          <p
            className={clsx(
              `${amita.className} text-4xl text-white text-center`
            )}
          >
            वरिष्ठ समन्वयक
          </p>
          <div className="flex flex-wrap gap-10 p-12 justify-center">
            {members?.map((member: MemberInfo) => {
              if (member.pass_year == 2026)
                return <Cards {...member} key={member.id} />;
            })}
          </div>
        </div>
        <div className="w-[80%] h-2 bg-slate-600 bg-opacity-30 rounded-3xl mb-12 m-auto"></div>
        <div>
          <p
            className={clsx(
              `${amita.className} text-4xl text-white text-center`
            )}
          >
            कनिष्ठ समन्वयक
          </p>
          <div className="flex flex-wrap gap-10 p-12 justify-center">
            {members?.map((member: MemberInfo) => {
              if (member.pass_year == 2027)
                return <Cards {...member} key={member.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
