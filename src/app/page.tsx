import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images(){
  const images = await getMyImages()
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col w-48 h-48">
          <Link href={`/img/${image.id}`} passHref>
            <Image src={image.url} alt={image.name} width={480} height={480} style={{objectFit: "contain"}}/>
          </Link>
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
