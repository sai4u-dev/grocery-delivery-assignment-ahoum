import { useCartStore } from "../store";
import { calculateCartTotal } from "../utils";

export const useCart = () => {
  const items = useCartStore((state) => state.items);

  const total = calculateCartTotal(items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    total,
    totalItems,
  };
};
