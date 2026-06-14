import { useNavigate } from "react-router-dom";
import type { Product } from "../../types";
import { formatPrice } from "../../utils";
import { useCartStore } from "../../store";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <article className="rounded-[18px] border border-[#E2E2E2] bg-white p-4 transition hover:shadow-lg">
      <button
        type="button"
        onClick={() => navigate(`/product/${product.id}`)}
        className="block w-full text-left"
      >
        <div className="flex h-28 items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-24 object-contain"
          />
        </div>

        <h3 className="mt-5 line-clamp-2 text-[16px] font-bold text-[#181725]">
          {product.name}
        </h3>

        <p className="mt-1 text-[14px] font-medium text-[#7C7C7C]">
          {product.quantityLabel}
        </p>
      </button>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-[18px] font-bold text-[#181725]">
          {formatPrice(product.price)}
        </p>

        <button
          type="button"
          onClick={() => addToCart(product)}
          className="flex h-[45px] w-[45px] items-center justify-center rounded-[17px] bg-[#53B175] text-3xl font-light leading-none text-white transition active:scale-95"
          aria-label={`Add ${product.name} to cart`}
        >
          +
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
