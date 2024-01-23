import Creams from "@/components/productTypes/creams/Creams";
import React from "react";

export const metadata = {
  title: "Groceries App | IceCreams",
  description: "Our Chilled IceCreams",
};

const IceCreams = () => {
  return (
    <div className="w-full px-4 py-6 mx-auto lg:py-10 max-w-7xl">
      <Creams />
    </div>
  );
};

export default IceCreams;
