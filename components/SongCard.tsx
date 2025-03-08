'use client'
import { TopSong } from "@/types";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { FiMoreVertical, FiPlayCircle, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import IconButton from "./elements/IconButton";
import usePlayerState from "@/hooks/usePlayerState";
interface SongCardProps {
  song: TopSong;
}

export default function SongCard({ song }: SongCardProps) {
  const { addSongList } = usePlayerState();
  const onClickPlay = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    addSongList([song]);
  }
  return (
    <article className="flex flex-row items-center gap-4 h-[48px] w-full
    relative group">
      <div className="w-[48px] h-[48px] relative">
        <Image src={song.imageSrc} alt="img" fill className="object-cover" />
        <section className="hidden group-hover:flex w-[48px] h-[48px] items-center justify-center absolute top-0
        bg-black cursor-pointer" onClick={onClickPlay}>
          <FiPlayCircle size={20}/>
        </section>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div>
          {song.rank === song.prevRank ? (
            <FaCircle size={10} />
          ) : song.rank > song.prevRank ? (
            <AiOutlineCaretUp size={10} color="#3CA63F" />
          ) : (
            <AiOutlineCaretDown size={10} color="#FF0000" />
          )}
        </div>
        <div>
            {song.rank + 1}
        </div>
        <div>
            <div>
              {song.name}
              </div>
        </div>
        <section className="
        hidden group-hover:flex 
        absolute top-0 right-0 flex-row justify-end items-center h-[48px] w-1/2 bg-[rgba(0,0,0,0.7)]">
          <IconButton icon={<FiThumbsDown size={20}/>}/>
          <IconButton icon={<FiThumbsUp size={20}/>}/>
          <IconButton icon={<FiMoreVertical size={20}/>}/>
        </section>
      </div>
    </article>
  );
}
