import FreshMeat from "@/components/productTypes/freshMeat/FreshMeat";
import React from "react";

export const metadata = {
  title: "Groceries App | Meats",
  description: "Our Fresh Meats",
};

const Meats = () => {
  return (
    <div className="w-full px-4 py-6 mx-auto max-w-7xl lg:py-10">
      <FreshMeat />
    </div>
  );
};

export default Meats;
