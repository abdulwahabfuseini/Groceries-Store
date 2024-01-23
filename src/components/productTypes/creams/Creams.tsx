import { IcecreamsData } from "@/assets/GroceriesData";
import CreamCard from "./CreamCard";
import Link from "next/link";
import { TbChevronLeft } from "react-icons/tb";

const Creams = () => {
  return (
    <div>
      <Link href="/category">
        <button className="p-2 mb-8 font-semibold text-center bg-white rounded-full text">
          <TbChevronLeft className="w-10 h-10" />
        </button>
      </Link>
      <h1 className="text-2xl font-semibold uppercase">Ice Creams</h1>
      <div className="grid w-full grid-cols-2 gap-2 py-8 sm:grid-auto-fit-xs">
        {IcecreamsData.map((creams) => (
          <CreamCard
            key={creams.id}
            name={creams.name}
            image={creams.image}
            price={creams.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Creams;
