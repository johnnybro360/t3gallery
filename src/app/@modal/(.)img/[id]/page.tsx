import { getImage } from "~/server/queries"

type Props = {
    params: {id: Promise<string>}
}

export default async function PhotoModal({params}: Props) {
    const {id: photoId} = await params

    const idAsNumber = Number(photoId)
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id")
    const image = await getImage(idAsNumber)
    return (<div>
        <img src={image.url} className="w-96" />
        </div>)
}