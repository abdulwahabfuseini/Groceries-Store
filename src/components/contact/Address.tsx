import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { ContactData } from "@/assets/Data";

const Connect = () => {
  return (
    <div className="">
      {ContactData.map((message, index) => (
        <div key={index} className="cols-span-1">
          <h4 className="text-xl">{message?.title}</h4>
          <h3 className="py-4 text-3xl font-medium sm:text-5xl">{message?.header}</h3>
          <p>{message?.desc}</p>
          <div className="grid  my-6 grid-auto-fit lg:gap-x-6  gap-y-6">
            {message.connects.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
                data-aos="fade-up"
              >
                <Image
                  src={`/SVG/${item.icon}`}
                  alt="organic"
                  width={30}
                  height={30}
                  className="object-contain"
                  draggable={false}
                />
                <div>
                  <a className=" truncate" href={`mailto:${item?.text}`}>{item?.text}</a> <br />
                  <a
                    className="text-sm text-gray-400"
                    href={`mailto:${item?.info}`}
                  >
                    {item?.info}
                  </a>
                  <p  className="text-sm text-gray-400">{item?.visit}</p>
                </div>
                <div>
                  <a href={`tel:${item?.tel}`}>{item?.tel}</a> <br />
                  <a
                    className="text-sm text-gray-400"
                    href={`tel:${item?.num}`}
                  >
                    {item?.num}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Connect;
