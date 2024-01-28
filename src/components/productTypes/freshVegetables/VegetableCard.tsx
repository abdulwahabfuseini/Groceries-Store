"use client";

import { CardProps } from "@/contexts/Types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tooltip } from "antd";
import toast from "react-hot-toast";
import { Heart } from "lucide-react";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { CartActions } from "@/Store/cartSlice";
import { FavoriteActions } from "@/Store/FavoritesSlice";

const VegetableCard = ({ id, name, image, price }: CardProps) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const AddToCart = () => {
    dispatch(
      CartActions.addToCart({
        id,
        name,
        image,
        price,
        totalPrice: 0,
        quantity: 0,
        totalQuantity: 0,
      })
    );
    toast.success(`${name} added to cart`);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 350);
  }, [isLoading]);

  const AddToFavorite = () => {
    dispatch(
      FavoriteActions.addToFavorite({
        id,
        name,
        image,
        price,
        quantity: 0,
      })
    );
    toast.success(`${name} added to Favorite`);
  };

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="cardloader w-full"></div>
      ) : (
        <div className="bg-white rounded-lg relative">
          <Tooltip color="green" title="Add to favorite">
            <Heart
              onClick={AddToFavorite}
              className="absolute top-0 right-0  text-green-500 bg-green-100 p-1 w-9 h-9 rounded-bl-2xl z-40 hover:text-white hover:bg-green-500 cursor-pointer duration-200"
            />
          </Tooltip>
          <Link href={`/category/fruits/${name}`}>
            <div className="relative h-36 sm:h-44 w-full">
              <Image
                src={`/images/${image}`}
                fill
                alt={name}
                className="lg:hover:scale-105 object-contain"
              />
            </div>
            <div className="py-2 px-3">
              <h1 className="pt-2 font-semibold text-lg">{name}</h1>
              <p className="font-semibold">
                GH₵: <span>{price.toLocaleString()}</span>
              </p>
            </div>
          </Link>
          <Tooltip color="green" title="Add to Cart">
            <FaPlus className="absolute bottom-0 right-0  text-green-500 bg-green-100 p-1.5 w-9 h-9 rounded-tl-2xl z-40 hover:text-white hover:bg-green-500 cursor-pointer duration-200" />
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export default VegetableCard;
