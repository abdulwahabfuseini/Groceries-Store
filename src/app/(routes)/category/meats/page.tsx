import FreshMeat from "@/components/productTypes/freshMeat/FreshMeat";
import React from "react";

export const metadata = {
  title: "Groceries Store | Fresh Meats",
  description: "Our Fresh Meats",
};

const Meats = () => {
  return (
    <div className="w-full px-3 sm:px-5 py-10 mx-auto max-w-7xl">
      <FreshMeat />
    </div>
  );
};

export default Meats;
