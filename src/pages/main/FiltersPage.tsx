import { useNavigate } from "react-router-dom";

const categories = ["Eggs", "Noodles & Pasta", "Chips & Crisps", "Fast Food"];
const brands = ["Individual Collection", "Cocola", "Ifad", "Kazi Farmas"];

const FiltersPage = () => {
  const navigate = useNavigate();

  const selectedCategories = ["Eggs"];
  const selectedBrands = ["Cocola"];

  return (
    <main className="min-h-screen bg-white">
      {/* Mobile */}
      <section className="relative min-h-screen lg:hidden">
        <header className="flex items-center justify-center px-6 pb-8 pt-14">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="absolute left-6 text-5xl leading-none text-[#181725]"
          >
            ×
          </button>

          <h1 className="text-[28px] font-bold text-[#181725]">Filters</h1>
        </header>

        <section className="min-h-[calc(100vh-132px)] rounded-t-[32px] bg-[#F2F3F2] px-6 pb-32 pt-9">
          <FilterGroup
            title="Categories"
            items={categories}
            selectedItems={selectedCategories}
          />

          <div className="mt-14">
            <FilterGroup
              title="Brand"
              items={brands}
              selectedItems={selectedBrands}
            />
          </div>
        </section>

        <div className="absolute bottom-10 left-6 right-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="h-[67px] w-full rounded-[19px] bg-[#53B175] text-[20px] font-semibold text-white transition active:scale-[0.98]"
          >
            Apply Filter
          </button>
        </div>

        <div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-black/10" />
      </section>

      {/* Desktop */}
      <section className="hidden min-h-screen bg-[#F8FAFB] lg:block">
        <div className="mx-auto  ">
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <div className="mb-8 flex items-center justify-between">
              <h1 className="text-4xl font-bold text-[#181725]">
                Product Filters
              </h1>

              <button
                onClick={() => navigate(-1)}
                className="rounded-full border border-[#E2E2E2] px-5 py-3 font-semibold text-[#181725]"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-[320px_1fr] gap-8">
              <aside className="rounded-[28px] bg-[#F2F3F2] p-7">
                <FilterGroup
                  title="Categories"
                  items={categories}
                  selectedItems={selectedCategories}
                />

                <div className="mt-12">
                  <FilterGroup
                    title="Brand"
                    items={brands}
                    selectedItems={selectedBrands}
                  />
                </div>

                <button className="mt-12 h-[60px] w-full rounded-[19px] bg-[#53B175] text-lg font-semibold text-white">
                  Apply Filter
                </button>
              </aside>

              <div className="rounded-[28px] border border-[#E2E2E2] p-8">
                <h2 className="text-2xl font-bold text-[#181725]">
                  Filter Preview
                </h2>
                <p className="mt-3 text-[#7C7C7C]">
                  Selected filters will update the product grid on desktop.
                </p>

                <div className="mt-8 grid grid-cols-4 gap-2">
                  {["Eggs", "Cocola", "Fresh", "In Stock"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-[#53B175]/10 px-5 py-4 text-center font-semibold text-[#53B175]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

type FilterGroupProps = {
  title: string;
  items: string[];
  selectedItems: string[];
};

const FilterGroup = ({ title, items, selectedItems }: FilterGroupProps) => {
  return (
    <div>
      <h2 className="mb-4 text-[30px] font-bold text-[#181725]">{title}</h2>

      <div className="space-y-4">
        {items.map((item) => {
          const isSelected = selectedItems.includes(item);

          return (
            <label key={item} className="flex items-center gap-4">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-lg border-2 ${
                  isSelected
                    ? "border-[#53B175] bg-[#53B175] text-white"
                    : "border-[#B1B1B1] bg-transparent"
                }`}
              >
                {isSelected && <span className="text-lg font-bold">✓</span>}
              </span>

              <span
                className={`text-[20px] font-medium ${
                  isSelected ? "text-[#53B175]" : "text-[#181725]"
                }`}
              >
                {item}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FiltersPage;
