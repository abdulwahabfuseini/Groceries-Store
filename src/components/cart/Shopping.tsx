"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { TbChevronLeft } from "react-icons/tb";
import { GiShoppingCart } from "react-icons/gi";
import { Button, Popconfirm, message } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import Signin from "@/app/(routes)/signin/page";
import CartItems from "@/components/cart/CartItems";
import { CartActions, selectCartProducts } from "@/Store/cartSlice";


const Shopping = () => {
  const cartProducts = useSelector(selectCartProducts);
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();

  let totalAmount = 0;
  const itemsList = useSelector(selectCartProducts);

  if (itemsList.items) {
    for (const item of itemsList.items) {
      if (item.totalPrice && !isNaN(item.totalPrice)) {
        totalAmount += item.totalPrice;
      }
    }
  }

  let DeliveryPrice = 30;

  const GrandTotal = totalAmount + DeliveryPrice;


  //   Stripe Payment
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cartProducts,
        email: session?.user?.email,
      }),
    });
    const data = await response.json();

    if (response.ok) {
      // await dispatch(saveOrder({ order: productData, id: data.id }));
      stripe?.redirectToCheckout({ sessionId: data.id });
      // dispatch(resetCart());
    } else {
      throw new Error("Failed to create Stripe Payment");
    }
  };

  const ClearCart = () => {
    dispatch(CartActions.clearCart());
    toast.success("Cart successful cleared");
  };

  const cancel = () => {
    // console.log(e);
    message.error("Click on No");
  };

  return (
    <>
      {!session?.user ? (
        <div className="py-12 sm:py-20">
          <Link href="/category">
            <button className=" p-2 font-semibold text-center bg-white rounded-full text">
              <TbChevronLeft className="w-8 h-8" />
            </button>
          </Link>
          <div className="flex flex-col  py-6 w-fu-ll sm:px-6 lg:px-3 gap-x-10 sm:mx-auto sm:max-w-7xl  gap-y-6 lg:flex-row">
            <div className="w-full">
              {cartProducts.items.length === 0 && (
                <div className="space-y-8 text-center">
                  <h1 className="text-2xl font-semibold sm:text-3xl">
                    Your Shopping Cart is empty
                  </h1>
                  <GiShoppingCart className="grid w-full font-bold h-44 place-items-center" />
                  <Button
                    onClick={() => router.push("/category")}
                    type="primary"
                    className="h-12 text-lg bg-blue-600"
                  >
                    Start Shopping
                  </Button>
                </div>
              )}
              <h1
                className={`${
                  cartProducts.items.length === 0 ? "hidden" : "block"
                } text-2xl pb-8`}
              >
                Your Shopping Cart item(s): {cartProducts.items.length}
              </h1>
              {cartProducts.items.map((cart) => {
                return (
                  <CartItems
                    key={cart.id}
                    id={cart.id}
                    name={cart.name}
                    image={cart.image}
                    price={cart.price}
                    totalPrice={cart.totalPrice}
                    quantity={cart.quantity}
                  />
                );
              })}
              <div
                className={`${
                  cartProducts.items.length === 0
                    ? "hidden"
                    : "flex items-center justify-between my-4 font-bold gap-x-2"
                }`}
              >
                <Popconfirm
                  title="Clear Cart"
                  description="Are you sure want to clear cart?"
                  icon={
                    <QuestionCircleOutlined
                      style={{
                        color: "red",
                      }}
                    />
                  }
                  onConfirm={ClearCart}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button
                    danger
                    className="h-12 mb-2 text-lg border-2 rounded-lg bg-slate-900"
                  >
                    Clear Cart
                  </Button>
                </Popconfirm>
                <span className=" text-Red">SubTotal: GH₵: {totalAmount}</span>
              </div>
            </div>
            <div
              className={`${
                cartProducts.items.length === 0 ? "hidden" : "grid"
              }`}
            >
              <div className="w-full p-4 bg-white rounded shadow-sm sm:w-96 h-96">
                <h6 className="py-2 font-semibold border-b-2 text-xl">
                  Order Summary
                </h6>
                <div className="flex items-center justify-between py-2 gap-x-6 text-lg">
                  <h4>Selected {cartProducts.items.length} item(s) Price </h4>
                  <p className="text-center ">GH₵: {totalAmount}</p>
                </div>
                <div className="flex items-center justify-between py-2 gap-x-6">
                  <h4>Discount</h4>
                  <p>GH₵: 0.00</p>
                </div>
                <div className="flex items-center justify-between py-2 gap-x-6">
                  <h4>Delivery Cost</h4>
                  <p>GH₵: {DeliveryPrice}</p>
                </div>
                <div className="mt-16 border-t-2">
                  <div className="flex items-center justify-between py-2 gap-x-6">
                    <h2 className="text-xl font-semibold">Grand Total</h2>
                    <p>GH₵: {GrandTotal}</p>
                  </div>
                  <Button
                    onClick={handleCheckout}
                    type="primary"
                    className="w-full h-10 text-lg text-white bg-green-600"
                  >
                    Proceed to Checkout
                  </Button>
                  <button
                    onClick={() => router.push("/category")}
                    className="flex items-center justify-center w-full gap-1 py-2 text-base text-yellow-500 cursor-pointer"
                  >
                    or <h3>Continue Shopping</h3>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Signin />
      )}
    </>
  );
};

export default Shopping;
