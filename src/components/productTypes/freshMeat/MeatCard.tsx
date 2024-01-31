"use client";

import { CardProps } from "@/contexts/Types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Heart } from "lucide-react";
import { useDispatch } from "react-redux";
import { Tooltip } from "antd";
import { FaPlus } from "react-icons/fa";
import { CartActions } from "@/Store/cartSlice";
import { FavoriteActions } from "@/Store/FavoritesSlice";
import { useSelector } from "react-redux";
import { selectFavoriteItems } from "@/Store/FavoritesSlice";

const MeatCard = ({ id, name, image, price }: CardProps) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const favoriteProducts = useSelector(selectFavoriteItems);

  const isFavorite = favoriteProducts.some((favorite) => favorite.id === id);

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

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(FavoriteActions.deleteFavorite(id));
      toast.success(`${name} removed from Favorites`);
    } else {
      dispatch(
        FavoriteActions.addToFavorite({
          id,
          name,
          image,
          price,
          quantity: 0,
        })
      );
      toast.success(`${name} added to Favorites`);
    }
  };

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="cardloader w-full"></div>
      ) : (
        <div className="bg-white rounded-lg relative">
          <Tooltip
            color="red"
            title={isFavorite ? "Remove From Favorite" : "Add To Favorite"}
            className="hidden lg:block"
          >
            <Heart
              fill={isFavorite ? "red" : "white"}
              onClick={handleToggleFavorite}
              className="absolute top-0 right-0  text-red-400 bg-red-100 p-1 w-9 h-9 rounded-bl-2xl z-40 hover:text-red-400 hover:bg-red-100 cursor-pointer duration-200"
            />
          </Tooltip>
          <Heart
            fill={isFavorite ? "red" : "white"}
            onClick={handleToggleFavorite}
            className="absolute top-0 right-0 lg:hidden text-red-400 bg-red-100 p-1 w-9 h-9 rounded-bl-2xl z-40 hover:text-red-400 hover:bg-red-100 cursor-pointer duration-200"
          />
          <Link href={`/category/meats/${name}`}>
            <div className="relative h-36 sm:h-40 w-full">
              <Image
                src={`/images/${image}`}
                fill
                alt={name}
                className="lg:hover:scale-105 object-contain"
              />
            </div>
            <div className="pb-2 px-3">
              <h1 className="pt-2 font-semibold text-lg">{name}</h1>
              <p className="font-semibold">
                GH₵: <span>{price.toLocaleString()}</span>
              </p>
            </div>
          </Link>
          <Tooltip color="red" title="Add to Cart" className="hidden lg:block">
            <FaPlus
              onClick={AddToCart}
              className="absolute bottom-0 right-0  text-red-400 bg-red-100 p-1.5 w-9 h-9 rounded-tl-2xl z-40 hover:text-red-400 hover:bg-red-100 cursor-pointer duration-200"
            />
          </Tooltip>
          <FaPlus
            onClick={AddToCart}
            className="absolute bottom-0 right-0 lg:hidden  text-red-400 bg-red-100 p-1.5 w-9 h-9 rounded-tl-2xl z-40 hover:text-red-400 hover:bg-red-100 cursor-pointer duration-200"
          />
        </div>
      )}
    </div>
  );
};

export default MeatCard;
