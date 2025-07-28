import { getImage } from "~/server/queries";

export default async function FullPageImageView({id}: {id: number}){
    const image = await getImage(id)
    return (
            <img src={image.url} className="w-96" />
    )
}