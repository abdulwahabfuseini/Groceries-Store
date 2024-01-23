import { MeatsData } from "@/assets/GroceriesData";
import MeatCard from "./MeatCard";
import Link from "next/link";
import { TbChevronLeft } from "react-icons/tb";

const FreshMeat = () => {
  return (
    <div>
      <Link href="/category">
        <button className="p-2 mb-8 font-semibold text-center bg-white rounded-full text">
          <TbChevronLeft className="w-10 h-10" />
        </button>
      </Link>
      <h1 className="text-2xl font-semibold uppercase">Fresh Meats</h1>
      <div className="grid w-full grid-cols-2 gap-2 py-8 sm:grid-auto-fit-xs">
        {MeatsData.map((meats) => (
          <MeatCard
            key={meats.id}
            name={meats.name}
            image={meats.image}
            price={meats.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FreshMeat;
