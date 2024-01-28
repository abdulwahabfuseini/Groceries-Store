import Creams from "@/components/productTypes/creams/Creams";
import React from "react";

export const metadata = {
  title: "Groceries Store | IceCreams",
  description: "Our Chilled IceCreams",
};

const IceCreams = () => {
  return (
    <div className="w-full px-3 sm:px-5 py-10 mx-auto max-w-7xl">
      <Creams />
    </div>
  );
};

export default IceCreams;
