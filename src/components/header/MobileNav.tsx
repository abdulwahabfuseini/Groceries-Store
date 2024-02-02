"use client";

import { Drawer } from "antd";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import { MobileNavigation } from "@/assets/Navigation";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="lg:hidden  relative">
      <button onClick={() => setOpenMenu(true)}>
        <FaBarsStaggered className="h-6 w-7" />
      </button>
      <div
        className={`${
          openMenu ? "left-0" : "left-full"
        } fixed top-0 grid w-full text-background transition-all z-50 duration-500 bg-white shadow-lg shadow-green-500/20 py-5 `}
      >
        <div className="flex items-center justify-between px-3 pb-5">
          <Link href="/overview">
            <h1 className="text-2xl font-semibold">Groceries Store</h1>
          </Link>
          <LiaTimesSolid
            className="h-7 w-7 sm:h-9 sm:w-9 font-bold"
            onClick={() => setOpenMenu(false)}
          />
        </div>
        <nav>
          <ul>
            {MobileNavigation.map((navItem) => (
              <li
                key={navItem.id}
                className="flex items-center justify-between w-full px-4 py-3 sm:py-4 text-lg uppercase border-t border-b border-gray-100 hover:text-green-600 sm:text-xl"
              >
                <Link href={navItem.path}>{navItem.display}</Link>
              </li>
            ))}
          </ul>
        </nav>
       <div className="p-3">
       <button
            onClick={() => signOut()}
            className="py-2 px-4 bg-green-700 text-xl  text-white rounded-lg"
          >
            Sign Out
          </button>
       </div>
      </div>
    </div>
  );
};

export default MobileNav;
