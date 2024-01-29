"use client"

import { IcecreamsData } from "@/assets/GroceriesData";
import Link from "next/link";
import { TbChevronLeft } from "react-icons/tb";
import { Badge } from "antd";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectCartProducts } from "@/Store/cartSlice";
import { GrBasket } from "react-icons/gr";
import { selectFavoriteItems } from "@/Store/FavoritesSlice";
import CreamCard from "./CreamCard";
import CategoryTittle from "../CategoryTittle";

const Creams = () => {
  const cartProducts = useSelector(selectCartProducts)
  const favoriteProducts = useSelector(selectFavoriteItems)


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
      <CategoryTittle category="Ice Creams" text="frozen dessert" />
      <div className="grid w-full grid-cols-2 gap-2 py-8 sm:grid-auto-fit-xs">
        {IcecreamsData.map((cream) => (
          <CreamCard
            key={cream.id}
            id={cream.id}
            name={cream.name}
            image={cream.image}
            price={cream.price}
          />
        ))}
      C</div>
    </div>
  );
};

export default Creams;
