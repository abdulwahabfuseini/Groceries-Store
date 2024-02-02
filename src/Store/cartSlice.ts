import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './Store';


interface ProductType {
  id: number;
  name: string;
  image: string;
  price: number;
  totalPrice: number;
  quantity: number;
  totalQuantity: number
}

interface CartItem extends ProductType {
  quantity: number;
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
}

const loadCartFromLocalStorage = (): CartItem[] => {
  if (typeof window === 'undefined') {
    
    return [];
  }

  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

const saveCartToLocalStorage = (cart: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const calculateTotalQuantity = (items: ProductType[]) => {
  return items.reduce((total, item) => total + item.quantity, 0);
};


const initialState: CartState = {
  items: loadCartFromLocalStorage(),
  totalQuantity: calculateTotalQuantity(loadCartFromLocalStorage()),
};

const cartSlice = createSlice({
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
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalQuantity++;
      saveCartToLocalStorage(state.items);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      const existingItem = state.items.find(item => item.id === idToRemove);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== idToRemove);
          state.totalQuantity--;
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
        saveCartToLocalStorage(state.items);
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const idToDelete = action.payload;
      state.items = state.items.filter(item => item.id !== idToDelete);
      state.totalQuantity--;
      saveCartToLocalStorage(state.items);
    },
    // getItemQuantity: (state, action: PayloadAction<number>) => {
    //   const itemId = action.payload;
    //   const item = state.items.find(item => item.id === itemId);
      
    //   // Update state with the item quantity
    //   if (item) {
    //     return item.quantity;
    //   } else {
    //     // If the item is not found, return 0
    //     return 0;
    //   }
    // },
    clearCart: state => {
      state.items = [];
      state.totalQuantity = 0;
      saveCartToLocalStorage(state.items);
    },
  },
});

export const  CartActions = cartSlice.actions;

export const selectCartProducts = (state: RootState) => state.cart;

export default cartSlice.reducer;
