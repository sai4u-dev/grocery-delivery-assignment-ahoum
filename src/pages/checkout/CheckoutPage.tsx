import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../constants";
import { useCartStore } from "../../store";

import { CartItemCard, CartSummary } from "../../components/cart";
import { EmptyState, ScreenHeader } from "../../components/common";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  const handlePlaceOrder = () => {
    const isSuccess = Math.random() > 0.2;

    if (isSuccess) {
      clearCart();
      navigate(ROUTES.ORDER_SUCCESS);
      return;
    }

    navigate(ROUTES.ORDER_FAILED);
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-white lg:bg-[#F8FAFB]">
        <ScreenHeader title="Checkout" />

        <EmptyState
          title="No items to checkout"
          description="Your cart is empty. Add products before placing an order."
          actionLabel="Go Shopping"
          onAction={() => navigate(ROUTES.HOME)}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white lg:bg-[#F8FAFB]">
      {/* Mobile */}
      <section className="pb-8 lg:hidden">
        <ScreenHeader title="Checkout" />

        <div className="border-t border-[#E2E2E2] px-6">
          <CheckoutRow label="Delivery" value="Select Method" />
          <CheckoutRow label="Payment" value="Card" />
          <CheckoutRow label="Promo Code" value="Pick discount" />
          <CheckoutRow label="Total Cost" value="Calculated" />

          <p className="mt-5 text-[13px] leading-6 text-[#7C7C7C]">
            By placing an order you agree to our Terms and Conditions.
          </p>

          <button
            type="button"
            onClick={handlePlaceOrder}
            className="mt-8 h-[67px] w-full rounded-[19px] bg-[#53B175] text-[18px] font-semibold text-white transition active:scale-[0.98]"
          >
            Place Order
          </button>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:block">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_380px] gap-8 px-8 py-8">
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <h1 className="text-4xl font-bold text-[#181725]">Checkout</h1>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <CheckoutInput label="Full Name" placeholder="Sai Narendra" />
              <CheckoutInput
                label="Phone Number"
                placeholder="+91 98765 43210"
              />
              <CheckoutInput
                label="Delivery Address"
                placeholder="Hyderabad, Telangana"
              />
              <CheckoutInput label="Payment Method" placeholder="Card / Cash" />
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#181725]">Order Items</h2>

              <div className="mt-4 border-t border-[#E2E2E2]">
                {items.map((item) => (
                  <CartItemCard key={item.product.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          <CartSummary
            items={items}
            buttonLabel="Place Order"
            onCheckout={handlePlaceOrder}
          />
        </div>
      </section>
    </main>
  );
};

interface CheckoutRowProps {
  label: string;
  value: string;
}

const CheckoutRow = ({ label, value }: CheckoutRowProps) => {
  return (
    <div className="flex items-center justify-between border-b border-[#E2E2E2] py-5">
      <span className="text-[18px] font-semibold text-[#7C7C7C]">{label}</span>
      <span className="text-[16px] font-semibold text-[#181725]">
        {value} ›
      </span>
    </div>
  );
};

interface CheckoutInputProps {
  label: string;
  placeholder: string;
}

const CheckoutInput = ({ label, placeholder }: CheckoutInputProps) => {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#7C7C7C]">{label}</span>

      <input
        placeholder={placeholder}
        className="mt-3 h-14 w-full rounded-2xl border border-[#E2E2E2] px-5 text-[#181725] outline-none focus:border-[#53B175]"
      />
    </label>
  );
};

export default CheckoutPage;
