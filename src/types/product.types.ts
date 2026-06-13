export enum ProductCategory {
  FRUITS_VEGETABLES = "Fresh Fruits & Vegetables",
  COOKING_OIL_GHEE = "Cooking Oil & Ghee",
  MEAT_FISH = "Meat & Fish",
  BAKERY_SNACKS = "Bakery & Snacks",
  DAIRY_EGGS = "Dairy & Eggs",
  BEVERAGES = "Beverages",
  EGGS = "Eggs",
  NOODLES_PASTA = "Noodles & Pasta",
  CHIPS_CRISPS = "Chips & Crisps",
  FAST_FOOD = "Fast Food",
}

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
