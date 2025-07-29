import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";
import { Button } from "~/components/ui/button";
import { deleteImage } from "~/server/queries";

export default async function FullPageImageView({ id }: { id: number }) {
    const image = await getImage(id)

    const clerk = await clerkClient();
    const uploaderInfo = await clerk.users.getUser(image.userId);
    return (
        <div className="flex w-full h-full min-w-0 ">
            <div className="flex flex-shirink justify-center items-center">
            <img src={image.url} className="object-contain flex-shrink" />
            </div>
            <div className="flex w-48 flex-col flex-shrink-0 border-l">
                <div className="text-lg border-b text-center p-2">{image.name}</div>
                <div className="p-2">
                    <span>Uploaded By:</span>
                    <span>{uploaderInfo.fullName}</span>
                    </div>
                    <div className="p-2">
                    <span>Created On</span>
                    <span>{new Date(image.createdAt).toLocaleDateString()}</span>
                    </div>

                    <div className="p-2">
                        <form action={async () => {
                            "use server";
                            await deleteImage(id);
                        }}>
                        <Button variant="destructive" type="submit">Delete</Button>
                        </form>
                    </div>
            </div>
        </div>
    )
}