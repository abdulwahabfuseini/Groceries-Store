"use client";

import React, { useState } from "react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductsCard from "./ProductsCard";
import { TopProducts } from "@/assets/Data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SellingProducts = () => {
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [prevEl, setPrevtEl] = useState<HTMLButtonElement | null>(null);

  return (
    <div className="relative mx-auto max-w-7xl px-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold sm:text-3xl">
            Top Selling Products
          </h1>
          <p className="text-lg pt-2 text-green-500 font-semibold">
            Fresh From Farm
          </p>
        </div>
        <div className=" hidden sm:flex items-center justify-center gap-6 py-4">
          <button ref={(node) => setPrevtEl(node)}>
            <FaChevronLeft className="w-8 h-8 p-2 text-lg font-bold text-white rounded-full sm:w-10 sm:h-10 pattern" />
          </button>
         
          <button  ref={(node) => setNextEl(node)}>
            <FaChevronRight className="w-8 h-8 p-2 text-lg font-bold text-white rounded-full sm:w-10 sm:h-10 pattern " />
          </button>
        </div>
      </div>
      <Swiper
        navigation={{ nextEl, prevEl }}
        spaceBetween={8}
        loop={true}
        speed={1000}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          0: {
            slidesPerView: 2.1,
          },
          400: {
            slidesPerView: 2.3,
          },
          600: {
            slidesPerView: 4.5,
          },
          768: {
            slidesPerView: 4.6,
          },
          1024: {
            slidesPerView: 7.5,
          },
        }}
      >
        <div>
          {TopProducts.map((selling, index) => {
            return (
              <SwiperSlide key={index} className="my-6">
                <ProductsCard
                  name={selling.name}
                  image={selling.image}
                  price={selling.price}
                  discount={selling.discount}
                  rating={selling.rating}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default SellingProducts;
