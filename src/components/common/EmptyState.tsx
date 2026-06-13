interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

const EmptyState = ({
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) => {
  return (
    <div className="flex min-h-105 flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#53B175]/10 text-5xl">
        🛒
      </div>

      <h2 className="text-2xl font-bold text-[#181725]">{title}</h2>

      <p className="mt-3 max-w-sm text-[16px] leading-7 text-[#7C7C7C]">
        {description}
      </p>

      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-8 h-14 rounded-2xl bg-[#53B175] px-8 text-[16px] font-semibold text-white"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
