"use client";

import { useSelector } from "react-redux";
import { Button } from "antd";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { selectCartProducts } from "@/Store/cartSlice";

const Payment = () => {
  const cartProducts = useSelector(selectCartProducts);
  const { data: session } = useSession();

  //   Stripe Payment
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error("Stripe is not initialized");
      }

      const response = await fetch("http://localhost:3000/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartProducts,
          email: session?.user?.email,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create Stripe Payment");
      }

      const data = await response.json();

      // Assuming `stripePromise` is a Promise that resolves to a valid Stripe object
      stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.error("Error during checkout:");
      // Handle the error in your UI
    }
  };
  return (
    <div className="p-4 bg-white">
      <h1 className="text-lg font-semibold">Click to Accept Payment</h1>
      <div className="grid sm:grid-cols-2 gap-3 py-5 ">
        <span className="border-2 rounded-lg p-2.5 text-lg">
          {session?.user?.name}
        </span>
        <span className="border-2 rounded-lg p-2.5 text-lg">
          {session?.user?.email}
        </span>
      </div>
      <Button
        type="primary"
        htmlType="submit"
        onClick={handleCheckout}
        className="h-11 text-lg text-white bg-green-600 hover:ring-2"
      >
        Accept Payment
      </Button>
    </div>
  );
};

export default Payment;
