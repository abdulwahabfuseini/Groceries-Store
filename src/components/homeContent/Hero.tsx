"use client";

import React from "react";
import Banner from "./Banner";
import { HeroData } from "@/assets/Data";
// import "swiper/css/pagination";
// import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="relative w-full h-full px-3 sm:px-4  bg-green-100 overflow-hidden py-1">
      <div className="hidden sm:grid grid-auto-fit mx-auto max-w-7xl place-content-center  place-items-center justify-center">
        <Swiper
          direction="vertical"
          spaceBetween={400}
          slidesPerView={1}
          loop={true}
          speed={8000}
          modules={[Autoplay]}
          autoplay={{ delay: 7800, disableOnInteraction: false }}
          className="h-[395px]"
        >
          {HeroData.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex items-center py-12 lg:py-14 h-full"
            >
              <h1 className="text-2xl uppercase font-semibold">
                {item?.title}
              </h1>
              <h4 className="text-2xl py-2 font-semibold">
                {item?.subTitle}
              </h4>
              <p className="text-lg w-full lg:w-5/6">{item?.desc}</p>
              <Button text={item?.button} url={item?.link} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={400}
          slidesPerView={1}
          loop={true}
          speed={8000}
          modules={[Autoplay]}
          autoplay={{ delay: 7800, disableOnInteraction: false }}
          className="w-full h-[395px] py-3"
        >
          {HeroData.map((item) => (
            <SwiperSlide key={item.id} className="py-5 relative">
              <Image
                src={`/images/${item?.cover}`}
                // width={500}
                // height={500}
                fill
                objectFit="contain"
                alt="slide"
                quality={100}
                className="w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full h-full sm:hidden py-10">
        {HeroData.slice(0, 1).map((item) => (
          <div key={item.id}>
            <div>
              <h1 className="text-xl uppercase font-semibold">{item?.title}</h1>
              <h4 className="text-xl py-2 font-semibold">{item?.subTitle}</h4>
              <p className="text-lg w-full">{item?.desc}</p>
              <Button text={item?.button} url={item?.link} />
            </div>
            <div>
              <Image
                src={`/images/${item?.cover}`}
                width={500}
                height={500}
                objectFit="contain"
                alt="slide"
                quality={100}
                className="w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
