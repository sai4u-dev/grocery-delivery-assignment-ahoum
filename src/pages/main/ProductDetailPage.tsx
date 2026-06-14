import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { products } from "../../data";
import { ROUTES } from "../../constants";
import { formatPrice } from "../../utils";
import { useCartStore, useFavoriteStore } from "../../store";

import { Button, EmptyState } from "../../components/common";
import { QuantityControl } from "../../components/product";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const addToCart = useCartStore((state) => state.addToCart);
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  const isFavorite = useFavoriteStore((state) => state.isFavorite);

  const [quantity, setQuantity] = useState(1);

  const product = useMemo(() => products.find((item) => item.id === id), [id]);

  if (!product) {
    return (
      <EmptyState
        title="Product not found"
        description="The product you are looking for does not exist."
        actionLabel="Go Home"
        onAction={() => navigate(ROUTES.HOME)}
      />
    );
  }

  const handleAddToBasket = () => {
    for (let index = 0; index < quantity; index += 1) {
      addToCart(product);
    }

    navigate(ROUTES.CART);
  };

  return (
    <main className="min-h-screen bg-white lg:bg-[#F8FAFB]">
      {/* Mobile */}
      <section className="pb-8 lg:hidden">
        <div className="rounded-b-[25px] bg-[#F2F3F2] px-6 pb-10 pt-14">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-4xl text-[#181725]"
            >
              ‹
            </button>

            <button type="button" className="text-2xl text-[#181725]">
              ⤴
            </button>
          </div>

          <div className="mt-8 flex h-64 items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-56 object-contain"
            />
          </div>
        </div>

        <div className="px-6 pt-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-[24px] font-bold text-[#181725]">
                {product.name}
              </h1>

              <p className="mt-1 text-[16px] font-semibold text-[#7C7C7C]">
                {product.quantityLabel}
              </p>
            </div>

            <button
              type="button"
              onClick={() => toggleFavorite(product.id)}
              className={`text-3xl ${
                isFavorite(product.id) ? "text-[#53B175]" : "text-[#7C7C7C]"
              }`}
            >
              {isFavorite(product.id) ? "♥" : "♡"}
            </button>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <QuantityControl
              quantity={quantity}
              onIncrease={() => setQuantity((current) => current + 1)}
              onDecrease={() =>
                setQuantity((current) => Math.max(current - 1, 1))
              }
            />

            <p className="text-[24px] font-bold text-[#181725]">
              {formatPrice(product.price * quantity)}
            </p>
          </div>

          <div className="mt-8 border-t border-[#E2E2E2] pt-5">
            <h2 className="text-[16px] font-semibold text-[#181725]">
              Product Detail
            </h2>

            <p className="mt-3 text-[13px] leading-6 text-[#7C7C7C]">
              {product.description}
            </p>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-[#E2E2E2] pt-5">
            <p className="text-[16px] font-semibold text-[#181725]">
              Nutritions
            </p>

            <span className="rounded-md bg-[#EBEBEB] px-2 py-1 text-xs font-semibold text-[#7C7C7C]">
              100gr
            </span>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-[#E2E2E2] pt-5">
            <p className="text-[16px] font-semibold text-[#181725]">Review</p>

            <p className="text-sm text-[#F3603F]">★★★★★</p>
          </div>

          <div className="mt-8">
            <Button onClick={handleAddToBasket}>Add To Basket</Button>
          </div>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:block">
        <div className="mx-auto max-w-7xl px-8 py-10">
          <div className="grid grid-cols-2 gap-10 rounded-[36px] bg-white p-10 shadow-sm">
            <div className="flex min-h-[560px] items-center justify-center rounded-[32px] bg-[#F2F3F2]">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[420px] object-contain"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#53B175]">
                {product.category}
              </p>

              <div className="mt-4 flex items-start justify-between gap-4">
                <h1 className="text-5xl font-bold tracking-[-0.04em] text-[#181725]">
                  {product.name}
                </h1>

                <button
                  type="button"
                  onClick={() => toggleFavorite(product.id)}
                  className={`text-4xl ${
                    isFavorite(product.id) ? "text-[#53B175]" : "text-[#7C7C7C]"
                  }`}
                >
                  {isFavorite(product.id) ? "♥" : "♡"}
                </button>
              </div>

              <p className="mt-2 text-lg font-semibold text-[#7C7C7C]">
                {product.quantityLabel}
              </p>

              <p className="mt-6 text-[16px] leading-7 text-[#7C7C7C]">
                {product.description}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <QuantityControl
                  quantity={quantity}
                  onIncrease={() => setQuantity((current) => current + 1)}
                  onDecrease={() =>
                    setQuantity((current) => Math.max(current - 1, 1))
                  }
                />

                <p className="text-4xl font-bold text-[#181725]">
                  {formatPrice(product.price * quantity)}
                </p>
              </div>

              <Button className="mt-10" onClick={handleAddToBasket}>
                Add To Basket
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailPage;
