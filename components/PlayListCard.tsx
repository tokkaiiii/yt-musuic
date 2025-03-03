'use client'
import { Playlist } from "@/types";
import { getRandomArrayElement } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdMoreVert } from "react-icons/md";
import { FiPlay } from "react-icons/fi";
import IconButton from "./elements/IconButton";
interface PlayListCardProps {
    playlist: Playlist;
}

export default function PlayListCard({playlist}: PlayListCardProps)  {
    const router = useRouter();
    const {
        id,
        owner,
        playlistName,
        songList,
    } = playlist;

    const songCount = songList.length;
    const imageSrc = getRandomArrayElement(songList).imageSrc;

    const onClickCard = () => {
        router.push(`/playlist?list=${id}`);
    }

    const onClickPlayButton = () => {
        console.log("clicked");
    }

    return (
        <article className="h-[240px] cursor-pointer group" onClick={onClickCard}>
            <section className="relative h-[136px]">
                <Image 
                    src={imageSrc} 
                    fill 
                    alt="playlist thumbnail" 
                    className="object-cover"
                />
                <div className="relative hidden group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]">
                    <div className="absolute top-2 right-4">
                        <IconButton icon={<MdMoreVert size={20}/>} />
                    </div>
                    <div 
                    onClick={onClickPlayButton}
                    className="absolute bottom-4 right-4 flex items-center justify-center 
                    transform-gpu transition-transform hover:scale-110
                    bg-[rgba(0,0,0,0.7)] w-[45px] h-[45px] rounded-full
                    hover:bg-[rgba(0,0,0,0.9)] pl-[1.5px]">
                        <FiPlay size={20}/>
                    </div>
                </div>
            </section>
            <section className="mt-2">
                <div>{playlistName}</div>
                <div className="text-neutral-500">{owner} - 트랙 {songCount}개</div>
            </section>
        </article>
    )
}