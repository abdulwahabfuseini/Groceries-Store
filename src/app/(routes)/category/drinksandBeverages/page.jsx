import SoftDrink from "@/components/softDrinks/SoftDrink";
import React from "react";

export const metadata = {
  title: "Groceries App | Drink And Beverages",
  description: "Our Drink and Beverages",
};

const DrinkAndBeverages = () => {
  return (
    <div className="w-full px-4 py-6 mx-auto max-w-7xl lg:py-10">
      <SoftDrink />
    </div>
  );
};

export default DrinkAndBeverages;
