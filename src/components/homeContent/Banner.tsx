import Image from "next/image";
import React from "react";
import Continue from "../Button";

const Banner = () => {
  return (
    <div className="w-full h-full  bg-green-100 my-10 overflow-hidden">
      <div className="mx-auto max-w-5xl px-3 sm:px-4 pt-6 grid grid-auto-fit gap-3 z-40 justify-center place-content-center place-items-center">
        <div className=" order-2 sm:order-1 ">
          <h1 className="text-lg sm:text-xl text-green-600 font-semibold">What We Serve</h1>
          <h3 className="text-xl sm:text-2xl font-semibold py-2">
            Healthy & Quality Groceries Products
          </h3>
          <p className="py-2 text-lg">
            Groceries Store focus on health and wellness of customers. We offer
            organic and natural products, maintaining a vibrant fresh produce
            section, providing nutritional information, catering to specialty
            diets, and promoting local and sustainable sourcing. 
          </p>
          <Continue text="Order Now" url="/category" />
        </div>
        <div className="order-2 sm:order-2">
          <Image
            src="/images/man3.png"
            alt="organic"
            width={250}
            height={250}
            className="object-contain"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
