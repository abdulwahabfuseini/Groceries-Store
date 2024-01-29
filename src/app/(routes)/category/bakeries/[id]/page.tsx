"use client";

import { BakeryData } from "@/assets/GroceriesData";
import RelatedBakeries from "@/components/productTypes/bakedFood/RelatedBakeries";
import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { TbChevronLeft } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { CartActions } from "@/Store/cartSlice";
import { FavoriteActions } from "@/Store/FavoritesSlice";
import { FaHeart } from "react-icons/fa";

const Bakery = ({ params }: any) => {
  const name = decodeURIComponent(params.id).replace(/-/g, " ");
  const baked = BakeryData.find(
    (baked) => baked.name.toLowerCase() === name.toLowerCase()
  );
  const dispatch = useDispatch();

  const { id, image, price, desc, rating } = baked as {
    id: number;
    name: string;
    price: number;
    image: string;
    desc: string;
    rating: number;
  };

  const AddToFavorite = () => {
    dispatch(
      FavoriteActions.addToFavorite({
        id,
        image,
        price,
        name,
        quantity: 0,
      })
    ),
      toast.success(`${name} added to Favorite`);
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
      <Link href="/category/bakeries">
        <button className=" p-2 font-semibold text-center mb-8 mx-3 bg-gray-200 sm:bg-white rounded-full">
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
          <p className="py-4 text-2xl font-semibold ">
            Unit Price: GH₵: <span>{price.toLocaleString()}</span>
          </p>
          <p>{desc}</p>
          <div className="flex font-semibold items-center gap-5 py-10">
            <button
              onClick={AddToFavorite}
              className="flex items-center text-green-400 hover:text-red-400"
            >
              <FaHeart className="p-1 w-7 h-7 cursor-pointer duration-200" />
              <p>Add To Favorite</p>
            </button>
            <button
              onClick={AddToCart}
              className="px-2 py-1.5 text-white bg-yellow-300 border rounded-lg text-lg hover:bg-blue-600"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="py-2 pb-9 font-semibold sm:pt-14 bg-gray-100 px-3 sm:px-0">
        <header className="text-xl font-semibold sm:text-2xl">
          Related Bakeries
        </header>
        <div className="grid grid-cols-2 pt-8 sm:grid-auto-fit-xs gap-1.5 sm:gap-2">
          {baked?.related.map((relate) => (
            <RelatedBakeries
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

export default Bakery;
