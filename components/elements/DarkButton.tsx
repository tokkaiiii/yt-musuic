import { cn } from "@/lib/utils";

interface DarkButtonProps {
    icon?: React.ReactNode;
    label: string;
    className?: string;
    onClick?: () => void;
}

export default function DarkButton({ icon = null, label, className, ...props }: DarkButtonProps) {
    return (
        <div className={cn("cursor-pointer border border-neutral-700 bg-black hover:bg-neutral-700 text-white rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2", className)} 
        {...props}>
            <span>{icon}</span>
            <span>{label}</span>
        </div>
    )
}