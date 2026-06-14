import { create } from "zustand";

import type { ProductCategory } from "../types";

interface FilterStore {
  selectedCategories: ProductCategory[];
  selectedBrands: string[];

  toggleCategory: (category: ProductCategory) => void;
  toggleBrand: (brand: string) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  selectedCategories: [],
  selectedBrands: [],

  toggleCategory: (category) =>
    set((state) => ({
      selectedCategories: state.selectedCategories.includes(category)
        ? state.selectedCategories.filter((item) => item !== category)
        : [...state.selectedCategories, category],
    })),

  toggleBrand: (brand) =>
    set((state) => ({
      selectedBrands: state.selectedBrands.includes(brand)
        ? state.selectedBrands.filter((item) => item !== brand)
        : [...state.selectedBrands, brand],
    })),

  clearFilters: () =>
    set({
      selectedCategories: [],
      selectedBrands: [],
    }),
}));
