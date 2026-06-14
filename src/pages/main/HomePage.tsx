import { useMemo } from "react";

import { categories, products } from "../../data";
import { SearchBar } from "../../components/search";
import { CategoryCard, ProductGrid } from "../../components/product";
import { DesktopSidebar } from "../../components/layout";
import { OfferBanner, SectionHeader } from "../../components/common";

const HomePage = () => {
  const exclusiveOffers = useMemo(
    () => products.filter((product) => product.isExclusiveOffer).slice(0, 4),
    [],
  );

  const bestSelling = useMemo(
    () => products.filter((product) => product.isBestSelling).slice(0, 4),
    [],
  );

  const groceries = useMemo(() => products.slice(0, 6), []);

  return (
    <main className="min-h-screen bg-white lg:bg-[#F8FAFB]">
      {/* Mobile */}
      <section className="px-6 pb-8 pt-12 lg:hidden">
        <div className="text-center">
          <div className="text-4xl">🥕</div>

          <p className="mt-3 text-[18px] font-semibold text-[#4C4F4D]">
            📍 Dhaka, Banassre
          </p>
        </div>

        <div className="mt-5">
          <SearchBar value="" onChange={() => {}} />
        </div>

        <div className="mt-5">
          <OfferBanner />
        </div>

        <section className="mt-8">
          <SectionHeader title="Exclusive Offer" />
          <ProductGrid products={exclusiveOffers} />
        </section>

        <section className="mt-8">
          <SectionHeader title="Best Selling" />
          <ProductGrid products={bestSelling} />
        </section>

        <section className="mt-8">
          <SectionHeader title="Groceries" />
          <div className="grid grid-cols-2 gap-4">
            {categories.slice(0, 2).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      </section>

      {/* Desktop */}
      <section className="hidden lg:block">
        <div className="mx-auto flex max-w-7xl gap-8 px-8 py-8">
          <DesktopSidebar />

          <div className="min-w-0 flex-1">
            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <div className="flex items-start justify-between gap-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#53B175]">
                    Grocery Delivery
                  </p>

                  <h1 className="mt-3 text-5xl font-bold tracking-[-0.04em] text-[#181725]">
                    Fresh groceries delivered fast
                  </h1>

                  <p className="mt-4 max-w-2xl text-lg leading-8 text-[#7C7C7C]">
                    Shop fresh fruits, vegetables, beverages, dairy, and daily
                    essentials with a clean responsive grocery experience.
                  </p>
                </div>

                <div className="w-80 shrink-0">
                  <SearchBar value="" onChange={() => {}} />
                </div>
              </div>

              <div className="mt-8">
                <OfferBanner />
              </div>
            </div>

            <section className="mt-8 rounded-[32px] bg-white p-8 shadow-sm">
              <SectionHeader title="Exclusive Offer" />
              <ProductGrid products={exclusiveOffers} />
            </section>

            <section className="mt-8 rounded-[32px] bg-white p-8 shadow-sm">
              <SectionHeader title="Best Selling" />
              <ProductGrid products={bestSelling} />
            </section>

            <section className="mt-8 rounded-[32px] bg-white p-8 shadow-sm">
              <SectionHeader title="Shop by Category" />
              <div className="grid grid-cols-4 gap-5">
                {categories.map((category) => (
                  <CategoryCard key={category.id} category={category} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
