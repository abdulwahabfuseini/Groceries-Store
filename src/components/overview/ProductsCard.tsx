"use client";

import { CardProps } from "@/contexts/Types";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Heart } from "lucide-react";
import { Tooltip } from "antd";
import { Rate, Typography } from "antd";
import { CartActions } from "@/Store/cartSlice";
import { FavoriteActions } from "@/Store/FavoritesSlice";

const ProductsCard = ({
  id,
  name,
  price,
  discount,
  image,
  rating,
}: CardProps) => {
  const dispatch = useDispatch();

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
    <div className="bg-white rounded-lg relative">
      <Tooltip color="green" title="Add to favorite">
        <Heart
          onClick={AddToFavorite}
          className="absolute top-0 right-0  text-green-500 bg-green-100 p-1 w-9 h-9 rounded-bl-2xl z-40 hover:text-white hover:bg-green-500 cursor-pointer duration-200"
        />
      </Tooltip>

      <div className="relative  h-36 sm:h-40 w-full">
        <Image
          src={`/images/${image}`}
          fill
          alt="iceCreams"
          className="lg:hover:scale-105 object-contain"
        />
      </div>
      <div className="py-2 px-2">
        <h1 className="font-semibold truncate">{name}</h1>
        <Typography.Paragraph className=" font-semibold">
          GH₵: {price}
          <Typography.Text delete type="danger" className="pl-4">
            {parseFloat(
              (price + (price * (discount ?? 0)) / 100).toFixed(2)
            ).toString()}
          </Typography.Text>
        </Typography.Paragraph>

        <Rate defaultValue={rating} allowHalf className="text-xs" />
        <button onClick={AddToCart}>
          <Tooltip color="green" title="Add to Cart">
            <FaPlus className="absolute bottom-0 right-0  text-green-500 bg-green-100 p-1.5 w-9 h-9 rounded-tl-2xl z-40 hover:text-white hover:bg-green-500 cursor-pointer duration-200" />
          </Tooltip>
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
