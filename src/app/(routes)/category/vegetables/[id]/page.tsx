import { VegetablesData } from "@/assets/GroceriesData";
import RelatedVegetables from "@/components/productTypes/freshVegetables/RelatedVegetables";

import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa";
import { TbChevronLeft } from "react-icons/tb";

const Vegetable = ({ params }: any) => {
  const name = decodeURIComponent(params.id).replace(/-/g, " ");
  const vegetable = VegetablesData.find(
    (vegetable) => vegetable.name.toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="w-full px-3 py-6 mx-auto max-w-7xl sm:py-10 sm:px-4">
      <Link href="/category/vegetables">
        <button className="p-2 mb-8 font-semibold text-center bg-white rounded-full text">
          <TbChevronLeft className="w-10 h-10" />
        </button>
      </Link>
      <div className="grid w-full gap-10 sm:grid-cols-5">
        <div className="relative object-contain w-full bg-white h-80 sm:h-96 sm:col-span-2">
          <Image
            src={`/images/${vegetable?.image}`}
            fill
            alt="fruits"
            className="object-contain border rounded-sm lg:hover:scale-105"
          />
        </div>
        <div className="w-full sm:col-span-3">
          <h1 className="pb-3 text-2xl font-semibold">{vegetable?.name}</h1>
          <Rate defaultValue={vegetable?.rating} allowHalf />
          <p className="py-4 font-semibold ">
            Unit Price: GH₵: <span>{vegetable?.price.toLocaleString()}</span>
          </p>
          <p>{vegetable?.desc}</p>
          <div className="flex flex-wrap items-center gap-3 py-10">
            <span>Qty:</span>
            <button className="px-4 py-3 border rounded-md hover:bg-black hover:text-white">
              <FaPlus className="w-5 h-5 font-semibold " />
            </button>
            <h5 className="px-6 py-3 text-lg font-semibold border rounded-md">
              1
            </h5>
            <button className="px-4 py-3 border rounded-md hover:bg-black hover:text-white">
              <FaMinus className="w-5 h-5 font-semibold " />
            </button>
            <button className="px-4 py-3 text-white bg-yellow-300 border rounded-md tetx-lg hover:bg-blue-600">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="pt-6 font-semibold sm:pt-32">
        <header className="text-xl font-semibold sm:text-2xl">
          Related Organic Vegetables
        </header>
        <div className="grid grid-cols-2 pt-8 sm:grid-auto-fit-xs gap-y-3 gap-x-2">
          {vegetable?.related.map((relate) => (
            <RelatedVegetables
              key={relate.id}
              name={relate.name}
              image={relate.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vegetable;