import { create } from "zustand";
import type { CartItem, Product } from "../types";

interface CartStore {
  items: CartItem[];

  addToCart: (product: Product) => void;

  removeFromCart: (productId: string) => void;

  increaseQuantity: (productId: string) => void;

  decreaseQuantity: (productId: string) => void;

  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        items: [...state.items, { product, quantity: 1 }],
      };
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    })),

  increaseQuantity: (productId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    })),

  decreaseQuantity: (productId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity: Math.max(item.quantity - 1, 1),
            }
          : item,
      ),
    })),

  clearCart: () => set({ items: [] }),
}));
