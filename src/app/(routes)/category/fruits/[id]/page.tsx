"use client";

import { FruitData } from "@/assets/GroceriesData";
import RelatedFruits from "@/components/productTypes/freshFruit/RelatedFruits";
import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { TbChevronLeft } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { CartActions, selectCartProducts } from "@/Store/cartSlice";
import { FavoriteActions } from "@/Store/FavoritesSlice";
import { Heart } from "lucide-react";
import { useSelector } from "react-redux";
import { selectFavoriteItems } from "@/Store/FavoritesSlice";
import { FaMinus, FaPlus } from "react-icons/fa";

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

  // ==== Add and Remove from Favorite ====
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

  const cartState = useSelector(selectCartProducts);
  const quantity =
    cartState.items.find((item) => item.id === id)?.quantity || 0;

  // ==== addTocart ====
  const AddToCart = () => {
    dispatch(
      CartActions.addToCart({
        id,
        name,
        image,
        price,
        totalPrice: 0,
        quantity,
        totalQuantity: 0,
      })
    );
    toast.success(`${name} added to cart`);
  };

  // ==== increase quantity ====
  const handleIncreaseQuantity = () => {
    dispatch(
      CartActions.addToCart({
        id,
        name,
        image,
        price,
        totalPrice: 0,
        quantity: 1,
        totalQuantity: 0,
      })
    );
  };

  // ==== descrease quantity ====
  const handleDecreaseQuantity = () => {
    dispatch(CartActions.removeFromCart(id));
  };

  return (
    <div className="w-full pt-6 mx-auto max-w-7xl sm:pt-10 sm:px-4 bg-white sm:bg-gray-100">
      <Link href="/category/fruits">
        <button
          type="button"
          className=" p-2 font-semibold text-center mb-8 mx-3 bg-gray-200 sm:bg-white rounded-full"
        >
          <TbChevronLeft className="w-8 h-8" />
        </button>
      </Link>

      <div className="grid w-full gap-4 lg:gap-10 sm:grid-cols-5">
        <div className="relative object-contain w-full sm:bg-white h-80 sm:h-96 sm:col-span-2 overflow-hidden">
          <Image
            src={`/images/${image}`}
            fill
            alt={name}
            className="object-contain sm:border rounded-sm lg:hover:scale-105"
          />
        </div>
        <div className="w-full sm:col-span-3 bg-gray-100 px-3 py-5 rounded-tl-3xl rounded-tr-3xl">
          <h1 className="pb-3 text-2xl font-semibold">{name}</h1>
          <Rate defaultValue={rating} allowHalf className="text-base" />
          <p className="pt-2 text-2xl font-semibold ">
            Unit Price: GH₵: <span>{price.toLocaleString()}.00</span>
          </p>
          <p className="py-4">{desc}</p>
          <h6 className=" font-semibold text-lg">
            Category:{" "}
            <span className=" text-gray-400 font-normal">Fresh Fruits</span>
          </h6>

          <div className="flex flex-wrap items-center gap-3 py-3">
            <span className=" font-semibold text-lg">Qty:</span>
            <button
              onClick={handleIncreaseQuantity}
              className="px-4 py-3 border rounded-md hover:bg-black hover:text-white"
            >
              <FaPlus className="w-5 h-5 font-semibold " />
            </button>
            <h5 className="px-6 py-3 text-lg font-semibold border rounded-md">
              {quantity}
            </h5>
            <button
              onClick={handleDecreaseQuantity}
              className="px-4 py-3 border rounded-md hover:bg-black hover:text-white"
            >
              <FaMinus className="w-5 h-5 font-semibold " />
            </button>
            <button
              type="button"
              onClick={AddToCart}
              className="px-2 py-1.5 text-white bg-yellow-300 border rounded-lg text-lg hover:bg-blue-600"
            >
              <p>Add To Cart</p>
            </button>
          </div>
          <button
            onClick={handleToggleFavorite}
            className={`${
              isFavorite
                ? "text-red-400 hover:text-green-400"
                : "text-green-400 hover:text-red-400"
            } flex items-center  gap-1 `}
          >
            <Heart fill={isFavorite ? "red" : "white"} />
            <p>{isFavorite ? "Remove From Favorite" : "Add To Favorite"}</p>
          </button>
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
