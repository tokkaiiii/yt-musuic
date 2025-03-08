import PagePadding from "@/components/PagePadding";
import { getChannelById } from "@/lib/dummyData";
import { getRandomArrayElement } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import PlayListCarousel from "@/components/PlayListCarousel";
import ChannelHead from "../components/ChannelHead";
import SongCardRowExpand from "@/components/SongCardRowExpand";
export default async function Channel({ params }: { params: { id: string } }) {
  const channel = await getChannelById(Number(params.id));

  if (!channel) {
    permanentRedirect("/");
  }

  const imageSrc = getRandomArrayElement(channel.songList)?.imageSrc;

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-[150px]"></div>
      <ChannelHead channel={channel} />
      <section className="mt-[80px]">
        <div className="text-[28px] font-bold">노래</div>
        <div className="mt-[20px]">
          <ul className="flex flex-col gap-2">
            {channel.songList.map((song, index) => (
              <SongCardRowExpand key={index} song={song} />
            ))}
          </ul>
        </div>
      </section>
      <section className="mt-[80px]">
        <div className="text-[28px] font-bold">앨범</div>
        <PlayListCarousel 
            playlistArray={channel.playlistArray}
        />
      </section>
      <section className="mt-[80px]"></section>
    </PagePadding>
  );
}
