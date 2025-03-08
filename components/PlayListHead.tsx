'use client'

import { Playlist } from "@/types"
import { FiFolderPlus, FiMoreVertical, FiPlay } from "react-icons/fi";
import IconButton from "@/components/elements/IconButton";

import Image from "next/image";
import { getRandomArrayElement } from "@/lib/utils";
import WhiteButton from "./elements/WhiteButton";
import DarkButton from "./elements/DarkButton";
import usePlayerState from "@/hooks/usePlayerState";
interface PlayListHeadProps {
    playlist: Playlist
}

export default function PlayListHead({playlist}: PlayListHeadProps) {
    const { addSongList } = usePlayerState();
    const { playlistName, owner, songList } = playlist;
    const randomSong = getRandomArrayElement(songList);
    const onClickPlay = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        addSongList(songList);
    }
    return (
        <section className="">
            <div className="flex gap-[50px] flex-row">
            <div className="relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]">
                <Image alt="playlist image" src={randomSong.imageSrc} fill />
            </div>
            <article className="flex flex-col justify-center">
                <div className="text-[28px] font-bold">{playlistName}</div>
                <div className="text-neutral-400 mt-4 text-[14px]">
                    <div>{`앨범 • ${owner} • 2019`}</div>
                    <div>{`${songList.length}곡 • 15분`}</div>
                </div>
                <ul className="hidden lg:flex flex-row gap-4 mt-4">
                    <WhiteButton 
                    className="w-[85px] text-[14px]" 
                    icon={<FiPlay />} 
                    label="재생" 
                    onClick={onClickPlay}
                    />
                    <DarkButton 
                    className="w-[135px] text-[14px]" 
                    icon={<FiFolderPlus />} 
                    label="보관함에 저장" 
                    />
                    <IconButton icon={<FiMoreVertical size={24} />} />
                </ul>
            </article>
            </div>
                <ul className="flex flex-row gap-4 mt-4 lg:hidden">
                    <WhiteButton 
                    className="w-[85px] text-[14px]" 
                    icon={<FiPlay/>} 
                    label="재생" 
                    onClick={onClickPlay}
                    />
                    <DarkButton 
                    className="w-[135px] text-[14px]" 
                    icon={<FiFolderPlus />} 
                    label="보관함에 저장" 
                    />
                    <IconButton icon={<FiMoreVertical size={24} />} />
                </ul>
        </section>
    )
}