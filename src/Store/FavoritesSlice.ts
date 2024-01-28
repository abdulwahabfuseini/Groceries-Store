import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";

interface ProductType {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number
}

interface FavoritesState {
  items: ProductType[];
}

const initialState: FavoritesState = {
  items: loadFavoritesFromLocalStorage(),
};

const FavoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<ProductType>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      }

      // state.items.push(action.payload);
      saveFavoritesToLocalStorage(state.items);
    },
    deleteFavorite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveFavoritesToLocalStorage(state.items);
    },
    clearFavorites: (state) => {
      state.items = [];
      saveFavoritesToLocalStorage(state.items);
    },
  },
});

function loadFavoritesFromLocalStorage(): ProductType[] {
  if (typeof window === 'undefined') {

    return [];
  }

  const storedFavorites = localStorage.getItem("favorites");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
}

function saveFavoritesToLocalStorage(favorites: ProductType[]) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

export const FavoriteActions = FavoritesSlice.actions;

export const selectFavoriteItems = (state: RootState) => state.favorites.items;

export default FavoritesSlice.reducer;
