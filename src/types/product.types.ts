export type ProductCategory =
  | "Fresh Fruits & Vegetables"
  | "Cooking Oil & Ghee"
  | "Meat & Fish"
  | "Bakery & Snacks"
  | "Dairy & Eggs"
  | "Beverages"
  | "Eggs"
  | "Noodles & Pasta"
  | "Chips & Crisps"
  | "Fast Food";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  brand: string;
  image: string;
  price: number;
  oldPrice?: number;
  quantityLabel: string;
  rating: number;
  isBestSelling: boolean;
  isExclusiveOffer: boolean;
  inStock: boolean;
}
