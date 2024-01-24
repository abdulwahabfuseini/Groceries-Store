import { RelateProps } from "@/contexts/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedFruits = ({ name, image }: RelateProps) => {
  return (
    <div className="bg-white rounded-lg ">
      <Link href={`/category/fruits/${name}`}>
        <div className="relative  h-36 sm:h-44 w-full">
          <Image
            src={`/images/${image}`}
            fill
            alt="fruits"
            className="lg:hover:scale-105 object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold py-2 text-center">{name}</h3>
      </Link>
    </div>
  );
};

export default RelatedFruits;