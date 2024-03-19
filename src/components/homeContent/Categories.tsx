
import Image from "next/image";
import Link from "next/link";


const CategoryData = [
  {
    id: 1,
    title: "Fresh Fruits",
    image: "fruits2.png",
    link: "/category/fruits",
    bg: "bg-yellow-200",
  },
  {
    id: 2,
    title: "Fresh & Organic Vegetables",
    image: "gro3.png",
    link: "/category/vegetables",
    bg: "bg-green-200",
  },
  {
    id: 3,
    title: "Baked Foods",
    image: "baked3.png",
    link: "/category/bakeries",
    bg: "bg-orange-200",
  },
  {
    id: 4,
    title: "Fresh Meats",
    image: "meat2.png",
    link: "/category/meats",
    bg: "bg-red-200",
  },
  {
    id: 5,
    title: "Ice Creams",
    image: "icecream.webp",
    link: "/category/iceCreams",
    bg: "bg-pink-200",
  },
  {
    id: 6,
    title: "Drinks & Beverages",
    image: "drinks.png",
    link: "/category/drinksandBeverages",
    bg: "bg-blue-300",
  },
];

const Categories = () => {
  return (
    <div className="py-6 sm:py-10">
      <header className="text-xl font-semibold lg:text-2xl">
        Shop By Categories
      </header>
      <div className="grid w-full grid-cols-2 gap-2 py-4 sm:grid-cols-3 place-content-center">
        {CategoryData.map((category) => (
          <Link href={category?.link} key={category.id}>
            <div
              className={`${category?.bg} w-full bg-amber-00 h-56 sm:h-64 lg:h-40 pt-4  relative grid lg:grid-cols-2 overflow-hidden  px-3 roundg `}
            >
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white">
                  {category?.title}
                </h1>
                 <button className="bg-white py-1 px-2 text-lg hover:bg-black hover:text-white transition-all ease-in rounded-lg my-3">Show Now</button>
              </div>
              <div>
                <Image
                  src={`/images/${category?.image}`}
                  width={220}
                  height={220}
                  alt={category?.title}
                  className="object-contain"
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
