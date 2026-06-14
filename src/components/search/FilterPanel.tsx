interface FilterPanelProps {
  title: string;
  items: string[];
  selectedItems: string[];
  onToggle: (item: string) => void;
}

const FilterPanel = ({
  title,
  items,
  selectedItems,
  onToggle,
}: FilterPanelProps) => {
  return (
    <div>
      <h2 className="mb-8 text-[30px] font-bold text-[#181725]">{title}</h2>

      <div className="space-y-7">
        {items.map((item) => {
          const isSelected = selectedItems.includes(item);

          return (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-5"
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggle(item)}
                className="sr-only"
              />

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

export default FilterPanel;
