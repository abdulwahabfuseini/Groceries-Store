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

  //   const favoriteData = useSelector((state: StateProps) => state.cart);

  //   const isFavorite = (productId: any) => {
  //     return favoriteData?.some(
  //       (favoriteItem: { name: any }) => favoriteItem.name === productId
  //     );
  //   };

  return (
    <div className="bg-white rounded-lg relative">
      <Heart
        // fill={isFavorite(name) ? "red" : "white"}
        // onClick={() => {
        //   dispatch(addToFavorite({ id, name, image, price }));
        //   if (isFavorite(name)) {
        //     toast.error(`${name} removed from favorites!`);
        //   } else {
        //     toast.success(`${name} added to favorites!`);
        //   }
        // }}
        className="absolute top-0 right-0  text-green-500 bg-green-100 p-1 w-9 h-9 rounded-bl-2xl z-40 hover:text-yellow-400 hover:bg-yellow-100 cursor-pointer duration-200"
      />
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
        <button>
          <FaPlus className="absolute bottom-0 right-0  text-green-500 bg-green-100 p-1.5 w-9 h-9 rounded-tl-2xl z-40 hover:text-yellow-400 hover:bg-yellow-100 cursor-pointer duration-200" />
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
