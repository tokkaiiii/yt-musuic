import { dummyAllSongList } from "@/lib/dummyData";
import { Song } from "@/types";
import { create } from "zustand";

interface PlayerState {
  isVisiblePlayer: boolean;
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => void;
  activeSong?: Song | null;
  prevPlayerQueue: Song[];
  nextPlayerQueue: Song[];
  setActiveSong: (song: Song) => void;
  setPrevPlayerQueue: (queue: Song[]) => void;
  setNextPlayerQueue: (queue: Song[]) => void;
  addSongList: (songList: Song[]) => void;
  playNext: () => void;
  playBack: () => void;
}

const usePlayerState = create<PlayerState>((set) => ({
  isVisiblePlayer: false,
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => set({ isVisiblePlayer }),
  activeSong: null,
  prevPlayerQueue: [],
  nextPlayerQueue: [
    dummyAllSongList[1],
    dummyAllSongList[2],
    dummyAllSongList[3],
  ],
  setActiveSong: (song: Song) => set({ activeSong: song }),
  setPrevPlayerQueue: (queue: Song[]) => set({ prevPlayerQueue: queue }),
  setNextPlayerQueue: (queue: Song[]) => set({ nextPlayerQueue: queue }),
  addSongList: (songList: Song[]) =>
    set((prev) => {
      const prevSong = prev.activeSong;
      const cloneSongList = [...songList];
      const currentSong = cloneSongList.splice(0, 1)?.[0];

      return {
        activeSong: currentSong,
        prevPlayerQueue: prevSong
          ? [prevSong, ...prev.prevPlayerQueue]
          : prev.prevPlayerQueue,
        nextPlayerQueue: [...cloneSongList],
        isVisiblePlayer: true,
      };
    }),
  playNext: () =>
    set((prev) => {
      const currentSong = prev.activeSong;
      const nextSrc = prev.nextPlayerQueue.splice(0, 1)?.[0];
      return {
        activeSong: nextSrc,
        nextPlayerQueue: prev.nextPlayerQueue,
        prevPlayerQueue: [
          ...(currentSong ? [currentSong] : []),
          ...prev.prevPlayerQueue,
        ],
      };
    }),
  playBack: () =>
    set((prev) => {
      const currentSong = prev.activeSong;
      const prevSrc = prev.prevPlayerQueue.splice(0, 1)?.[0];
      return {
        activeSong: prevSrc,
        prevPlayerQueue: prev.prevPlayerQueue,
        nextPlayerQueue: [
          ...(currentSong ? [currentSong] : []),
          ...prev.nextPlayerQueue,
        ],
      };
    }),
}));

export default usePlayerState;
