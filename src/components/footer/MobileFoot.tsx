"use client";

import { useState } from "react";
import { FootNav } from "@/assets/Navigation";
import Link from "next/link";
import { TbChevronUp, TbChevronDown } from "react-icons/tb";
import { CardProps } from "@/contexts/Types";

const MobileFoot = ({ foot }: any) => {
  const [accordion, setAccordion] = useState(false);

  return (
    <div>
      <div onClick={() => setAccordion((prev) => !prev)} className="flex items-center justify-between  bg-white shadow p-3 mb-2">
        <h1 className="text-xl font-semibold ">{foot?.title}</h1>
        <button >
          {accordion ? (
            <TbChevronUp className="w-8 h-8" />
          ) : (
            <TbChevronDown className="w-8 h-8" />
          )}
        </button>
      </div>
      {foot?.link.map((item: any) => (
        <Link key={item.id} href={item?.path}>
          <p
            className={`${
              accordion ? "grid" : "hidden"
            } hover:underline hover:text-green-600 py-1 transition-all ease-in px-4 sm:px-0 text-lg bg-slate-50`}
          >
            {item?.display}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default MobileFoot;


