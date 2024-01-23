import { ButtonProps } from "@/contexts/Types";
import Link from "next/link";
import React from "react";

const Continue = ({text, url}: ButtonProps) => {
  return (
    <button type="button" className="my-8">
      <Link
        className="group flex items-center justify-between gap-2 rounded-lg border border-green-600 bg-green-600 py-1 px-2 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring hover:scale-x-105"
        href={url}
      >
        <span className="font-medium text-white transition-colors group-hover:text-white group-active:text-blue-500 text-base">
          {text}
        </span>

        <span className="shrink-0 rounded-full border border-current bg-white p-2 text-green-600 group-active:text-green-600">
          <svg
            className="h-5 w-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </Link>
    </button>
  );
};

export default Continue;
