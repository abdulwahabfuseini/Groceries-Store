"use client";

import { FruitData } from "@/assets/GroceriesData";
import Link from "next/link";
import { TbChevronLeft } from "react-icons/tb";
import FruitCard from "./FruitCard";
import { Badge } from "antd";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectCartProducts } from "@/Store/cartSlice";
import { GrBasket } from "react-icons/gr";
import { selectFavoriteItems } from "@/Store/FavoritesSlice";
import CategoryTittle from "../CategoryTittle";

const FreshFruit = () => {
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
      <CategoryTittle
        category=" Fresh and organic Fruits"
        text="Fresh From Farm"
      />
      <div className="grid w-full grid-cols-2 gap-2 py-8 sm:grid-auto-fit-xs">
        {FruitData.map((fruits) => (
          <FruitCard
            key={fruits.id}
            id={fruits.id}
            name={fruits.name}
            image={fruits.image}
            price={fruits.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FreshFruit;
