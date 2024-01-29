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
import Profile from "./Profile";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
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
          <div className="hidden lg:block">
            {session?.user ? (
              <button
                onClick={() => setOpenProfile((prev) => !prev)}
                className="rounded-full lg:w-11 lg:h-11 border flex items-center justify-center"
              >
                <Image
                  src="/SVG/chefsvg.png"
                  width={30}
                  height={30}
                  alt="profile"
                  className=" object-contain "
                />

                <div
                  className={`${
                    openProfile ? "right-12" : "-right-96"
                  } fixed top-20 grid w-64 text-background transition-all z-50 duration-500 bg-white shadow-lg shadow-green-500/20`}
                >
                  <Profile />
                </div>
              </button>
            ) : (
              <Link href="/signin">
                <button className=" bg-green-600 rounded-md text-white font-semibold px-2 py-1 hover:bg-blue-600 hover:trasnsition-all hover:ease-in hover:scale-95  text-lg">
                  Sign In
                </button>
              </Link>
            )}
          </div>
          {/* {session?.user?.name}, */}

          <MobileNav />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
