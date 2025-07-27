import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images(){
  const images = await getMyImages()
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} alt={`Image ${image.id}`} className="flex flex-colw-48" />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  )
}

export default async function HomePage() {

  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
