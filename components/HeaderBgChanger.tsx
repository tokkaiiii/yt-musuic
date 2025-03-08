'use client'

import useUIState from "@/hooks/useUIState"
import { useEffect } from "react"
export default function HeaderBgChanger({imageSrc}: {imageSrc: string}) {
    const { setHeaderImageSrc } = useUIState();

    useEffect(() => {
        if (imageSrc) {
            setHeaderImageSrc(imageSrc);
        }
    }, [imageSrc, setHeaderImageSrc]);

    return (
        <>
        </>
    )
}