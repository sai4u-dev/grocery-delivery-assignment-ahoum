import { Navigate, Outlet } from "react-router-dom";

import { ROUTES } from "../constants";
import { useAuthStore } from "../store";

const ProtectedRoute = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
