"use client";

import { CardProps } from "@/contexts/Types";
import Image from "next/image";


const FavoriteCard = ({ name, image, price }: CardProps) => {


  return (
    <div>
      <div className="bg-white rounded-lg ">
        <div className="relative  h-36 sm:h-44 w-full">
          <Image
            src={`/images/${image}`}
            fill
            alt="favorite"
            className="lg:hover:scale-105 object-contain"
          />
        </div>
        <div className="flex items-center justify-between p-2">
          <div>
            <h4 className="pt-2 font-semibold text-lg">{name}</h4>
            <p className=" font-semibold">
              GH₵: <span>{price.toLocaleString()}</span>
            </p>
          </div>
          {/* <button onClick={() => setFavorite((prev) => !prev)}>
            {favorite ? (
              <FaHeart className="w-6 h-6 text-red-600" />
            ) : (
              <FaRegHeart className="w-6 h-6" />
            )}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
