// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
import FavoritesSlice from './FavoritesSlice';
import { ProductType } from './Types';


export const store = configureStore({
  reducer: {
    cart: CartSlice,
    favorites: FavoritesSlice,
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveCartToLocalStorage(state.cart.items);
  saveFavoritesToLocalStorage(state.favorites.items);
});

function saveCartToLocalStorage(cart: ProductType[]) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function saveFavoritesToLocalStorage(favorites: ProductType[]) {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
