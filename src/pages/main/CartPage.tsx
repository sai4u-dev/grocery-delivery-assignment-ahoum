import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../constants";
import { useCartStore } from "../../store";

import { CartItemCard, CartSummary } from "../../components/cart";
import { EmptyState, ScreenHeader } from "../../components/common";

const CartPage = () => {
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-white lg:bg-[#F8FAFB]">
        <ScreenHeader title="My Cart" showBackButton={false} />

        <EmptyState
          title="Your cart is empty"
          description="Add some fresh groceries to your cart and continue shopping."
          actionLabel="Start Shopping"
          onAction={() => navigate(ROUTES.HOME)}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white lg:bg-[#F8FAFB]">
      {/* Mobile */}
      <section className="pb-32 lg:hidden">
        <ScreenHeader title="My Cart" showBackButton={false} />

        <div className="border-t border-[#E2E2E2] px-6">
          {items.map((item) => (
            <CartItemCard key={item.product.id} item={item} />
          ))}
        </div>

        <div className="fixed bottom-24 left-6 right-6">
          <button
            type="button"
            onClick={() => navigate(ROUTES.CHECKOUT)}
            className="h-[67px] w-full rounded-[19px] bg-[#53B175] text-[18px] font-semibold text-white shadow-lg shadow-green-200 transition active:scale-[0.98]"
          >
            Go to Checkout
          </button>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:block">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_380px] gap-8 px-8 py-8">
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <h1 className="text-4xl font-bold text-[#181725]">My Cart</h1>

            <div className="mt-6 border-t border-[#E2E2E2]">
              {items.map((item) => (
                <CartItemCard key={item.product.id} item={item} />
              ))}
            </div>
          </div>

          <CartSummary
            items={items}
            onCheckout={() => navigate(ROUTES.CHECKOUT)}
          />
        </div>
      </section>
    </main>
  );
};

export default CartPage;
