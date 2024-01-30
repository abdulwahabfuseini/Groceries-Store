"use client";

import { BakeryData } from "@/assets/GroceriesData";
import Link from "next/link";
import { TbChevronLeft } from "react-icons/tb";
import { Badge } from "antd";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectCartProducts } from "@/Store/cartSlice";
import { GrBasket } from "react-icons/gr";
import { selectFavoriteItems } from "@/Store/FavoritesSlice";
import BakedCard from "./BakedCard";
import CategoryTittle from "../CategoryTittle";

const BakedFood = () => {
  const cartProducts = useSelector(selectCartProducts);
  const favoriteProducts = useSelector(selectFavoriteItems);

  return (
    <div>
      <div className="flex items-end justify-between mb-8 mr-3">
        <Link href="/category">
          <button className="p-2 font-semibold text-center bg-white rounded-full text">
            <TbChevronLeft className="w-8 h-8" />
          </button>
        </Link>
        <div className="flex items-end gap-7">
          <Link href="/myFavorite">
          <Badge count={favoriteProducts.length} color="green">
              <FaHeartCircleCheck className="h-8 w-8" />
            </Badge>
          </Link>
          <Link href="/shoppingCart">
            <Badge count={cartProducts.items?.length}>
              <GrBasket className="h-8 w-8" />
            </Badge>
          </Link>
        </div>
      </div>
      <CategoryTittle category="Baked Foods" text="Fresh & hot From Oven" />
      <div className="grid w-full grid-cols-2 gap-2 py-8 sm:grid-auto-fit-xs">
        {BakeryData.map((baked) => (
          <BakedCard
            key={baked.id}
            id={baked.id}
            name={baked.name}
            image={baked.image}
            price={baked.price}
          />
        ))}
        C
      </div>
    </div>
  );
};

export default BakedFood;
