import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import defaultAvatar from "../../public/avatar.png";

const DropdownUser = (session: any) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative w-[40px] h-[40px] rounded-md overflow-hidden">
          {session?.user?.image ? (
            <>
              <Image src={session?.user?.image} alt="Avatar" fill />
            </>
          ) : (
            <>
              <Image src={defaultAvatar} alt="Avatar" fill />
            </>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/user/profile" className="w-full">
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/user/edit" className="w-full">
              Edit
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut()}
          className="w-full cursor-pointer"
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownUser;
