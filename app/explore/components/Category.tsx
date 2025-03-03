import { FiMusic } from "react-icons/fi";
import { FiBarChart } from "react-icons/fi";
import { FiSmile } from "react-icons/fi";


type CategoryMenueProps = {
    icon: React.ReactNode;
    label: string;
}

const CategoryMenue = ({icon,label}:CategoryMenueProps) => {
return(
    <div className="w-full h-[56px] py-4 px-[24px] flex flex-row items-center gap-4
    bg-neutral-700 text-[20px] cursor-pointer rounded-sm
    hover:bg-neutral-800 transition">
        {icon}
        {label}
    </div>
)
}

export default function Category (){
    return (
        <div className="w-full flex flex-col gap-4 lg:flex-row">
            <CategoryMenue icon={<FiMusic color="#AAAAAA"/>} label="최신음악"/>
            <CategoryMenue icon={<FiBarChart color="#AAAAAA"/>} label="차트"/>
            <CategoryMenue icon={<FiSmile color="#AAAAAA"/>} label="분위기 및 장르"/>
        </div>
    )
}