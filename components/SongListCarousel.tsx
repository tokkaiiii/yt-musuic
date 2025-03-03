import {  TopSong } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlayListCard from "./PlayListCard";
import { chunkArray } from "@/lib/utils";
import SongCard from "./SongCard";
interface SongListCarouselProps {
  title: string;
  subtitle?: string;
  Thumbnail?: React.ReactNode;
  songListTop10: TopSong[];
}

const SongColumn = ({songList = []}:{songList:TopSong[]}) => {
  return (
    <div className="flex flex-col gap-4">
      {songList.map((song, index) => (
        <SongCard key={index} song={song}/>
      ))}
    </div>
  )
}

export default function SongListCarousel({
  title,
  subtitle,
  Thumbnail,
  songListTop10,
}: SongListCarouselProps) {

  const songListChunks = chunkArray(songListTop10, 4);

  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3">
            {Thumbnail}
            <div className="flex flex-col justify-center">
              <div>
                {subtitle && <div className="text-neutral-500">{subtitle}</div>}
              </div>
              <div className="text-[34px] font-bold leading-[34px]">
                {title}
              </div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2"/>
              <CarouselNext className="left-2"/>
            </div>
          </div>
        </div>
        <CarouselContent className="mt-4">
            {
                songListChunks?.map((songList, index) => (   
                    <CarouselItem key={index} className="lg:basis-1/2">
                      <SongColumn songList={songList}/>
                    </CarouselItem>
                ))
            }
        </CarouselContent>
      </Carousel>
    </div>
  );
}
