"use client";

import { signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { CgLogOut } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { GrBasket } from "react-icons/gr";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="py-3 px-4">
      <h1 className="text-xl pb-2 font-semibold">My Profile</h1>
      <div>
        <div className="grid place-items-center place-content-center gap-2">
          <Image
            src="/SVG/chefsvg.png"
            width={50}
            height={50}
            alt="profile"
            className=" object-contain "
          />
          <div>
            <h1 className="text-lg font-semibold">{session?.user?.name}</h1>
            <h6 className="text-sm"> {session?.user?.email}</h6>
          </div>
        </div>
        <div className="grid gap-2 pt-4">
          <Link href="/shoppingCart">
            <button className="flex items-center gap-2">
              <GrBasket className="h-5 w-5" />
              <h1 className="text-lg">Shopping Cart</h1>
            </button>
          </Link>
          <Link href="/myFavorite">
            <button className="flex items-center gap-3">
              <FaHeartCircleCheck className="h-5 w-5" />
              <h1 className="text-lg">My Favorite</h1>
            </button>
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut();
              router.push("/");
            }}
            className="flex items-center gap-3"
          >
            <CgLogOut className="h-6 w-6" />
            <h1 className="text-lg">Logout</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
