import Foods from "@/components/foods/Foods";
import React from "react";

export const metadata = {
  title: "Groceries App | SeaFoods",
  description: "Our Fresh SeaFoods",
};

const SeaFoods = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-4">
      <Foods />
    </div>
  );
};

export default SeaFoods;
