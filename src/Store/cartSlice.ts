// import { ProductType } from "@/contexts/Types";
// import { createSlice } from "@reduxjs/toolkit";

// const items =
//   localStorage.getItem("itemsList") !== null
//     ? JSON.parse(localStorage.getItem("itemsList"))
//     : [];

// const totalQuantity =
//   localStorage.getItem("totalQuantity") !== null
//     ? JSON.parse(localStorage.getItem("totalQuantity"))
//     : 0;

// const setItemsFunc = (item: ProductType, totalQuantity: number) => {
//   localStorage.setItem("itemsList", JSON.stringify(item));
//   localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
// };

// const initialState = {
//   itemsList: items,
//   totalQuantity: totalQuantity,
// };

// const cartSlice = createSlice({
//   name: "Cart",
//   initialState,
//   reducers: {
//     // ==== AddToCart ====
//     addToCart(state, action){
//         const newItem = action.payload
//         const existingItem = state.itemsList.find((item: ProductType)  => item.id === newItem.id)
//         if (existingItem) {
//             existingItem.quantity++
//             existingItem.totalPrice += newItem.price
//         } else {
//             state.itemsList.push({
//                 id: newItem.id,
//                 name: newItem.name,
//                 cover: newItem.cover,
//                 quantity: 1,
//                 price: newItem.price,
//                 totalPrice: newItem.price,
//             })
//             state.totalQuantity++
//         }
//         setItemsFunc(
//             state.itemsList.map((item: ProductType) => item),
//             state.totalQuantity
//         )
//     },

//     // ==== RemoveFromCart ====
//     removeFromCart(state, action){
//         const id = action.payload
//         const existingItem = state.itemsList.find((item: ProductType) => item.id === id)
//         if (existingItem.quantity === 1) {
//             state.itemsList = state.itemsList.filter((item: ProductType) => item.id !== id)
//             state.totalQuantity--
//             localStorage.setItem("itemsList", JSON.stringify(state.itemsList))
//         } else {
//             existingItem.quantity--
//             existingItem.totalPrice -= existingItem.price
//         }
//     },

//     // ==== DeleteFromCart ====
//     deleteFromCart(state, action){
//         const id = action.payload
//         const existingItem = state.itemsList.find((item: ProductType) => item.id === id)
//         if (existingItem) {
//             state.itemsList = state.itemsList.filter((item: ProductType) => item.id !== id)
//             localStorage.setItem("itemsList", JSON.stringify(state.itemsList))
//         }
//     },

//     // ==== ClearCart ====
//     clearCart(state){
//         state.itemsList = []
//         localStorage.setItem("itemsList", JSON.stringify(state.itemsList))
//     }
//   },
// });

// export const CartActions = cartSlice.actions;
// export default cartSlice;
