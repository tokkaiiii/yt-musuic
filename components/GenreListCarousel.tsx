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
import GenreCard from "./GenreCard";
interface GenreListCarouselProps {
  title: string;
  subtitle?: string;
  Thumbnail?: React.ReactNode;
  genreList: string[];
}

const GenreColumn = ({genreList = []}:{genreList:string[]}) => {
  return (
    <div className="flex flex-col gap-4">
      {genreList.map((genre) => (
        <GenreCard key={genre} genre={genre}/>
      ))}
    </div>
  )
}

export default function GenreListCarousel({
  title,
  subtitle,
  Thumbnail,
  genreList,
  }: GenreListCarouselProps) {

const genreListChunks = chunkArray(genreList, 4);

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
                genreListChunks?.map((genreList, index) => (   
                    <CarouselItem key={index} className="basis-1/3 lg:basis-1/4">
                      <GenreColumn genreList={genreList}/>
                    </CarouselItem>
                ))
            }
        </CarouselContent>
      </Carousel>
    </div>
  );
}
