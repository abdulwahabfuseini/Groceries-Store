// "use client"

// import { createContext, useContext, useState } from "react";
// import { CartItem, CartProps } from "./Types";

// const CartContext = createContext({} as CartProps);

// export function useShoppingCart () {
//   return useContext(CartContext);
// };

// export const ShoppingCartProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   function getItemQuantity(id: number) {
//     return cartItems.find((item) => item.id === id)?.quantity;
//   }

//   function increaseCartQty(id: number) {
//     setCartItems((currentItem) => {
//       if (currentItem.find((item) => item.id === id) == null) {
//         return [...currentItem, { id, quantity: 1 }];
//       } else {
//         return currentItem.map((item) => {
//           if (item.id === id) {
//             return { ...item, quantity: item.quantity + 1 };
//           } else {
//             return item
//           }
//         });
//       }
//     });
//   }
//   function decreaseCartQty(id: number) {
//     setCartItems((currentItem) => {
//       if (currentItem.find((item) => item.id === id)?.quantity == 1) {
//         return currentItem.filter((item) => item.id !== id);
//       } else {
//         return currentItem.map((item) => {
//           if (item.id === id) {
//             return { ...item, quantity: item.quantity - 1 };
//           } else {
//             return item;
//           }
//         });
//       }
//     });
//   }

//   function removeFromCart(id: number) {
//     setCartItems((currentItem) => {
//       return currentItem.filter((item) => item.id !== id);
//     });
//   }

//   return (
//     <CartContext.Provider
//       value={{
//         getItemQuantity,
//         increaseCartQty,
//         decreaseCartQty,
//         removeFromCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
