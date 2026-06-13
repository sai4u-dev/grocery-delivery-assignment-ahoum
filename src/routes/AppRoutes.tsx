import React from "react";
import SplashPage from "@/pages/auth/SplashPage";
import { Route, Routes } from "react-router-dom";
import OnboardingPage from "@/pages/auth/OnboardingPage";
import SignInPage from "@/pages/auth/SignupPage";
import MobileNumberPage from "@/pages/auth/MobileNumberPage";
import FiltersPage from "@/pages/main/FiltersPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/onboard" element={<OnboardingPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/mobile" element={<MobileNumberPage />} />
      <Route path="/mobile" element={<MobileNumberPage />} />
      <Route path="/filter" element={<FiltersPage />} />
    </Routes>
  );
};

export default AppRoutes;
