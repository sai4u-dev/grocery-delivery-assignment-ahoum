import { create } from "zustand";

interface FavoriteStore {
  favoriteIds: string[];

  toggleFavorite: (productId: string) => void;

  isFavorite: (productId: string) => boolean;
}

export const useFavoriteStore = create<FavoriteStore>((set, get) => ({
  favoriteIds: [],

  toggleFavorite: (productId) =>
    set((state) => ({
      favoriteIds: state.favoriteIds.includes(productId)
        ? state.favoriteIds.filter((id) => id !== productId)
        : [...state.favoriteIds, productId],
    })),

  isFavorite: (productId) => get().favoriteIds.includes(productId),
}));
