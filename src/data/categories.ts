import {
  backeryAndSnacksImage,
  bevaragesImage,
  dairyAndEggsImage,
  fruitAndVegetablesImage,
  meatAndFishImage,
  oilsAndGheeImage,
} from "@/assets/images";
import { ProductCategory } from "../types";

export interface CategoryItem {
  id: string;
  name: ProductCategory;
  image: string;
  backgroundColor: string;
  borderColor: string;
}

export const categories: CategoryItem[] = [
  {
    id: "cat-1",
    name: ProductCategory.FRUITS_VEGETABLES,
    image: fruitAndVegetablesImage,
    backgroundColor: "bg-[#53B175]/10",
    borderColor: "border-[#53B175]/70",
  },
  {
    id: "cat-2",
    name: ProductCategory.COOKING_OIL_GHEE,
    image: oilsAndGheeImage,
    backgroundColor: "bg-[#F8A44C]/10",
    borderColor: "border-[#F8A44C]/70",
  },
  {
    id: "cat-3",
    name: ProductCategory.MEAT_FISH,
    image: meatAndFishImage,
    backgroundColor: "bg-[#F7A593]/20",
    borderColor: "border-[#F7A593]/70",
  },
  {
    id: "cat-4",
    name: ProductCategory.BAKERY_SNACKS,
    image: backeryAndSnacksImage,
    backgroundColor: "bg-[#D3B0E0]/20",
    borderColor: "border-[#D3B0E0]/70",
  },
  {
    id: "cat-5",
    name: ProductCategory.DAIRY_EGGS,
    image: dairyAndEggsImage,
    backgroundColor: "bg-[#FDE598]/25",
    borderColor: "border-[#FDE598]",
  },
  {
    id: "cat-6",
    name: ProductCategory.BEVERAGES,
    image: bevaragesImage,
    backgroundColor: "bg-[#B7DFF5]/25",
    borderColor: "border-[#B7DFF5]",
  },
];
