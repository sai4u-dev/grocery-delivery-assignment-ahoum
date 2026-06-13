import { categories } from "../../data";

const DesktopSidebar = () => {
  return (
    <aside className="hidden w-72 shrink-0 rounded-[28px] border border-[#E2E2E2] bg-white p-5 lg:block">
      <h2 className="text-xl font-bold text-[#181725]">Categories</h2>

      <div className="mt-5 space-y-3">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold text-[#181725] transition hover:bg-[#53B175]/10 hover:text-[#53B175]"
          >
            <span>{category.name}</span>
            <span>›</span>
          </button>
        ))}
      </div>

      <div className="mt-8 border-t border-[#E2E2E2] pt-6">
        <h3 className="text-lg font-bold text-[#181725]">Filters</h3>

        <div className="mt-4 space-y-3">
          {["Popular", "Best Selling", "Exclusive Offer", "In Stock"].map(
            (item) => (
              <label
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-[#7C7C7C]"
              >
                <input type="checkbox" className="h-4 w-4 accent-[#53B175]" />
                {item}
              </label>
            ),
          )}
        </div>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
