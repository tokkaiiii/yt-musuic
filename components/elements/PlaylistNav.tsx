"use client"

import { dummyPlaylistArray } from "@/lib/dummyData"
import { IoMdPlayCircle } from "react-icons/io"

export default function PlaylistNav({playlist}: {playlist: typeof dummyPlaylistArray[number]}) {
    const {id, owner, playlistName, songList} = playlist


    const onClickPlay = () => {
        console.log("play")
    }
    return (
        <li className="mx-3 px-4 h-[56px] flex flex-row items-center justify-between
        hover:bg-neutral-700 rounded-lg group">
            <div>
                <div className="text-[14px]">
                    {playlistName}
                </div>
                <div className="text-[12px] text-neutral-500">
                    {owner}
                </div>
            </div>
            <div>
                <div onClick={onClickPlay} className="hidden group-hover:block cursor-pointer">
                <IoMdPlayCircle size={30} />
                </div>
            </div>
        </li>
    )
}