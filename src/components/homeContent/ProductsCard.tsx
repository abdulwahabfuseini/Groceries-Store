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
import { useSelector } from "react-redux";
import { selectFavoriteItems } from "@/Store/FavoritesSlice";

const ProductsCard = ({
  id,
  name,
  price,
  discount,
  image,
  rating,
}: CardProps) => {
  const dispatch = useDispatch();

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
    <div className="bg-white rounded-lg relative overflow-hidden">
      <Tooltip
        color="green"
        title={isFavorite ? "Remove From Favorite" : "Add To Favorite"}
        className="hidden lg:block"
      >
        <Heart
          fill={isFavorite ? "red" : "white"}
          onClick={handleToggleFavorite}
          className="absolute top-0 right-0  text-green-400 bg-green-100 p-1 w-9 h-9 rounded-bl-2xl z-40 hover:text-green-400 hover:bg-green-100 cursor-pointer duration-200"
        />
      </Tooltip>
      <Heart
        fill={isFavorite ? "red" : "white"}
        onClick={handleToggleFavorite}
        className="absolute top-0 right-0 lg:hidden text-green-400 bg-green-100 p-1 w-9 h-9 rounded-bl-2xl z-40 hover:text-green-400 hover:bg-green-100 cursor-pointer duration-200"
      />

      <div className="relative  h-36 sm:h-40 w-full">
        <Image
          src={`/images/${image}`}
          fill
          alt={name}
          className="lg:hover:scale-110 object-contain"
        />
      </div>
      <div className="py-1 px-2">
        <h1 className="font-semibold truncate text-lg">{name}</h1>
        <Typography.Paragraph className=" font-semibold">
          GH₵: {price}
          <Typography.Text delete type="danger" className="pl-4">
            {parseFloat(
              (price + (price * (discount ?? 0)) / 100).toFixed(2)
            ).toString()}
          </Typography.Text>
        </Typography.Paragraph>

        <Rate defaultValue={rating} allowHalf className="text-xs" />
        <Tooltip color="green" title="Add to Cart" className="hidden lg:block">
          <FaPlus
            onClick={AddToCart}
            className="absolute bottom-0 right-0  text-green-400 bg-green-100 p-1.5 w-9 h-9 rounded-tl-2xl z-40 hover:text-green-400 hover:bg-green-100 cursor-pointer duration-200"
          />
          </Tooltip>
          <FaPlus
            onClick={AddToCart}
            className="absolute bottom-0 right-0 lg:hidden  text-green-400 bg-green-100 p-1.5 w-9 h-9 rounded-tl-2xl z-40 hover:text-green-400 hover:bg-green-100 cursor-pointer duration-200"
          />
      </div>
    </div>
  );
};

export default ProductsCard;
