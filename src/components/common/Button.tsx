import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
}

const Button = ({
  children,
  fullWidth = true,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`h-16.75 rounded-[19px] bg-[#53B175] text-[18px] font-semibold text-white transition hover:bg-[#49A66C] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 ${
        fullWidth ? "w-full" : "px-8"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
