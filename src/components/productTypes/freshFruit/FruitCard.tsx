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
import { FaEye } from "react-icons/fa6";

const FruitCard = ({ id, name, image, price }: CardProps) => {
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
    toast.success(`${name} Added to cart`);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 350);
  }, [isLoading]);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(FavoriteActions.deleteFavorite(id));
      toast.error(`${name} Removed from Favorites`);
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
      toast.success(`${name} Added to Favorites`);
    }
  };

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="cardloader w-full"></div>
      ) : (
        <div className="bg-white rounded-lg relative overflow-hidden">
          <Tooltip
            color="yellow"
            title={isFavorite ? "Remove From Favorite" : "Add To Favorite"}
            className="hidden lg:block"
          >
            <Heart
              fill={isFavorite ? "red" : "white"}
              onClick={handleToggleFavorite}
              className="absolute top-0 right-0  text-yellow-400 bg-yellow-100 p-1 w-9 h-9 rounded-bl-2xl z-40 hover:text-yellow-400 hover:bg-yellow-100 cursor-pointer duration-200"
            />
          </Tooltip>
          <Heart
            fill={isFavorite ? "red" : "white"}
            onClick={handleToggleFavorite}
            className="absolute top-0 right-0 lg:hidden text-yellow-400 bg-yellow-100 p-1 w-9 h-9 rounded-bl-2xl z-40 hover:text-yellow-400 hover:bg-yellow-100 cursor-pointer duration-200"
          />
          
          <Link href={`/category/fruits/${name}`}>
            <div className="relative h-36 sm:h-40 w-full group">
              <Image
                src={`/images/${image}`}
                fill
                alt={name}
                className="lg:group-hover:scale-110 object-contain"
              />
              <button className="bg-black top-0 left-0 w-full h-full absolute bg-opacity-20 right-0  hidden group-hover:flex items-center justify-center">
              <FaEye className="text-white text-3xl" />
              </button>
            </div>
            <div className="pb-2 px-3">
              <h1 className="pt-2 font-semibold text-lg">{name}</h1>
              <p className="font-semibold">
                GH₵: <span>{price.toLocaleString()}</span>
              </p>
            </div>
          </Link>
          <Tooltip
            color="yellow"
            title="Add to Cart"
            className="hidden lg:block"
          >
            <FaPlus
              onClick={AddToCart}
              className="absolute bottom-0 right-0  text-yellow-400 bg-yellow-100 p-1.5 w-9 h-9 rounded-tl-2xl z-40 hover:text-yellow-400 hover:bg-yellow-100 cursor-pointer duration-200"
            />
          </Tooltip>
          <FaPlus
            onClick={AddToCart}
            className="absolute bottom-0 right-0 lg:hidden  text-yellow-400 bg-yellow-100 p-1.5 w-9 h-9 rounded-tl-2xl z-40 hover:text-yellow-400 hover:bg-yellow-100 cursor-pointer duration-200"
          />
        </div>
      )}
    </div>
  );
};

export default FruitCard;
