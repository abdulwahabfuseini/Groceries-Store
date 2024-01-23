"use client";

import { Drawer } from "antd";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import { MobileNavigation } from "@/assets/Navigation";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="lg:hidden">
      <button onClick={() => setOpenMenu(true)}>
        <FaBarsStaggered className="h-6 w-7" />
      </button>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        closable={false}
        contentWrapperStyle={{ width: "100%", height: 370, }}
        className=" transition-all ease-in-ou"
      >
        <div className="flex items-center justify-between border-b-4 pb-3">
          <Link href="/category">
            <h4 className="text-2xl font-semibold">Groceries Store</h4>
          </Link>
          <LiaTimesSolid
            className="h-6 w-7 font-bold"
            onClick={() => setOpenMenu(false)}
          />
        </div>
        <nav>
          <ul>
            {MobileNavigation.map((navItem) => (
              <li key={navItem.id} className="text-xl py-2.5 font-semibold">
                <Link href={navItem.path}>{navItem.display}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </div>
  );
};

export default MobileNav;
