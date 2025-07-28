import { getImage } from "~/server/queries";

export default async function FullPageImageView({ id }: { id: number }) {
    const image = await getImage(id)
    return (
        <div className="flex w-full h-full min-w-0 ">
            <div className="flex flex-shirink justify-center items-center">
            <img src={image.url} className="object-contain flex-shrink" />
            </div>
            <div className="flex w-48 flex-col flex-shrink-0 border-l">
                <div className="text-xl font-bold">{image.name}</div>
            </div>
        </div>
    )
}