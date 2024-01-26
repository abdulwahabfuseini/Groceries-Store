import Shopping from "@/components/cart/Shopping";
import { useSession } from "next-auth/react";
import Signin from "../signin/page";

// export const metadata = {
//   title: "Groceries Store | Shopping Cart",
//   description: "Your Shopping Cart",
// };

const ShoppingCart = () => {
  return (
    <div className="w-full px-4 mx-auto  max-w-7xl">
      <Shopping />
    </div>
  );
};

export default ShoppingCart;
