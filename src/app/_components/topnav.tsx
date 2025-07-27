"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

function TopNav() {
    const router = useRouter();

    return (
        <nav className="flex w-full justify-between items-center  border-b p-4 text-xl font-semibold">
            <div>Gallery</div>
            <div className="flex flex-row">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UploadButton endpoint="imageUploader" 
                    onClientUploadComplete={() => {
                        router.refresh();
                    }}/>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default TopNav;