export default function Channel({ params }: { params: { id: string }}) {
    console.log(params.id)
    return (
        <div>
            <h1>Channel {params.id}</h1>
        </div>
    )
}