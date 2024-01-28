"use client";

import { Navigation } from "@/assets/Navigation";
import { Badge } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectCartProducts } from "@/Store/cartSlice";
import { GrBasket } from "react-icons/gr";
import MobileNav from "./MobileNav";
import { signOut, useSession } from "next-auth/react";
import { selectFavoriteItems } from "@/Store/FavoritesSlice";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { data: session } = useSession();
  const cartProducts = useSelector(selectCartProducts);
  const favoriteProducts = useSelector(selectFavoriteItems);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 90 ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <div
      className={`${
        sticky
          ? "h-16 w-full top-0 left-0 fixed shadow-lg shadow-green-500/20 transition-all ease-in-out bg-white z-50 py-4"
          : "h-20 w-full bg-gray-100 py-6"
      } bg-white px-3 sm:px-5 `}
    >
      <nav
        aria-label="navbar"
        className="flex items-center justify-between mx-auto max-w-7xl"
      >
        <Link href="/category">
          <h1 className="text-xl sm:text-2xl font-semibold">Groceries Store</h1>
        </Link>
        <ul className="items-center hidden gap-6 lg:flex">
          {Navigation.map((navItem) => (
            <li key={navItem.id} className="text-lg font-medium">
              <Link href={navItem.path}>{navItem.display}</Link>
            </li>
          ))}
        </ul>
        {!session?.user ? (
          <div className="flex items-end gap-4 sm:gap-5">
            <Link href="/myFavorite">
              <button>
                <Badge count={favoriteProducts.length}>
                  <FaHeartCircleCheck className="h-6 w-7" />
                </Badge>
              </button>
            </Link>
            <Link href="/shoppingCart">
              <button>
                <Badge count={cartProducts.items?.length}>
                  <GrBasket className="h-6 w-7" />
                </Badge>
              </button>
            </Link>
            <button
              onClick={() => {
                signOut();
                router.push("/");
              }}
              className=" cursor-pointer hidden lg:block bg-green-600 rounded-md text-white font-semibold px-2 py-1 hover:bg-blue-600 hover:trasnsition-all hover:ease-in hover:scale-95 "
            >
              Sign Out
            </button>
            {/* <Link href="/dashboard/profile" className="flex items-center gap-2">
            <button className="relative w-10 h-10 rounded-full lg:w-11 lg:h-11">
              <Image
                src="/images/delivery1.jpg"
                fill
                alt="profile"
                className="w-full h-full rounded-full"
                
              />
            </button>
            <span className="hidden text-xs font-medium lg:block">Hi, {session?user.name}</span>
          </Link> */}
            <MobileNav />
          </div>
        ) : (
          <Link href="/signin">
            <button className=" bg-green-600 rounded-md text-white font-semibold px-2 py-1 hover:bg-blue-600 hover:trasnsition-all hover:ease-in hover:scale-95  text-lg">
              Sign In
            </button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
