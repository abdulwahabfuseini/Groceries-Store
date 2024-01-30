"use client";

import { MeatsData } from "@/assets/GroceriesData";
import Link from "next/link";
import { TbChevronLeft } from "react-icons/tb";
import { Badge } from "antd";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectCartProducts } from "@/Store/cartSlice";
import { GrBasket } from "react-icons/gr";
import { selectFavoriteItems } from "@/Store/FavoritesSlice";
import MeatCard from "./MeatCard";
import CategoryTittle from "../CategoryTittle";

const FreshMeat = () => {
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
      <CategoryTittle category="Fresh Meat" text="Fresh From Farm" />
      <div className="grid w-full grid-cols-2 gap-2 py-8 sm:grid-auto-fit-xs">
        {MeatsData.map((meat) => (
          <MeatCard
            key={meat.id}
            id={meat.id}
            name={meat.name}
            image={meat.image}
            price={meat.price}
          />
        ))}
        C
      </div>
    </div>
  );
};

export default FreshMeat;
