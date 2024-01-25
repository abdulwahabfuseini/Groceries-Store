import Image from "next/image";
import React from "react";
import Continue from "../Button";

const Discount = () => {
  return (
    <div className="w-full h-full py-20 sm:py-6 bg-green-50 my-10 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 py-4 relative grid grid-auto-fit gap-3 z-40 justify-center place-content-center place-items-center">
        <div className="order-2 sm:order-1 ">
          <Image
            src="/images/gro3.png"
            alt="organic"
            width={600}
            height={600}
            className="object-contain"
            draggable={false}
          />
        </div>
        <div className=" order-1 sm:order-2 ">
          <h1 className="text-xl sm:text-2xl lg:text-3xl leading-10 uppercase">
            Save up to 30% <br />
            <span className=" font-semibold">Fresh & Organic Foods</span>
          </h1>
          <p className="py-3 text-lg">
            Start your daily shopping with some Organic foods
          </p>
          <Continue text="Order Now" url="/category/Vegetables" />
        </div>
      </div>
      <div>
        <Image
          src="/images/loose.png"
          alt="organic"
          width={150}
          height={150}
          className="object-contain -top-14 -left-14 lg:-top-6 lg:-left-14 absolute"
          draggable={false}
        />
        <Image
          src="/images/cabbage.png"
          alt="organic"
          width={150}
          height={150}
          className="object-contain -bottom-14 -left-14 lg:-bottom-11 lg:-left-12  absolute"
          draggable={false}
        />
        <Image
          src="/images/strawberry.png"
          alt="organic"
          width={150}
          height={150}
          className="object-contain -top-14 -right-14 lg:-top-9 lg:-right-12 absolute"
          draggable={false}
        />
        <Image
          src="/images/tomato.png"
          alt="organic"
          width={150}
          height={150}
          className="object-contain -bottom-2 -right-14 lg:-bottom-4 lg:-right-12 absolute"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Discount;
