import { ProductType } from "@/contexts/Types";
import { createSlice } from "@reduxjs/toolkit";


type StoreState = {
  productData: ProductType[];
  orderData: ProductType[];
  favoriteData: ProductType[];
}

const initialState: StoreState = {
  productData: [],
  orderData: [],
  favoriteData: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ==== AddToCart =====
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductType) => item?.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    // ===== Increase Quantity ===== 
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductType) => item.id === action.payload.id
      );
      existingProduct && existingProduct.quantity++;
    },

    // ===== Decrease Quantity ===== 
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductType) => item.id === action.payload.id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },

    // ======= Delete Products ===== 
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload
      );
    },

    // ===== Reset Cart ===== 
    resetCart: (state) => {
      state.productData = [];
    },

    // ===== AddToFavorite ===== 
    addToFavorite: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (item: ProductType) => item.id === action.payload.id
      );
      if (existingProduct) {
        state.favoriteData = state.favoriteData.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.favoriteData.push(action.payload);
      }
    },

    // ===== Delete Favorite ==== 
    deleteFavorite: (state, action) => {
      state.favoriteData = state.favoriteData.filter(
        (item) => item.id !== action.payload
      );
    },

    // ===== Reset Favorite ==== 
    resetFavorite: (state) => {
      state.favoriteData = [];
    },

    addOrder: (state, action) => {
      const existingOrder = state.orderData.find(
        (item: ProductType) => item.id === action.payload.id
      );
      if (existingOrder) {
        state.orderData.push(action.payload);
      } else {
        state.orderData = action.payload;
      }
    },
    
    resetOrder: (state) => {
      state.orderData = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  addOrder,
  resetOrder,
  addToFavorite,
  deleteFavorite,
  resetFavorite,
} = CartSlice.actions;


export default CartSlice.reducer;
