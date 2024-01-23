import { FruitData } from "@/assets/GroceriesData";

import Link from "next/link";
import { TbChevronLeft } from "react-icons/tb";
import FruitCard from "./FruitCard";

const FreshFruit = () => {
  return (
    <div>
      <Link href="/category">
        <button className="p-2 mb-8 font-semibold text-center bg-white rounded-full text">
          <TbChevronLeft className="w-8 h-8" />
        </button>
      </Link>
      <h1 className="text-xl font-semibold uppercase">
        Fresh and organic Fruits
      </h1>
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
