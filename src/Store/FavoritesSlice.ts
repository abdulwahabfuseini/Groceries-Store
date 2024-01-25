// redux/FavoritesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, ProductType } from "../contexts/Types";
// import { RootState } from './store';

// interface ProductType {
//   id: string;
//   name: string;
// }

// interface FavoritesState {
//   items: ProductType[];
// }

const initialState: CartState = {
  items: loadFavoritesFromLocalStorage(),
};

const FavoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<ProductType>) => {
      state.items.push(action.payload);
      saveFavoritesToLocalStorage(state.items);
    },
  },
});

function loadFavoritesFromLocalStorage(): ProductType[] {
  const storedFavorites = localStorage.getItem("favorites");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
}

function saveFavoritesToLocalStorage(favorites: ProductType[]) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

export const { addToFavorite } = FavoritesSlice.actions;

// export const selectFavoriteItems = (state: RootState) => state.favorites.items;

export default FavoritesSlice.reducer;
