import type { CategoryItem } from "../../data/categories";

interface CategoryCardProps {
  category: CategoryItem;
  onClick?: () => void;
}

const CategoryCard = ({ category, onClick }: CategoryCardProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-[190px] rounded-[18px] border p-4 text-center ${category.backgroundColor} ${category.borderColor}`}
    >
      <div className="flex h-24 items-center justify-center">
        <img
          src={category.image}
          alt={category.name}
          className="max-h-20 object-contain"
        />
      </div>

      <h3 className="mt-5 text-[16px] font-bold leading-5 text-[#181725]">
        {category.name}
      </h3>
    </button>
  );
};

export default CategoryCard;
