interface QuantityControlProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantityControl = ({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityControlProps) => {
  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={onDecrease}
        className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#E2E2E2] text-2xl font-light text-[#B3B3B3]"
      >
        −
      </button>

      <span className="min-w-6 text-center text-[18px] font-semibold text-[#181725]">
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#E2E2E2] text-2xl font-light text-[#53B175]"
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;
