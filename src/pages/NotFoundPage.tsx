import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";
import { Button } from "../components/common";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#53B175]">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-[#181725]">
          Page not found
        </h2>

        <p className="mt-3 text-[#7C7C7C]">
          The page you're looking for doesn't exist.
        </p>

        <div className="mt-8">
          <Button onClick={() => navigate(ROUTES.HOME)}>Go Home</Button>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
