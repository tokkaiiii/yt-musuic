import { cn } from "@/lib/utils";

interface WhiteButtonProps {
    icon?: React.ReactNode;
    label: string;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export default function WhiteButton({ icon = null, label, onClick, className, ...props }: WhiteButtonProps) {
    return (
        <div 
        {...props}
        className={cn("cursor-pointer bg-white hover:bg-neutral-200 text-black rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2", className)} 
        onClick={onClick}>
            <span>{icon}</span>
            <span>{label}</span>
        </div>
    )
}