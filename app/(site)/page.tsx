import PagePadding from "@/components/PagePadding";
import Category from "./components/Category";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray , getPlaylistById } from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";

export default async function Home() {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  const dummyPlaylistArray2 = [await getPlaylistById(1)];
  const dummyPlaylistArray3 = [await getPlaylistById(2)];
  const dummyPlaylistArray4 = [await getPlaylistById(3)];
  return (
    <PagePadding>
      <div className="min-h-[600px<]">
        <div className="mt-9"></div>
        <Category />
        <div className="mt-12">
          {/* carousel */}
          <PlayListCarousel
            title="다시 듣기"
            subtitle="도도"
            playlistArray={[...dummyPlaylistArray1]}
            Thumbnail={
              <div className="w-[56px] h-[56px]">
                <UserIcon size="lg" />
              </div>
            }
          />
          {/* carousel */}
          <div className="mt-20">
            <PlayListCarousel
              title="케이시 - Full Bloom"
              subtitle="새로운 앨범"
              playlistArray={[...dummyPlaylistArray2]}
            />
          </div>
          {/* carousel */}
          <div className="mt-20">
            <PlayListCarousel
              title="커뮤니티 제공"
              playlistArray={[...dummyPlaylistArray3]}
            />
          </div>
          <div className="mt-20">
            <PlayListCarousel
              title="커버 및 리믹스"
              playlistArray={[...dummyPlaylistArray4]}
            />
          </div>
        </div>
      </div>
    </PagePadding>
  );
}
