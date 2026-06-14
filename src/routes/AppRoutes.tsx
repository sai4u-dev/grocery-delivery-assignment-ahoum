import { Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "../constants";

import { AppLayout, AuthLayout } from "../components/layout";

import SplashPage from "../pages/auth/SplashPage";
import OnboardingPage from "../pages/auth/OnboardingPage";
import MobileNumberPage from "../pages/auth/MobileNumberPage";
import VerificationPage from "../pages/auth/VerificationPage";
import LocationPage from "../pages/auth/LocationPage";

import HomePage from "../pages/main/HomePage";
import ExplorePage from "../pages/main/ExplorePage";
import SearchPage from "../pages/main/SearchPage";
import FiltersPage from "../pages/main/FiltersPage";
import ProductDetailPage from "../pages/main/ProductDetailPage";
import CartPage from "../pages/main/CartPage";
import FavoritesPage from "../pages/main/FavoritesPage";

import CheckoutPage from "../pages/checkout/CheckoutPage";
import OrderSuccessPage from "../pages/checkout/OrderSuccessPage";
import OrderFailedPage from "../pages/checkout/OrderFailedPage";
import SignupPage from "@/pages/auth/SignupPage";
import LoginPage from "@/pages/auth/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.SPLASH} element={<SplashPage />} />
        <Route path={ROUTES.ONBOARDING} element={<OnboardingPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.SIGN_UP} element={<SignupPage />} />
        <Route path={ROUTES.MOBILE_NUMBER} element={<MobileNumberPage />} />
        <Route path={ROUTES.VERIFICATION} element={<VerificationPage />} />
        <Route path={ROUTES.LOCATION} element={<LocationPage />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.EXPLORE} element={<ExplorePage />} />
        <Route path={ROUTES.SEARCH} element={<SearchPage />} />
        <Route path={ROUTES.FILTERS} element={<FiltersPage />} />
        <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetailPage />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
        <Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
        <Route path={ROUTES.ORDER_SUCCESS} element={<OrderSuccessPage />} />
        <Route path={ROUTES.ORDER_FAILED} element={<OrderFailedPage />} />
      </Route>

      <Route path="*" element={<Navigate to={ROUTES.SPLASH} replace />} />
    </Routes>
  );
};

export default AppRoutes;
