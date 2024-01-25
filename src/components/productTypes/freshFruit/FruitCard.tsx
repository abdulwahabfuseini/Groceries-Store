"use client";

import { CardProps, StateProps } from "@/contexts/Types";
import { addToFavorite } from "@/redux/CartSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Heart } from "lucide-react";
import { GrBasket } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";

const FruitCard = ({ id, name, image, price }: CardProps) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 350);
  }, [isLoading]);

  const favoriteData = useSelector((state: StateProps) => state.cart);

  const isFavorite = (productId: any) => {
    return favoriteData?.some(
      (favoriteItem: { name: any }) => favoriteItem.name === productId
    );
  };

  return (
    <div>
      {isLoading ? (
        <div className="cardloader"></div>
      ) : (
        <div className="bg-white rounded-lg relative">
          <Heart
            fill={isFavorite(name) ? "red" : "white"}
            onClick={() => {
              dispatch(addToFavorite({ id, name, image, price }));
              if (isFavorite(name)) {
                toast.error(`${name} removed from favorites!`);
              } else {
                toast.success(`${name} added to favorites!`);
              }
            }}
            className="absolute top-2 right-2  text-orange-500 bg-orange-100 rounded-full p-1 w-8 h-8 z-40 hover:text-red-600 cursor-pointer duration-200"
          />
          <Link href={`/category/fruits/${name}`}>
            <div className="relative h-36 sm:h-44 w-full">
              <Image
                src={`/images/${image}`}
                fill
                alt="fruits"
                className="lg:hover:scale-105 object-contain"
              />
            </div>
          </Link>
          <div className="flex items-center justify-between p-2">
            <div>
              <h4 className="pt-2 font-semibold text-lg">{name}</h4>
              <p className="font-semibold">
                GH₵: <span>{price.toLocaleString()}</span>
              </p>
            </div>
            <Link href={`/category/fruits/${name}`}>
              <GrBasket className="h-6 w-6 " />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FruitCard;
