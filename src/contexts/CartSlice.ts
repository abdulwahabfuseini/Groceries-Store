// redux/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, ProductType } from './Types';
// import { RootState } from './store';

// interface ProductType {
//   id: string;
//   name: string;
//   price: number;
// }


const initialState: CartState = {
  items: loadCartFromLocalStorage(),
//   totalQuantity: loadCartFromLocalStorage(),
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
        const newItem = action.payload
        const existingItem = state.items.find(item=> item.id === newItem.id)
        if (existingItem) {
            existingItem.quantity++
            existingItem.totalPrice += newItem.price
        } else {
            state.items.push({
                id: newItem.id,
                name: newItem.name,
                image: newItem.image,
                quantity: 1,
                price: newItem.price,
                totalPrice: newItem.price,
                // totalQuantity: 0
            })
            // state.totalQuantity++
        }
    //   state.items.push(action.payload);
      saveCartToLocalStorage(state.items);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
        const id = action.payload
        // const existingItem = state.items.find(item => item.id === id)
        // if (existingItem?.quantity === 1) {
        //     state.items = state.items.filter(item => item.id !== id)
        //     // state.totalQuantity--
        // } else {
        //     existingItem.quantity--
        //     existingItem.totalPrice -= existingItem.price
        // }
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state.items);
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
        const id = action.payload
        const existingItem = state.items.find(item => item.id === id)
        if (existingItem) {
            state.items = state.items.filter(item => item.id !== id)
           
        }
    //   state.items = state.items.filter((item) => item.name !== action.payload);
      saveCartToLocalStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    },
  },
});

function loadCartFromLocalStorage(): ProductType[] {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
}

function saveCartToLocalStorage(cart: ProductType[]) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const CartAction= CartSlice.actions;

// export const selectCartItems = (state: RootState) => state.cart.items;

export default CartSlice.reducer;
