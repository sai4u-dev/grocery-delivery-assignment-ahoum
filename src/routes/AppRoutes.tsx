import React from "react";
import SplashPage from "@/pages/auth/SplashPage";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
    </Routes>
  );
};

export default AppRoutes;
