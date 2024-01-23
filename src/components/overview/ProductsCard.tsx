"use client";

import { CardProps, StateProps } from "@/contexts/Types";
import Image from "next/image";
import { FaRegHeart, FaHeart, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "@/redux/CartSlice";
import toast from "react-hot-toast";
import { Heart } from "lucide-react";
import { Rate, Typography } from "antd";

const ProductsCard = ({
  id,
  name,
  price,
  discount,
  image,
  rating,
}: CardProps) => {
  const dispatch = useDispatch();

  const favoriteData = useSelector((state: StateProps) => state.cart);

  const isFavorite = (productId: any) => {
    return favoriteData?.some(
      (favoriteItem: { name: any }) => favoriteItem.name === productId
    );
  };

  return (
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
        className="absolute top-2 right-2 text-zinc-500 w-7 h-7 z-40 hover:text-black cursor-pointer duration-200"
      />
      <div className="relative  h-36 sm:h-40 w-full">
        <Image
          src={`/images/${image}`}
          fill
          alt="iceCreams"
          className="lg:hover:scale-105 object-contain"
        />
      </div>
      <div className="py-2 px-3">
        <h4 className="font-semibold truncate">{name}</h4>
        <Typography.Paragraph className=" font-semibold">
          GH₵: {price}
          <Typography.Text delete type="danger" className="pl-4">
            {parseFloat(price + (price * discount) / 100).toFixed(2)}
          </Typography.Text>
        </Typography.Paragraph>
        <div className="flex items-center justify-between w-full">
            <Rate defaultValue={rating} allowHalf className="text-xs" />
          <button>
            {" "}
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
