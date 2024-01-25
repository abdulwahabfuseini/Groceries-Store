import FavoriteCard from "@/components/FavoriteCard";
import React from "react";
import { FruitData } from "@/assets/GroceriesData";

const MyFavorite = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-3">
      <header className="flex items-center justify-between">
        <h1>Favourite Groceries</h1>
        <button>Delete All</button>
      </header>
      <div className="grid grid-auto-fit-xs gap-2 py-10">
        {FruitData.map((favorite) => (
          <FavoriteCard
            key={favorite.id}
            name={favorite.name}
            image={favorite.image}
            price={favorite.price}
          />
        ))}
      </div>
    </div>
  );
};

export default MyFavorite;
