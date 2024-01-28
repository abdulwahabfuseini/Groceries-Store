import { CategoryTittleProps } from "@/contexts/Types";
import React from "react";

const CategoryTittle = ({ category, text }: CategoryTittleProps) => {
  return (
    <div>
      <h1 className="text-xl font-semibold uppercase">{category}</h1>
      <p className="text-lg font-medium pt-1 ">{text}</p>
    </div>
  );
};

export default CategoryTittle;
