import { useNavigate } from "react-router-dom";

import { categories } from "../../data";
import { ROUTES } from "../../constants";

import { CategoryCard } from "../../components/product";
import { SearchBar } from "../../components/search";
import { DesktopSidebar } from "../../components/layout";

const ExplorePage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white lg:bg-[#F8FAFB]">
      {/* Mobile */}
      <section className="px-6 pb-8 pt-14 lg:hidden">
        <h1 className="text-center text-[22px] font-bold text-[#181725]">
          Find Products
        </h1>

        <div className="mt-8">
          <SearchBar value="" onChange={() => navigate(ROUTES.SEARCH)} />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => navigate(ROUTES.SEARCH)}
            />
          ))}
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:block">
        <div className="mx-auto flex max-w-7xl gap-8 px-8 py-8">
          <DesktopSidebar />

          <div className="min-w-0 flex-1 rounded-[32px] bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between gap-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#53B175]">
                  Explore
                </p>

                <h1 className="mt-3 text-5xl font-bold tracking-[-0.04em] text-[#181725]">
                  Find Products
                </h1>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-[#7C7C7C]">
                  Browse grocery categories and discover fresh products for your
                  daily needs.
                </p>
              </div>

              <div className="w-80 shrink-0">
                <SearchBar value="" onChange={() => navigate(ROUTES.SEARCH)} />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-4 gap-5 xl:grid-cols-5">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onClick={() => navigate(ROUTES.SEARCH)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExplorePage;
