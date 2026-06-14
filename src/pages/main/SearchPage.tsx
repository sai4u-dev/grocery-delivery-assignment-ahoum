import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { products } from "../../data";
import { ROUTES } from "../../constants";

import { useDebounce } from "../../hooks";

import { SearchBar } from "../../components/search";
import { ProductGrid } from "../../components/product";
import { EmptyState } from "../../components/common";
import { DesktopSidebar } from "../../components/layout";

const SearchPage = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const filteredProducts = useMemo(() => {
    if (!debouncedSearch.trim()) return products;

    return products.filter((product) => {
      const query = debouncedSearch.toLowerCase();

      return (
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    });
  }, [debouncedSearch]);

  return (
    <main className="min-h-screen bg-white lg:bg-[#F8FAFB]">
      {/* Mobile */}
      <section className="px-6 pb-8 pt-14 lg:hidden">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="text-3xl text-[#181725]"
          >
            ←
          </button>

          <div className="flex-1">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search Store"
            />
          </div>

          <button onClick={() => navigate(ROUTES.FILTERS)} className="text-2xl">
            ⚙️
          </button>
        </div>

        <div className="mt-6">
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <EmptyState
              title="No products found"
              description="Try searching with different keywords."
            />
          )}
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:block">
        <div className="mx-auto flex max-w-7xl gap-8 px-8 py-8">
          <DesktopSidebar />

          <div className="min-w-0 flex-1 rounded-[32px] bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between gap-8">
              <div>
                <h1 className="text-4xl font-bold text-[#181725]">
                  Search Products
                </h1>

                <p className="mt-2 text-[#7C7C7C]">
                  Find your favorite groceries quickly.
                </p>
              </div>

              <div className="w-96">
                <SearchBar
                  value={search}
                  onChange={setSearch}
                  placeholder="Search products..."
                />
              </div>
            </div>

            <div className="mt-8">
              {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
              ) : (
                <EmptyState
                  title="No products found"
                  description="Try different keywords."
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SearchPage;
