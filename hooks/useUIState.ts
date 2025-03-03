import { create } from "zustand"

interface UIState {
    homeCategory: string
    headerImageSrc: string
    setHomeCategory: (category: string) => void
    setHeaderImageSrc: (src: string) => void
}

const useUIState = create<UIState>((set) => ({
    homeCategory: "",
    headerImageSrc: "https://images.unsplash.com/photo-1536796038751-bb018f95ca01?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    setHomeCategory: (category: string) => set({ homeCategory: category }),
    setHeaderImageSrc: (src: string) => set({ headerImageSrc: src }),
}))

export default useUIState
