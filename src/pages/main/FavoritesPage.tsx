import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { products } from "../../data";
import { ROUTES } from "../../constants";
import { useFavoriteStore } from "../../store";

import { ProductGrid } from "../../components/product";
import { EmptyState, ScreenHeader } from "../../components/common";
import { DesktopSidebar } from "../../components/layout";

const FavoritesPage = () => {
  const navigate = useNavigate();
  const favoriteIds = useFavoriteStore((state) => state.favoriteIds);

  const favoriteProducts = useMemo(() => {
    return products.filter((product) => favoriteIds.includes(product.id));
  }, [favoriteIds]);

  if (favoriteProducts.length === 0) {
    return (
      <main className="min-h-screen bg-white lg:bg-[#F8FAFB]">
        <ScreenHeader title="Favourite" showBackButton={false} />

        <EmptyState
          title="No favorites yet"
          description="Tap the heart icon on products you like and they will appear here."
          actionLabel="Explore Products"
          onAction={() => navigate(ROUTES.EXPLORE)}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white lg:bg-[#F8FAFB]">
      {/* Mobile */}
      <section className="px-6 pb-28 lg:hidden">
        <ScreenHeader title="Favourite" showBackButton={false} />

        <ProductGrid products={favoriteProducts} />
      </section>

      {/* Desktop */}
      <section className="hidden lg:block">
        <div className="mx-auto flex max-w-7xl gap-8 px-8 py-8">
          <DesktopSidebar />

          <div className="min-w-0 flex-1 rounded-[32px] bg-white p-8 shadow-sm">
            <h1 className="text-4xl font-bold text-[#181725]">
              Favourite Products
            </h1>

            <p className="mt-2 text-[#7C7C7C]">
              Your saved grocery items in one place.
            </p>

            <div className="mt-8">
              <ProductGrid products={favoriteProducts} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FavoritesPage;
