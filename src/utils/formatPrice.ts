import { APP_CONFIG } from "../constants/app";

export const formatPrice = (price: number): string => {
  return `${APP_CONFIG.CURRENCY}${price.toFixed(2)}`;
};
