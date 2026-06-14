import { create } from "zustand";
import { persist } from "zustand/middleware";

import { STORAGE_KEYS } from "../constants";

interface FavoriteStore {
  favoriteIds: string[];

  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favoriteIds: [],

      toggleFavorite: (productId) =>
        set((state) => ({
          favoriteIds: state.favoriteIds.includes(productId)
            ? state.favoriteIds.filter((id) => id !== productId)
            : [...state.favoriteIds, productId],
        })),

      isFavorite: (productId) => get().favoriteIds.includes(productId),
    }),
    {
      name: STORAGE_KEYS.FAVORITES,
    },
  ),
);
