'use client'
import { useEffect } from "react";
import usePlayerState from "@/hooks/usePlayerState";
import PlayerContent from "./PlayerContent";
export default function PlayerWrapper() {
    const { isVisiblePlayer, setIsVisiblePlayer } = usePlayerState();

    if (!isVisiblePlayer) return null;

    return (
        <div className="fixed bottom-0 h-[72px] w-full bg-neutral-900">
            <PlayerContent />
        </div>
    )
}