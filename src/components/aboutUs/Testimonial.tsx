"use client";

import React, { useState } from "react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Customer } from "@/assets/Data";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [prevEl, setPrevtEl] = useState<HTMLButtonElement | null>(null);

  return (
    <div className="relative mx-auto max-w-7xl px-3 py-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-semibold sm:text-3xl">
            Testimonials
          </h1>
          <p className="text-lg pt-2 text-green-500 font-semibold">
          What Our Customers Say About Us
          </p>
        </div>
        <div className=" hidden sm:flex items-center justify-center gap-6 py-4">
          <button ref={(node) => setPrevtEl(node)} className="bg-green-600">
            <FaChevronLeft className="w-8 h-8 p-2 text-lg font-bold text-white rounded-full sm:w-10 sm:h-10 pattern" />
          </button>

          <button ref={(node) => setNextEl(node)} className="bg-green-600">
            <FaChevronRight className="w-8 h-8 p-2 text-lg font-bold text-white rounded-full sm:w-10 sm:h-10 pattern " />
          </button>
        </div>
      </div>
      <Swiper
        navigation={{ nextEl, prevEl }}
        spaceBetween={15}
        loop={true}
        speed={1000}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          400: {
            slidesPerView: 1.4,
          },
          600: {
            slidesPerView: 2.2,
          },
          768: {
            slidesPerView: 2.6,
          },
          1024: {
            slidesPerView: 3.3,
          },
        }}
      >
        <div>
          {Customer.map((client, index) => {
            return (
              <SwiperSlide key={index} className="my-6">
                <TestimonialCard
                  id={client.id}
                  name={client.name}
                  email={client.email}
                  message={client.message}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
