import { getImage } from "~/server/queries"
import { Modal } from "./modal"
import FullPageImageView from "~/app/components/full-image-page"

type Props = {
    params: Promise<{id: string}>
}

export default async function PhotoModal({params}: Props) {
    const photoId = (await params).id

    const idAsNumber = Number(photoId)
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id")

return (<Modal>
        <FullPageImageView id={idAsNumber} />
        </Modal>)
}