import { generateRandomHexColor } from "@/lib/utils";

export default function GenreCard({genre}:{genre:string}) {
    const hex = generateRandomHexColor();
  return (
    <div className="flex flex-row h-[48px] w-full cursor-pointer bg-neutral-800 rounded-lg">
        <div style={{backgroundColor: hex}} className="w-2 h-full rounded-l-lg">
        </div>
        <div className="px-4 flex justify-center items-center">
            {genre}
        </div>
    </div>
  )
}