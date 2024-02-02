
import Shopping from "@/components/cart/Shopping";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Groceries Store | Shopping Cart",
  description: "Your Shopping Cart",
}


const ShoppingCart = () => {
  return (
    <div className="w-full px-3 sm:px-5 mx-auto  max-w-7xl">
      <Shopping />
    </div>
  );
};

export default ShoppingCart;
