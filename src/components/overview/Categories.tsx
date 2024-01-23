import Image from "next/image";
import Link from "next/link";


const Categories = () => {
  return (
    <div className="py-6 sm:py-10">
      <header className="text-xl font-semibold lg:text-2xl">Shop By Categories</header>
      <div className="grid w-full grid-cols-2 gap-2 py-6 sm:grid-auto-fit-xs place-content-center">
        <Link href="/category/fruits">
          <div className="w-full h-full pt-4 overflow-hidden bg-red-100 rounded-lg shadow-sm">
            <h1 className="sm:text-lg font-semibold px-1.5 pb-1.5">
              Fresh Fruits
            </h1>
            <div className="relative w-full h-36">
              <Image
                src="/images/fruits2.png"
                fill
                alt="fruits"
                className="object-cover"
              />
            </div>
          </div>
        </Link>
        <Link href="/category/vegetables">
          <div className="w-full h-full pt-4 overflow-hidden bg-green-100 rounded-lg shadow-sm">
            <h1 className="sm:text-lg font-semibold px-1.5 pb-1.5">
              Organic Vegetables
            </h1>
            <div className="relative w-full h-36">
              <Image
                src="/images/vegetables.png"
                fill
                alt="vegetables"
                className="object-cover"
              />
            </div>
          </div>
        </Link>
        <Link href="/category/bakeries">
          <div className="w-full h-full pt-4 overflow-hidden bg-purple-100 rounded-lg shadow-sm">
            <h1 className="sm:text-lg font-semibold px-1.5 pb-1.5">
              Baked Foods
            </h1>
            <div className="relative w-full h-36">
              <Image
                src="/images/baked3.png"
                fill
                alt="Bakery"
                className="object-cover"
              />
            </div>
          </div>
        </Link>

        <Link href="/category/meats">
          <div className="w-full h-full pt-4 overflow-hidden bg-pink-100 rounded-lg shadow-sm">
            <h1 className="sm:text-lg font-semibold px-1.5 pb-1.5">
              Fresh Meats
            </h1>
            <div className="relative w-full h-36">
              <Image
                src="/images/meat2.png"
                fill
                alt="meats"
                className="object-cover"
              />
            </div>
          </div>
        </Link>

        <Link href="/category/iceCreams">
          <div className="w-full h-full pt-4 overflow-hidden bg-orange-100 rounded-lg shadow-sm">
            <h1 className="sm:text-lg font-semibold px-1.5 pb-1.5">
              Ice Creams
            </h1>
            <div className="relative w-full h-36">
              <Image
                src="/images/iceCreams/icecream.webp"
                fill
                alt="iceCream"
                className="object-cover"
              />
            </div>
          </div>
        </Link>

        <Link href="/category/drinksandBeverages">
          <div className="w-full h-full pt-4 overflow-hidden bg-yellow-100 rounded-lg shadow-sm">
            <h1 className="sm:text-lg font-semibold px-1.5 pb-1.5">
              Drinks & Beverages
            </h1>
            <div className="relative w-full h-36">
              <Image
                src="/images/drinks.png"
                fill
                alt="drinks"
                className="object-cover"
              />
            </div>
          </div>
        </Link>

        {/* <div className="w-full h-full pt-4 overflow-hidden bg-blue-100 rounded-lg shadow-sm">
          <h1 className="text-lg font-semibold px-1.5 pb-1.5">Icecreams</h1>
          <div className="relative w-full h-36">
            <Image src="/images/fruits2.jpeg" fill alt="icreams" className="object-cover" />
          </div>
        </div>
        <div className="w-full h-full pt-4 overflow-hidden bg-purple-100 rounded-lg shadow-sm">
          <h1 className="text-lg font-semibold px-1.5 pb-1.5">Fruits</h1>
          <div className="relative w-full h-36">
            <Image src="/images/fruits2.jpeg" fill alt="fruit" className="object-cover" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Categories;
