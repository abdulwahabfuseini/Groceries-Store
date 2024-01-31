"use client";

import { MeatsData } from "@/assets/GroceriesData";
import MeatCard from "./MeatCard";
import CategoryTittle from "../CategoryTittle";
import Header from "../Header";

const FreshMeat = () => {

  return (
    <div>
      <Header />
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
      </div>
    </div>
  );
};

export default FreshMeat;
