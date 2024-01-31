"use client";

import { FruitData } from "@/assets/GroceriesData";
import RelatedFruits from "@/components/productTypes/freshFruit/RelatedFruits";
import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { TbChevronLeft } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { CartActions } from "@/Store/cartSlice";
import { FavoriteActions } from "@/Store/FavoritesSlice";
import { Heart } from "lucide-react";
import { useSelector } from "react-redux";
import { selectFavoriteItems } from "@/Store/FavoritesSlice";

const SingleFruit = ({ params }: any) => {
  const name = decodeURIComponent(params.id).replace(/-/g, " ");
  const fruit = FruitData.find(
    (fruit) => fruit.name.toLowerCase() === name.toLowerCase()
  );
  const dispatch = useDispatch();

  const { id, image, price, desc, rating } = fruit as {
    id: number;
    name: string;
    price: number;
    image: string;
    desc: string;
    rating: number;
  };

  const favoriteProducts = useSelector(selectFavoriteItems);

  const isFavorite = favoriteProducts.some((favorite) => favorite.id === id);

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

  return (
    <div className="w-full pt-6 mx-auto max-w-7xl sm:pt-10 sm:px-4 bg-white sm:bg-gray-100">
      <Link href="/category/fruits">
        <button type="button" className=" p-2 font-semibold text-center mb-8 mx-3 bg-gray-200 sm:bg-white rounded-full">
          <TbChevronLeft className="w-8 h-8" />
        </button>
      </Link>

      <div className="grid w-full gap-10 sm:grid-cols-5">
        <div className="relative object-contain w-full sm:bg-white h-80 sm:h-96 sm:col-span-2">
          <Image
            src={`/images/${image}`}
            fill
            alt={name}
            className="object-contain sm:border rounded-sm lg:hover:scale-105"
          />
        </div>
        <div className="w-full sm:col-span-3 bg-gray-100 px-3 py-5 rounded-tl-3xl rounded-tr-3xl">
          <h1 className="pb-3 text-2xl font-semibold">{name}</h1>
          <Rate defaultValue={rating} allowHalf />
          <p className="pt-2 text-2xl font-semibold ">
            Unit Price: GH₵: <span>{price.toLocaleString()}.00</span>
          </p>
          <p className="py-4">{desc}</p>
          <h6 className=" font-semibold text-lg">Category: <span className=" text-gray-400 font-normal">Fresh Fruits</span></h6>
          <div className="flex font-semibold items-center gap-5 py-10 flex-wrap">
            <button
              onClick={handleToggleFavorite}
              className={`${isFavorite ? "text-red-400 hover:text-green-400" : "text-green-400 hover:text-red-400"} flex items-center  gap-1 `}
            >
              <Heart fill={isFavorite ? "red" : "white"} />
              <p>{isFavorite ? "Remove From Favorite" : "Add To Favorite"}</p>
            </button>
            <button
            type="button"
              onClick={AddToCart}
              className="px-2 py-1.5 text-white bg-yellow-300 border rounded-lg text-lg hover:bg-blue-600"
            >
             <p>Add To Cart</p>
            </button>
          </div>
        </div>
      </div>
      <div className="py-2 pb-9 font-semibold sm:pt-14 bg-gray-100 px-3 sm:px-0">
        <header className="text-xl font-semibold sm:text-2xl">
          Related Fresh Fruits
        </header>
        <div className="grid grid-cols-2 pt-8 sm:grid-auto-fit-xs gap-1.5 sm:gap-2">
          {fruit?.related.map((relate) => (
            <RelatedFruits
              key={relate.id}
              name={relate.name}
              image={relate.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleFruit;
