import { create } from "zustand";
import { products } from "../data";
import type { Product } from "../types";

interface ProductStore {
  products: Product[];

  searchTerm: string;

  setSearchTerm: (term: string) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products,

  searchTerm: "",

  setSearchTerm: (term) => set({ searchTerm: term }),
}));
