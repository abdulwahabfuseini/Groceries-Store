import Image from "next/image";
import React from "react";
import Continue from "../Button";

const Banner = () => {
  return (
    <div className="w-full h-full py-20 sm:py-6 bg-green-50 my-10 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 py-4 grid grid-auto-fit gap-3 z-40 justify-center place-content-center place-items-center">
        <div className="order-2 sm:order-1 relative">
          <Image
            src="/images/man2.png"
            alt="organic"
            width={700}
            height={700}
           
            className="object-contain"
            draggable={false}
          />
        </div>
        <div className=" order-1 sm:order-2 ">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-10">
            Save up come to 30% <br />
            <span className=" font-semibold">Fresh & Organic Foods</span>
          </h1>
          <p className="py-3 text-lg">
            Start your daily shopping with some Organic foods
          </p>
          <Continue text="Order Now" url="/category/Vegetables" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
