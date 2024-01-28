"use client";

import { Drawer } from "antd";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import { MobileNavigation } from "@/assets/Navigation";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  return (
    <div className="lg:hidden">
      <button onClick={() => setOpenMenu(true)}>
        <FaBarsStaggered className="h-6 w-7" />
      </button>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        closable={false}
        contentWrapperStyle={{ width: "100%", height: "100%" }}
        className=" transition-all ease-in-out bg-black shadow- h-1 shadow-green-500/20"
        style={{ padding: 0 }}
      >
        <div className="-mx-5 ">
          <div className="flex items-center justify-between pb-4 px-3">
            <Link href="/category">
              <h1 className="text-2xl font-semibold">Groceries Store</h1>
            </Link>
            <LiaTimesSolid
              className="h-6 w-7 font-bold"
              onClick={() => setOpenMenu(false)}
            />
          </div>
          <nav>
            <ul>
              {MobileNavigation.map((navItem) => (
                <li
                  key={navItem.id}
                  className="flex items-center justify-between w-full px-4 py-3 text-lg uppercase border-t border-b border-gray-100 hover:text-green-600 sm:text-xl"
                >
                  <Link href={navItem.path}>{navItem.display}</Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                signOut();
                router.push("/");
              }}
              className="py-1.5 px-4 bg-green-700 text-xl m-6 text-white rounded-lg"
            >
              Sign Out
            </button>
          </nav>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileNav;
