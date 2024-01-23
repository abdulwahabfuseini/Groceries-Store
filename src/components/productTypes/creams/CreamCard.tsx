"use client";

import { CardProps } from "@/contexts/Types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const CreamCard = ({ name, image, price }: CardProps) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div>
      <div className="bg-white rounded-lg ">
        <Link href={`/category/iceCreams/${name}`}>
          <div className="relative  h-36 sm:h-44 w-full">
            <Image
              src={`/images/${image}`}
              fill
              alt="iceCreams"
              className="lg:hover:scale-105 object-contain"
            />
          </div>
        </Link>
        <div className="flex items-center justify-between p-2">
          <div>
            <h4 className="pt-2 font-semibold text-lg">{name}</h4>
            <p className=" font-semibold">
              GH₵: <span>{price.toLocaleString()}</span>
            </p>
          </div>
          <button onClick={() => setFavorite((prev) => !prev)}>
            {favorite ? (
              <FaHeart className="w-6 h-6 text-red-600" />
            ) : (
              <FaRegHeart className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreamCard;
