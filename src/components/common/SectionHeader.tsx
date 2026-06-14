interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
}

const SectionHeader = ({
  title,
  actionLabel = "See all",
  onAction,
}: SectionHeaderProps) => {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-[#181725]">{title}</h2>

      <button
        onClick={onAction}
        className="text-sm font-semibold text-[#53B175]"
      >
        {actionLabel}
      </button>
    </div>
  );
};

export default SectionHeader;
