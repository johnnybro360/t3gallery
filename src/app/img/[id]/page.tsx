import FullPageImageView from "~/app/components/full-image-page";

export const dynamicParams = false;

type Props = {
    params: Promise<{id: string}>
}

export default async function PhotoPage({params}: Props) {
    const photoId = (await params).id

    const idAsNumber = Number(photoId)
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id")

    return (<div className="h-full">
        <FullPageImageView id={idAsNumber} />
    </div>)
}