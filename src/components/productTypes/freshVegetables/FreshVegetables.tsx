
"use client"

import Link from "next/link";
import { TbChevronLeft } from "react-icons/tb";
import { VegetablesData } from "@/assets/GroceriesData"
import { Badge } from "antd";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectCartProducts } from "@/Store/cartSlice";
import { GrBasket } from "react-icons/gr";
import { selectFavoriteItems } from "@/Store/FavoritesSlice";
import VegetableCard from "./VegetableCard";
import CategoryTittle from "../CategoryTittle";

const FreshVegetables = () => {
  const cartProducts = useSelector(selectCartProducts)
  const favoriteProducts = useSelector(selectFavoriteItems)


  return (
    <div>
      <div className="flex items-end justify-between mb-8 mr-3">
      <Link href="/category">
        <button className="p-2  font-semibold text-center bg-white rounded-full text">
          <TbChevronLeft className="w-8 h-8" />
        </button>
      </Link>
      <div className="flex items-end gap-7">
            <Link href="/myFavorite">
              <button>
                <Badge count={favoriteProducts.length}>
                  <FaHeartCircleCheck className="h-8 w-8" />
                </Badge>
              </button>
            </Link>
            <Link href="/shoppingCart">
              <button>
                <Badge count={cartProducts.items?.length}>
                  <GrBasket className="h-8 w-8" />
                </Badge>
              </button>
            </Link>
          </div>
      </div>
      <CategoryTittle category=" Fresh & organic Vegetables" text="Fresh From Farm" />
      <div className="grid w-full grid-cols-2 gap-2 py-8 sm:grid-auto-fit-xs">
        {VegetablesData.map((vegetable) => (
          <VegetableCard
            key={vegetable.id}
            id={vegetable.id}
            name={vegetable.name}
            image={vegetable.image}
            price={vegetable.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FreshVegetables;
