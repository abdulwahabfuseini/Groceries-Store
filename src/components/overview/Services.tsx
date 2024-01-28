"use client";

import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { ServicesData } from "@/assets/Data";

const Services = () => {
  return (
    <div className="relative py-6">
      <Swiper
        spaceBetween={10}
        loop={true}
        speed={3000}
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          400: {
            slidesPerView: 1.9,
          },
          600: {
            slidesPerView: 2.8,
          },
          768: {
            slidesPerView: 2.9,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <div>
          {ServicesData.map((item, index) => {
            return (
              <SwiperSlide key={index} className="my-6">
                <div className="grid place-content-center place-items-center text-center gap-y-1 ">
                  <Image
                    src={`/SVG/${item?.image}`}
                    width={55}
                    height={55}
                    alt="service"
                    objectFit="contain"
                  />
                  <h1 className="font-semibold">{item?.title}</h1>
                  <p className="text-sm">{item?.desc}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default Services;
