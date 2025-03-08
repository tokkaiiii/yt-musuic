import { getPlaylistById } from "@/lib/dummyData"
import { getRandomArrayElement } from "@/lib/utils"
import { permanentRedirect } from "next/navigation"
import HeaderBgChanger from "@/components/HeaderBgChanger"
import PagePadding from "@/components/PagePadding"
import PlayListHead from "@/components/PlayListHead"
import SongCardRowExpand from "@/components/SongCardRowExpand"
interface PlaylistProps {
    searchParams: { list: string }
}

export default async function Playlist({ searchParams }: PlaylistProps) {
    const playlist = await getPlaylistById(Number(searchParams.list))
    if (!playlist) {
        permanentRedirect("/")
    }

    const imageSrc = getRandomArrayElement(playlist.songList)?.imageSrc

    return (
            <PagePadding>
                <HeaderBgChanger imageSrc={imageSrc} />
                <div className="mt-12"></div>
                <PlayListHead playlist={playlist} />
                <div className="mt-12"></div>
                <section className="flex flex-col gap-2">
                    {playlist.songList.map((song, index) => (
                            <SongCardRowExpand key={index} song={song} />
                    ))}
                </section>
            </PagePadding>
    )
}