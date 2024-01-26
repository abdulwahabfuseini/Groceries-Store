"use client";

import { CardProps } from "@/contexts/Types";
import { addToFavorite } from "@/redux/CartSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { CartActions } from "@/Store/cartSlice";
import { FavoriteActions } from "@/Store/FavoritesSlice";

const FruitCard = ({ id, name, image, price }: CardProps) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const AddToCart = () => {
    dispatch(CartActions.addToCart({
      id, name, image, price,
      totalPrice: 0,
      quantity: 0,
      totalQuantity: 0
    }));
    toast.success(`${name} added to cart`)
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 350);
  }, [isLoading]);


  const AddToFavorite = () => {
    dispatch(FavoriteActions.addToFavorite({id, name, image, price}))
    toast.success(`${name} added to Favorite`)
  }
  // const favoriteData = useSelector((state: StateProps) => state.cart);

  // const isFavorite = (productId: any) => {
  //   return favoriteData?.some(
  //     (favoriteItem: { name: any }) => favoriteItem.name === productId
  //   );
  // };

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="cardloader w-full"></div>
      ) : (
        <div className="bg-white rounded-lg relative">
          <Heart
          onClick={AddToFavorite}
            // fill={isFavorite(name) ? "red" : "white"}
            // onClick={() => {
            //   dispatch(addToFavorite({ id, name, image, price }));
            //   if (isFavorite(name)) {
            //     toast.error(`${name} removed from favorites!`);
            //   } else {
            //     toast.success(`${name} added to favorites!`);
            //   }
            // }}
            className="absolute top-0 right-0  text-yellow-400 bg-yellow-100 p-1 w-9 h-9 rounded-bl-2xl z-40 hover:text-yellow-400 hover:bg-yellow-100 cursor-pointer duration-200"
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
          <div className="py-2 px-3">
            <h4 className="pt-2 font-semibold text-lg">{name}</h4>
            <p className="font-semibold">
              GH₵: <span>{price.toLocaleString()}</span>
            </p>
            <Link href={`/category/fruits/${name}`}>
              <FaPlus onClick={AddToCart} className="absolute bottom-0 right-0  text-yellow-400 bg-yellow-100 p-1.5 w-9 h-9 rounded-tl-2xl z-40 hover:text-yellow-400 hover:bg-yellow-100 cursor-pointer duration-200" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FruitCard;
