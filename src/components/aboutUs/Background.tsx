import { Choose } from "@/assets/Data";
import Image from "next/image";
import React from "react";

const Background = () => {
  return (
    <div className="grid lg:grid-cols-5 mx-auto max-w-7xl gap-3">
      <div className="w-full lg:col-span-2">
       <div>
       <h1 className="text-3xl font-semibold text-green-600">Why Choose Us</h1>
        <h4 className="text-xl sm:text-2xl py-2 capitalize font-semibold">
          We provide the best groceries
        </h4>
        <p className="text-lg">
          Groceries Stores typically provide a comprehensive range of products,
          including fresh fruits, organic Vegetables, fresh meat, frozen dessert,
          Bakeries, Beverages and other household items. This variety allows
          customers to find everything they need in one place.
        </p>
        <div className="grid grid-auto-fit gap-2 py-4">
          {Choose.map((item) => (
            <button
              key={item.id}
              className="flex items-center gap-4 w-full bg-white px-2 py-1.5 shadow-lg rounded-lg"
            >
              <Image
                src={`/SVG/${item.image}`}
                alt={item.text}
                width={45}
                height={45}
                className="object-contain"
                draggable={false}
              />
              
              <h1 className="sm:text-lg font-semibold truncate">{item.text}</h1>
            </button>
          ))}
        </div>
       </div>
      </div>
      <div className="lg:col-span-3 lg:px-10">
        <video src="/about.mp4" muted autoPlay loop className="h-full w-full" />
      </div>
    </div>
  );
};

export default Background;
