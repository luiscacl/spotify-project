import { UserButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Topbar = () => {
  return (
    <div
      className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 
      backdrop-blur-md z-10
    "
    >
      <div className="flex gap-2 items-center">
        <img
          src="https://res.cloudinary.com/dftslwu7s/image/upload/v1741793311/songs_images/spotigyImg.png"
          className="size-8"
          alt="Spotify logo"
        />
        Spotify
      </div>
      <div className="flex items-center gap-4">
        <Link
          to={"/admin"}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <LayoutDashboardIcon className="size-4  mr-2" />
          Admin Dashboard
        </Link>

        <UserButton />
      </div>
    </div>
  );
};
export default Topbar;
