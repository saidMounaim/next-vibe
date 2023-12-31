"use client";

import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();

  const classLink = "text-lg text-[#11235A] font-medium";

  return (
    <header className="py-5 shadow-md">
      <div className="lg:max-w-5xl mx-auto w-full lg:px-4 flex justify-between items-center">
        <Link href="/" className="text-4xl font-bold text-[#11235A]">
          Next <span className="text-[#7ED7C1]">Vibe</span>
        </Link>
        <ul className="flex items-center gap-x-7">
          <li className={classLink}>
            <Link href="/">Home</Link>
          </li>
          <li className={classLink}>
            <Link href="/properties">Properties</Link>
          </li>
          <li className={classLink}>
            <Link href="/agents">Agents</Link>
          </li>
        </ul>
        <div className="flex gap-x-3">
          {session?.user && (
            <Button
              onClick={() => signOut()}
              className="bg-[#11235A] text-white hover:bg-[#7ED7C1] transition"
            >
              Log out
            </Button>
          )}
          {!session && (
            <>
              <Button
                className="bg-[#11235A] text-white hover:bg-[#7ED7C1] transition"
                asChild
              >
                <Link href="/login">
                  <User />
                </Link>
              </Button>
              <Button
                className="bg-[#11235A] text-white hover:bg-[#7ED7C1] transition"
                asChild
              >
                <Link href="/register">Register</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
