import { Choose } from "@/assets/Data";
import Image from "next/image";
import React from "react";

const Background = () => {
  return (
    <div className="grid grid-auto-fit lg:grid-cols-5 mx-auto max-w-7xl gap-3">
      <div className="w-full sm:col-span-1 lg:col-span-2">
        <h1 className="text-3xl font-semibold">Why Choose Us</h1>
        <h4 className="text-xl sm:text-2xl py-3 capitalize font-medium">We provide the best groceries</h4>
        <p className="text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          iusto doloribus a? Mollitia architecto dolores perspiciatis.
        </p>
        <div className="grid gap-y-4 py-5">
          {Choose.map((item) => (
            <button
              key={item.id}
              className="flex items-center gap-4 w-full bg-white p-2 shadow-lg rounded-lg"
            >
              <Image
                src={`/SVG/${item.image}`}
                alt="organic"
                width={50}
                height={50}
                className="object-contain"
                draggable={false}
              />
              <h1 className="sm:text-lg font-semibold truncate">{item.text}</h1>
            </button>
          ))}
        </div>
      </div>
      <div className="w-full sm:col-span-1 relative lg:col-span-3">
        <Image
          src="/images/home1.webp"
          alt="organic"
          fill
          className="object-contain w-full h-full"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Background;
