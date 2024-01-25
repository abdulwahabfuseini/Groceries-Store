// cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, ProductType } from './Types';

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
  totalQuantity: calculateTotalQuantity(loadCartFromLocalStorage()),
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
      }
      state.totalQuantity = calculateTotalQuantity(state.items);
      saveCartToLocalStorage(state.items);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
        state.totalQuantity = calculateTotalQuantity(state.items);
        saveCartToLocalStorage(state.items);
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      state.totalQuantity = calculateTotalQuantity(state.items);
      saveCartToLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      saveCartToLocalStorage(state.items);
    },
  },
});

function loadCartFromLocalStorage(): ProductType[] {
  try {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return [];
  }
}

function saveCartToLocalStorage(cart: ProductType[]) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function calculateTotalQuantity(items: ProductType[]): number {
  return items.reduce((total, item) => total + item.quantity, 0);
}

export const CartAction = CartSlice.actions;
export default CartSlice.reducer;
