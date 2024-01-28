import Image from "next/image";
import React from "react";
import Continue from "../Button";

const Banner = () => {
  return (
    <div className="w-full h-full  bg-green-50 my-10 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 pt-4 grid grid-auto-fit gap-3 z-40 justify-center place-content-center place-items-center">
        <div className=" order-2 sm:order-1 ">
          <h1 className="text-lg sm:text-xl">
            What We Serve
          </h1>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold py-2">Healthy & Quality Groceries Products</h3>
          <p className="py-3 text-lg">
            Start your daily shopping with some Organic foods
          </p>
          <Continue text="Order Now" url="/category/Vegetables" />
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
