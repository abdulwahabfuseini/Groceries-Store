"use client";


import { CartActions } from "@/Store/cartSlice";
import Button from "@/components/Button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Success = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  useEffect(() => {
    dispatch(CartActions.clearCart());
  });

  return (
    <div className="flex items-center justify-center w-full  bg-white h-screen sm:h-full md:h-screen px-4">
      <div className="max-w-md grid place-content-center place-items-center gap-y-5">
        <Image
          src="/SVG/check.gif"
          width={300}
          height={200}
          alt="check"
          objectFit="contain"
          className=""
        />
        <h1 className="text-2xl font-semibold text-center">
          Your Order has been accepted by <br className=" hidden " /> Groceries Store
        </h1>
        <p className="text-lg">
          <span className="uppercase font-semibold">
            {session?.user?.name},
          </span>{" "}
          Thank you for your order. Your items will be delivered to your
          doorstep as soon as possible!
        </p>
        <div className="flex items-center gap-x-5">
          <Button text="Back to home" url="/category" />
        </div>
      </div>
    </div>
  );
};

export default Success;
