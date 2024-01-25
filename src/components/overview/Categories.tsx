import { CategoryData } from "@/assets/Data";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="py-6 sm:py-10">
      <header className="text-xl font-semibold lg:text-2xl">
        Shop By Categories
      </header>
      <div className="grid w-full grid-cols-2 gap-2 py-6 sm:grid-auto-fit-xs place-content-center">
        {CategoryData.map((category) => (
          <Link href={category?.link} key={category.id}>
            <div
              className={`w-full h-full pt-4 overflow-hidden  rounded-lg shadow-sm ${category?.background}`}
            >
              <h1 className="sm:text-lg font-semibold px-1.5 pb-1.5">
                {category?.title}
              </h1>
              <div className="relative w-full h-36">
                <Image
                  src={`/images/${category?.image}`}
                  fill
                  alt={category?.title}
                  className="object-cover"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
