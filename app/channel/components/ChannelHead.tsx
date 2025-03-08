'use client'
import { FiMusic } from "react-icons/fi";

import DarkButton from "@/components/elements/DarkButton";
import WhiteButton from "@/components/elements/WhiteButton";
import { FiShuffle } from "react-icons/fi";
import { Channel } from "@/types";
import usePlayerState from "@/hooks/usePlayerState";
export default function ChannelHead({ channel }: { channel: Channel }) {
    const { addSongList } = usePlayerState();


    const onClickShuffle = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        addSongList(channel.songList);
    }

    const onClickPlay = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        addSongList(channel.songList);
    }
  return (
      <section>
        <div className="text-[28px] font-bold">{channel.name}</div>
        <article className="mt-4 lg:hidden">
          <div>
            <DarkButton
              className="w-[230px] flex justify-center"
              label="구독중 4.18만"
            />
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <WhiteButton icon={<FiShuffle />} label="셔플" onClick={onClickShuffle} />
            <WhiteButton icon={<FiMusic />} label="뮤직 스테이션" />
          </div>
        </article>
        <div className="hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4">
          <WhiteButton icon={<FiShuffle />} label="셔플" onClick={onClickShuffle} />
          <WhiteButton icon={<FiMusic />} label="뮤직 스테이션" />
          <DarkButton
            className="w-[230px] flex justify-center"
            label="구독중 4.18만"
          />
        </div>
      </section>
  );
}
