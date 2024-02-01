import { ProductType, ShoppingProps } from "@/contexts/Types";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import { message } from "antd";
import Image from "next/image";
import { CartActions } from "@/Store/cartSlice";

const CartItems = ({
  id,
  name,
  price,
  image,
  quantity,
  totalPrice,
}: ProductType) => {

  const dispatch = useDispatch();

  const InCartItem = () => {
    dispatch(
      CartActions.addToCart({
        id,
        name,
        price,
        image,
        totalPrice,
        quantity,
        totalQuantity: 0
      })
    );
  };

  const DesCartItem = () => {
    dispatch(CartActions.removeFromCart(id));
  };

  const DltCartItem = () => {
    dispatch(CartActions.deleteFromCart(id));
    message.success(`${name} Remove Form Cart`);
  };

  return (
    <div>
      {/* ====== Mobile Cart ======  */}
      <div className="flex items-center justify-between w-full pb-1 mb-4 border-b sm:hidden">
        <Image
          width={500}
          height={500}
          src={`/images/${image}`}
          alt={name}
          className="object-contain w-20 h-20 p-1 bg-white "
        />
        <div className="grid place-items-center gap-y-1">
          <h1 className="text-lg font-semibold">{name}</h1>
          <div className="flex items-center gap-3 p-2 border-2 rounded-lg">
            <button onClick={InCartItem} className="cursor-pointer ">
              <FaPlus />
            </button>
            <button className="font-bold ">{quantity}</button>
            <button onClick={DesCartItem} className="cursor-pointer ">
              <FaMinus />
            </button>
          </div>
          <h4 className=" text-sm text-center">Unit Price: GH₵: {price}</h4>
        </div>
        <div className="grid place-items-center gap-y-2">
          <FaTrash onClick={DltCartItem} className="w-5 h-5 text-red-600 cursor-pointer" />
          <h4 className="text-sm text-center">GH₵: {totalPrice}</h4>
        </div>
      </div>

      {/* ====== medium and Large Screen Cart ======  */}
      <div className="items-center justify-between hidden w-full pb-1 mb-4 border-b sm:flex">
        <div className="flex items-center gap-4 ">
          <Image
            width={500}
            height={500}
            src={`/images/${image}`}
            alt={name}
            className="object-contain w-20 h-20 p-1 bg-white "
          />
          <div>
            <h1 className="text-lg">{name}</h1>
            <h4 className="text-lg">Unit Price: GH₵: {price}</h4>
          </div>
        </div>
        <div className="flex items-center gap-3 p-2 border-2 rounded-lg">
          <button onClick={InCartItem} className="cursor-pointer ">
            <FaPlus />
          </button>
          <button className="font-bold ">{quantity}</button>
          <button onClick={DesCartItem} className="cursor-pointer ">
            <FaMinus />
          </button>
        </div>
        <div className="grid place-items-center gap-y-2">
          <FaTrash onClick={DltCartItem} className="w-5 h-5" />

          <h4 className="text-lg">GH₵: {totalPrice}</h4>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
