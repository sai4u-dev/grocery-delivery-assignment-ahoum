import type { CartItem } from "./cart.types";

export type OrderStatus = "IDLE" | "PENDING" | "SUCCESS" | "FAILED";

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
}
