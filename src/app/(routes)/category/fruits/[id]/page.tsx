"use client";

import { FruitData } from "@/assets/GroceriesData";
import RelatedFruits from "@/components/productTypes/freshFruit/RelatedFruits";
import { Badge, Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import { TbChevronLeft } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "@/contexts/Types";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/CartSlice";
import { GrBasket } from "react-icons/gr";
// import { useDispatch } from "react-redux";
// import { useShoppingCart } from "@/contexts/CartContext";

const SingleFruit = ({ params }: any) => {
  const name = decodeURIComponent(params.id).replace(/-/g, " ");
  const fruit = FruitData.find(
    (fruit) => fruit.name.toLowerCase() === name.toLowerCase()
  );

  // const {image, price, rating, desc} = fruit

  const dispatch = useDispatch();
  const productData = useSelector((state: StateProps) => state.cart);
  // const favoriteData = useSelector((state: StateProps) => state.cart);

  const IncreCart = () => {
    dispatch(increaseQuantity(fruit));
  };

  const DesCart = () => {
    dispatch(decreaseQuantity(fruit));
  };
  
  const AddToCart = () => {
    dispatch(addToCart(fruit));
    toast.success(`${name} added to cart`);
  };

  return (
    <div className="w-full pt-6 mx-auto max-w-7xl sm:pt-10 sm:px-4 bg-white sm:bg-gray-100">
      <div className="flex items-end justify-between pb-5 px-3">
        <Link href="/category/fruits">
          <button className=" p-2 font-semibold text-center bg-slate-100 sm:bg-white rounded-full text">
            <TbChevronLeft className="w-8 h-8" />
          </button>
        </Link>
        <Link href="/shoppingCart" className="bg-slate-100 sm:bg-white p-2 rounded-full">
          <Badge count={productData?.length}>
            <GrBasket className="h-7 w-8 " />
          </Badge>
        </Link>
      </div>

      <div className="grid w-full gap-10 sm:grid-cols-5">
        <div className="relative object-contain w-full sm:bg-white h-80 sm:h-96 sm:col-span-2">
          <Image
            src={`/images/${fruit?.image}`}
            fill
            alt="fruits"
            className="object-contain sm:border rounded-sm lg:hover:scale-105"
          />
        </div>
        <div className="w-full sm:col-span-3 bg-gray-100 px-3 py-5 rounded-tl-3xl rounded-tr-3xl">
          <h1 className="pb-3 text-2xl font-semibold">{fruit?.name}</h1>
          <Rate defaultValue={fruit?.rating} allowHalf />
          <p className="py-4 font-semibold ">
            Unit Price: GH₵: <span>{fruit?.price.toLocaleString()}</span>
          </p>
          <p>{fruit?.desc}</p>
          <div className="flex flex-wrap font-semibold items-center gap-3 py-10">
            <span>Qty:</span>
            <button
              onClick={IncreCart}
              className="px-4 py-3 border rounded-md hover:bg-black hover:text-white"
            >
              <FaPlus className="w-5 h-5 " />
            </button>
            <h5 className="px-6 py-3 text-lg border rounded-md">1</h5>
            <button
              onClick={DesCart}
              className="px-4 py-3 border rounded-md hover:bg-black hover:text-white"
            >
              <FaMinus className="w-5 h-5 " />
            </button>
            <button
              onClick={AddToCart}
              // onClick={() => {
              //   dispatch(addToCart(fruit)),
              //     toast.success(`${name} is added to Cart!`);
              // }}
              className="px-4 py-3 text-white bg-yellow-300 border rounded-lg text-lg hover:bg-blue-600"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="py-2 pb-9 font-semibold sm:pt-14 bg-gray-100 px-3 sm:px-0">
        <header className="text-xl font-semibold sm:text-2xl">
          Related Fresh Fruits
        </header>
        <div className="grid grid-cols-2 pt-8 sm:grid-auto-fit-xs gap-1.5 sm:gap-2">
          {fruit?.related.map((relate) => (
            <RelatedFruits
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

export default SingleFruit;
