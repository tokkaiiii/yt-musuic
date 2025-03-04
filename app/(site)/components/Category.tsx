'use client'
import useUIState from "@/hooks/useUIState"
import { homeCategoryList } from "@/lib/dummyData"
import { cn } from "@/lib/utils"
export default function Category() {
    const { homeCategory, headerImageSrc, setHomeCategory, setHeaderImageSrc } = useUIState()

    const onClickCategory = (category: { label: string, src: string }) => {
        if (homeCategory === category.label) {
            setHomeCategory("")
            setHeaderImageSrc("")
        } else {
            setHomeCategory(category.label)
            setHeaderImageSrc(category.src)
        }
    }

    return (
        <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
            {homeCategoryList.map((category) => (
                <li key={category.label}
                    onClick={() => onClickCategory(category)}
                    className={cn("h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer",
                        homeCategory === category.label && "bg-white text-black hover:bg-white")}    >
                        {category.label}
                </li>
            ))}
        </ul>
    )
}