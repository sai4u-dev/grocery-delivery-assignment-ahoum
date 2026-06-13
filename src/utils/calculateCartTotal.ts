import type { CartItem } from "../types";

export const calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
};
