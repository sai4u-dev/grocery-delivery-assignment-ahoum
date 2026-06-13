import React from "react";
import SplashPage from "@/pages/auth/SplashPage";
import { Route, Routes } from "react-router-dom";
import OnboardingPage from "@/pages/auth/OnboardingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/onboard" element={<OnboardingPage />} />
    </Routes>
  );
};

export default AppRoutes;
