import { APP_CONFIG } from "../../constants";
import type { CartItem } from "../../types";
import { calculateCartTotal, formatPrice } from "../../utils";

interface CartSummaryProps {
  items: CartItem[];
  buttonLabel?: string;
  onCheckout?: () => void;
}

const CartSummary = ({
  items,
  buttonLabel = "Go to Checkout",
  onCheckout,
}: CartSummaryProps) => {
  const subtotal = calculateCartTotal(items);
  const deliveryFee = subtotal > 0 ? APP_CONFIG.DELIVERY_FEE : 0;
  const tax = (subtotal * APP_CONFIG.TAX_PERCENTAGE) / 100;
  const total = subtotal + deliveryFee + tax;

  return (
    <aside className="rounded-[24px] border border-[#E2E2E2] bg-white p-6 shadow-sm lg:sticky lg:top-28 ">
      <h2 className="text-2xl font-bold text-[#181725]">Order Summary</h2>

      <div className="mt-6 space-y-4">
        <SummaryRow label="Subtotal" value={formatPrice(subtotal)} />
        <SummaryRow label="Delivery" value={formatPrice(deliveryFee)} />
        <SummaryRow label="Tax" value={formatPrice(tax)} />
      </div>

      <div className="mt-6 border-t border-[#E2E2E2] pt-5 abs">
        <SummaryRow
          label="Total"
          value={formatPrice(total)}
          valueClassName="text-[#181725]"
        />
      </div>

      <button
        type="button"
        onClick={onCheckout}
        disabled={items.length === 0}
        className="mt-6 h-[67px] w-full rounded-[19px] bg-[#53B175] text-[18px] font-semibold text-white transition hover:bg-[#49A66C] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {buttonLabel}
      </button>
    </aside>
  );
};

interface SummaryRowProps {
  label: string;
  value: string;
  valueClassName?: string;
}

const SummaryRow = ({ label, value, valueClassName = "" }: SummaryRowProps) => {
  return (
    <div className="flex items-center justify-between text-[16px] font-semibold">
      <span className="text-[#7C7C7C]">{label}</span>
      <span className={valueClassName || "text-[#181725]"}>{value}</span>
    </div>
  );
};

export default CartSummary;
