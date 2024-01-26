import Image from "next/image";
import Link from "next/link";
import React from "react";

const GetStarted = () => {
  return (
    <div className="bg-white">
      <div className="grid w-full h-screen max-w-md px-4 m-auto place-items-center place-content-center">
        <Image
          src="/images/delivery1.png"
          width="220"
          height="220"
          alt="start"
        />
        <h4 className="py-5 text-lg md:py-8 text-center">
          Welcome to our Groceries Store! Stay at your comfortable home and order
          for fresh and organic products from us.{" "}
        </h4>
        <Link href="/category">
          <button className="px-4 py-2 hover:transition-all hover:ease-in text-xl font-semibold text-white bg-red-600 rounded-lg lg:hover:bg-blue-600">
            Get Started
          </button>
        </Link>

        <h1 className="pt-6 text-lg text-center md:pt-8 font-semibold">
          Eat Fresh and Stay Healthy
        </h1>
      </div>
    </div>
  );
};

export default GetStarted;
