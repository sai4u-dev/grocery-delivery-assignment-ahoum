export const ROUTES = {
  SPLASH: "/",
  ONBOARDING: "/onboarding",
  PROFILE: "/profile",

  LOGIN: "/login",
  SIGN_UP: "/signup",
  MOBILE_NUMBER: "/number",
  VERIFICATION: "/verification",
  LOCATION: "/location",

  HOME: "/home",
  EXPLORE: "/explore",
  SEARCH: "/search",
  FILTERS: "/filters",

  PRODUCT_DETAILS: "/product/:id",

  CART: "/cart",
  FAVORITES: "/favorites",

  CHECKOUT: "/checkout",
  ORDER_SUCCESS: "/order-success",
  ORDER_FAILED: "/order-failed",
} as const;
