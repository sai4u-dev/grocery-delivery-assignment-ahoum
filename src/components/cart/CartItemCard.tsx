import type { CartItem } from "../../types";
import { formatPrice } from "../../utils";
import { useCartStore } from "../../store";
import QuantityControl from "../product/QuantityControl";

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard = ({ item }: CartItemCardProps) => {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <article className="flex gap-5 border-b border-[#E2E2E2] py-6">
      <div className="flex h-24 w-24 shrink-0 items-center justify-center">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="max-h-20 object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[16px] font-bold text-[#181725]">
              {item.product.name}
            </h3>

            <p className="mt-1 text-[14px] font-medium text-[#7C7C7C]">
              {item.product.quantityLabel}
            </p>
          </div>

          <button
            type="button"
            onClick={() => removeFromCart(item.product.id)}
            className="text-2xl text-[#B3B3B3]"
            aria-label={`Remove ${item.product.name}`}
          >
            ×
          </button>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <QuantityControl
            quantity={item.quantity}
            onIncrease={() => increaseQuantity(item.product.id)}
            onDecrease={() => decreaseQuantity(item.product.id)}
          />

          <p className="text-[18px] font-bold text-[#181725]">
            {formatPrice(item.product.price * item.quantity)}
          </p>
        </div>
      </div>
    </article>
  );
};

export default CartItemCard;
