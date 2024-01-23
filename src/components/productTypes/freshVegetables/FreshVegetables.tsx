import { VegetablesData } from "@/assets/GroceriesData";
import VegetableCard from "./VegetableCard";
import Link from "next/link";
import { TbChevronLeft } from "react-icons/tb";

const FreshVegetables = () => {
  return (
    <div>
      <Link href="/category">
        <button className="p-2 mb-8 font-semibold text-center bg-white rounded-full text">
          <TbChevronLeft className="w-10 h-10" />
        </button>
      </Link>
      <h1 className="text-xl font-semibold uppercase">
        Fresh and Organic Vegetables
      </h1>
      <div className="grid w-full grid-cols-2 gap-2 py-8 sm:grid-auto-fit-xs">
        {VegetablesData.map((vegetables) => (
          <VegetableCard
            key={vegetables.id}
            id={vegetables.id}
            name={vegetables.name}
            image={vegetables.image}
            price={vegetables.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FreshVegetables;
