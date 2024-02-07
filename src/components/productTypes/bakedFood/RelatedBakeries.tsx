import { RelateProps } from "@/contexts/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa6";

const RelatedBakeries = ({ name, image }: RelateProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <Link href={`/category/bakeries/${name}`}>
        <div className="relative h-36 sm:h-40 w-full group">
          <Image
            src={`/images/${image}`}
            fill
            alt={name}
            className="lg:group-hover:scale-110 object-contain"
          />
          <button className="bg-black top-0 left-0 w-full h-full absolute bg-opacity-20 right-0  hidden group-hover:flex items-center justify-center">
            <FaEye className="text-white text-3xl" />
          </button>
        </div>
        <h3 className="text-lg font-semibold py-2 text-center">{name}</h3>
      </Link>
    </div>
  );
};

export default RelatedBakeries;
