"use client";
import Image from "next/image";
import UserIcon from "./UserIcon";
import PagePadding from "./PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "./ui/drawer";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import useUIState from "@/hooks/useUIState";
const HeaderDrawer = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        {/* 로고 */}
        {/* 네비게이션 + 재생목록 */}
        <div className="py-3">
          <div className="px-3">
            <Logo isInDrawer onClickClose={() => setIsOpen(false)} />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default function Header({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const { headerImageSrc } = useUIState()

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = headerRef.current?.scrollTop;
      setIsScrolled(scrollValue !== 0);
    };
    headerRef.current?.addEventListener("scroll", handleScroll);
    return () => headerRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="relative overflow-y-auto h-full w-full">
      {/* bg section */}
      <section className="absolute top-0 w-full ">
        <div className="relative w-full h-[400px]">
          <Image
            fill
            alt="media-image"
            className="object-cover"
            src={ 
              headerImageSrc ||
              "https://images.unsplash.com/photo-1536796038751-bb018f95ca01?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <div className="absolute top-0 bg-black opacity-40 w-full h-[400px]"></div>
          <div className="absolute top-0 bg-gradient-to-t from-black w-full h-[400px]"></div>
        </div>
      </section>
      {/* search section */}
      <section
        className={cn("sticky top-0 left-0 z-10", isScrolled ? "bg-black" : "")}
      >
        <PagePadding>
          <div className="h-[64px] flex flex-row items-center justify-between">
            <article
              className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center 
            bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500"
            >
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className="h-full w-full bg-transparent"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
                type="text"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row items-center gap-6">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
}
