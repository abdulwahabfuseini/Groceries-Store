import { TbChevronLeft } from "react-icons/tb";
import Link from "next/link";
import Categories from "@/components/homeContent/Categories";

export const metadata = {
  title: "Groceries Store | Categories",
  description: "Shop By Categories",
};

const Category = () => {
  return (
    <div className="w-full px-3 mx-auto max-w-7xl sm:px-5 grid place-content-center md:h-screen py-10">
       <Link href="/overview">
        <button className=" p-2 font-semibold  text-center bg-white rounded-full text">
          <TbChevronLeft className="w-8 h-8" />
        </button>
      </Link>
      <Categories />
    </div>
  );
};

export default Category;
