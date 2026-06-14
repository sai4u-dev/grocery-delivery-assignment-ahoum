import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../constants";
import { Button } from "../../components/common";

const OrderFailedPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white lg:bg-[#F8FAFB]">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-md text-center lg:rounded-[36px] lg:bg-white lg:p-10 lg:shadow-sm">
          <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-red-50 text-7xl">
            ❌
          </div>

          <h1 className="mt-10 text-[28px] font-bold leading-tight text-[#181725] lg:text-4xl">
            Oops! Order Failed
          </h1>

          <p className="mt-4 text-[16px] leading-7 text-[#7C7C7C]">
            Something went wrong while placing your order. Please try again.
          </p>

          <div className="mt-10">
            <Button onClick={() => navigate(ROUTES.CHECKOUT)}>
              Please Try Again
            </Button>
          </div>

          <button
            type="button"
            onClick={() => navigate(ROUTES.HOME)}
            className="mt-6 text-[18px] font-semibold text-[#181725]"
          >
            Back to Home
          </button>
        </div>
      </section>
    </main>
  );
};

export default OrderFailedPage;
