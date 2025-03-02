export default function Playlist({ searchParams }: { searchParams: { list: string }}) {
    console.log(searchParams.list)
    return (
        <div>Playlist {searchParams.list}</div>
    )
}