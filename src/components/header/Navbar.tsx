"use client";

import { Navigation } from "@/assets/Navigation";
import { Badge } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { StateProps } from "@/contexts/Types";
import { GrBasket } from "react-icons/gr";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const productData = useSelector((state: StateProps) => state.cart);
  const favoriteData = useSelector((state: StateProps) => state.cart);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 90 ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <div
      className={`${
        sticky
          ? "h-16 w-full top-0 left-0 fixed shadow-lg transition-all ease-in-out bg-white z-50"
          : "h-20 w-full bg-gray-100"
      } bg-white px-4 py-5`}
    >
      <nav
        aria-label="navbar"
        className="flex items-center justify-between mx-auto max-w-7xl"
      >
        <Link href="/category">
          <h4 className="text-xl sm:text-2xl font-semibold">Groceries Store</h4>
        </Link>
        <ul className="items-center hidden gap-6 lg:flex">
          {Navigation.map((navItem) => (
            <li key={navItem.id} className="text-lg">
              <Link href={navItem.path}>{navItem.display}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-end gap-5">
          <Link href="/myFavorite">
            <button>
              <Badge count={favoriteData?.length}>
                <FaHeartCircleCheck className="h-6 w-7" />
              </Badge>
            </button>
          </Link>
          <Link href="/shoppingCart">
            <button>
              <Badge count={productData?.length}>
                <GrBasket className="h-6 w-7" />
              </Badge>
            </button>
          </Link>
          {/* <Link href="/dashboard/profile" className="flex items-center gap-2">
            <button className="relative w-10 h-10 rounded-full lg:w-11 lg:h-11">
              <Image
                src="/images/delivery1.jpg"
                fill
                alt="profile"
                className="w-full h-full rounded-full"
                
              />
            </button>
            <span className="hidden text-xs font-medium lg:block">Hi, Abdul Wahab</span>
          </Link> */}
          <MobileNav />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;