
type Props = {
    params: {id: Promise<string>}
}

export default async function PhotoModal({params}: Props) {
    const {id: photoId} = await params

    return (<div>
        {photoId}
        </div>)
}