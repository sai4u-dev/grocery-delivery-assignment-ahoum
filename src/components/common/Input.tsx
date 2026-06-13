import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, className = "", ...props }: InputProps) => {
  return (
    <label className="block">
      {label && (
        <span className="mb-3 block text-[16px] font-semibold text-[#7C7C7C]">
          {label}
        </span>
      )}

      <input
        className={`w-full border-b border-[#E2E2E2] bg-transparent pb-4 text-[18px] font-medium text-[#181725] outline-none placeholder:text-[#B1B1B1] focus:border-[#53B175] ${className}`}
        {...props}
      />
    </label>
  );
};

export default Input;
