import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function TopNav() {
    return (
      <nav className="flex w-full justify-between items-center p-4 text-xl font-semibold">
        <div>Gallery</div>
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }

  export default TopNav;