import type { ProductCategory } from "./product.types";

export interface FilterOption {
  id: string;
  label: string;
  isSelected: boolean;
}

export interface ProductFilters {
  categories: ProductCategory[];
  brands: string[];
}
