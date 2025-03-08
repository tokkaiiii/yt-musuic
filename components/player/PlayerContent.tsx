"use client";
import { Slider as PlayerSlider } from "@/components/ui/playerSlider";
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoShuffle, IoVolumeHighOutline } from "react-icons/io5";
import { AiFillCaretUp, AiOutlinePause } from "react-icons/ai";
import { useAudio } from "react-use";
import usePlayerState from "@/hooks/usePlayerState";
import { ClipLoader } from "react-spinners";
import { RiPlayFill } from "react-icons/ri";
import Image from "next/image";
import { RxLoop } from "react-icons/rx";
import { useEffect, useCallback } from "react";
export default function PlayerContent() {
  const { activeSong, prevPlayerQueue, nextPlayerQueue ,playBack ,playNext } = usePlayerState();
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src || "",
    // src: "/music/CattyBGM - 고양이 코.mp4",
    autoPlay: true,
  });

  const isLoading = activeSong?.src && state.buffered.length === 0;

  const onClickPrevButton = () => {
    if(state.playing && state.time > 10) {
        controls.seek(0);
        return;
    }
    if(prevPlayerQueue.length === 0) {
        return;
    }
    playBack();
  };
  const onClickNextButton = useCallback(() => {
    if(nextPlayerQueue.length === 0) {
        controls.pause();
    }
    playNext();
  }, [nextPlayerQueue, controls, playNext]);

  const onClickPlayButton = () => {
    if(activeSong){
        controls.play();
    }else{
        playNext();
    }
  };
  const onClickPauseButton = () => {
    controls.pause();
  };

  useEffect(() => {
    ref.current?.addEventListener("ended", onClickNextButton);
    return () => {
      ref.current?.removeEventListener("ended", onClickNextButton);
    }
  }, [ref, onClickNextButton]);

  return (
    <div className="h-full w-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider
          className="w-full"
          defaultValue={[0]}
          max={state.duration}
          value={[state.time]}
          onValueChange={(value) => {
            controls.seek(Number(value));
          }}
        />
      </div>
      {audio}
      <section className="flex flex-row items-center justify-between w-full h-full px-2 lg:px-6">
        <div className="h-full flex flex-row items-center gap-1 lg:gap-8">
          <IoPlaySkipBackSharp
            size={24}
            className="cursor-pointer"
            onClick={onClickPrevButton}
          />
          {isLoading ? (
            <ClipLoader color="#fff" size={24} />
          ) : state.playing ? (
            <AiOutlinePause
              size={40}
              className="cursor-pointer"
              onClick={onClickPauseButton}
            />
          ) : (
            <RiPlayFill
              size={40}
              className="cursor-pointer"
              onClick={onClickPlayButton}
            />
          )}
          <IoPlaySkipForwardSharp
            size={24}
            className="cursor-pointer"
            onClick={onClickNextButton}
          />
        </div>
        <article>
          <div className="flex flex-row gap-4 items-center">
            <div className="w-[40px] h-[40px] relative">
              <Image
                fill
                src={activeSong?.imageSrc || ""}
                alt={"image"}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div>{activeSong?.name}</div>
              <div className="text-neutral-500 text-[14px]">{activeSong?.channel} • 조회수 7.2만회 • 좋아요 1.7천개</div>
            </div>
          </div>
        </article>
        <div className="flex flex-row gap-2">
            <div className="hidden lg:flex flex-row gap-2">
                <IoVolumeHighOutline size={24} className="cursor-pointer"/>
                <IoShuffle size={24} className="cursor-pointer"/>
                <RxLoop size={24} className="cursor-pointer"/>
            </div>
            <div>
                <AiFillCaretUp size={24} className="cursor-pointer"/>
            </div>
        </div>
      </section>
    </div>
  );
}
