"use client";

import { CardProps } from "@/contexts/Types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { CartActions } from "@/Store/cartSlice";
import { FavoriteActions } from "@/Store/FavoritesSlice";
import { FaTrash } from "react-icons/fa6";

const FavoriteCard = ({ id, name, image, price }: CardProps) => {
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
    toast.success(`${name} Added to cart`);
  };

  const DeleteFromFavorite = () => {
    dispatch(FavoriteActions.deleteFavorite(id));
    toast.error(`${name} Removed from favorite`);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 390);
  }, [isLoading]);

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="cardloader w-full"></div>
      ) : (
        <div className="bg-white rounded-lg relative cursor-pointer overflow-hidden">
          <Tooltip color="red" title="Remove From favorite">
            <FaTrash
              onClick={DeleteFromFavorite}
              className="absolute top-1 right-1 hidden lg:block  text-red-600 p-1.5 w-7 h-7 z-40 cursor-pointer duration-200"
            />
          </Tooltip>
          <FaTrash
            onClick={DeleteFromFavorite}
            className="absolute top-1 right-1  lg:hidden  text-red-600 p-1.5 w-7 h-7 z-40 cursor-pointer duration-200"
          />
          <div className="relative h-36 sm:h-44 w-full">
            <Image
              src={`/images/${image}`}
              fill
              alt="fruits"
              className="lg:hover:scale-105 object-contain"
            />
          </div>

          <div className="py-2 px-3">
            <h4 className="pt-2 font-semibold text-lg">{name}</h4>
            <p className="font-medium">
              GH₵: <span>{price.toLocaleString()}</span>
            </p>

            <Tooltip color="yellow" title="Add to favorite">
              <FaPlus
                onClick={AddToCart}
                className="absolute bottom-0 right-0 hidden lg:block  text-yellow-400 bg-yellow-100 p-1.5 w-9 h-9 rounded-tl-2xl z-40 hover:text-yellow-400 hover:bg-yellow-100 cursor-pointer duration-200"
              />
            </Tooltip>
            <FaPlus
              onClick={AddToCart}
              className="absolute bottom-0 right-0 lg:hidden  text-yellow-400 bg-yellow-100 p-1.5 w-9 h-9 rounded-tl-2xl z-40 hover:text-yellow-400 hover:bg-yellow-100 cursor-pointer duration-200"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoriteCard;
