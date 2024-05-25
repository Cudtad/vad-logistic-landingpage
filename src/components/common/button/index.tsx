import { ForwardedRef, ReactNode, forwardRef } from "react";
import clsx from "clsx";

interface ButtonI extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  prevIcon?: ReactNode;
  nextIcon?: ReactNode;
  size: "xs" | "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary" | "chip";
  outline?: boolean;
}
const Button = forwardRef(
  (
    {
      children,
      className,
      prevIcon,
      nextIcon,
      type = "button",
      size,
      variant = "primary",
      outline = false,
      disabled,
      ...rest
    }: ButtonI,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const classPrimary =
      "z-1 relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-primary-dark after:left-10 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-500 after:transition-all after:duration-500 transition-all duration-700 text-2xl";

    return (
      <button
        className={clsx(
          className,
          variant === "primary" && !disabled ? classPrimary : "",
          "flex items-center justify-center outline-none disabled:cursor-not-allowed",
          {
            "h-6 rounded-[4px] !px-3 text-xs leading-4": size === "xs",
            "h-8 rounded-[6px] text-xs leading-4": size === "sm",
            "h-10 rounded-[8px] text-base leading-5": size === "md",
            "h-12 rounded text-base leading-5 px-10 py-2": size === "lg",
            "bg-primary text-white bg-[length:200%] bg-left hover:bg-black":
              variant === "primary" && !disabled,
            "border border-primary bg-white text-primary-dark hover:bg-primary hover:text-white":
              variant === "secondary" && !disabled,
            "bg-primary bg-opacity-[0.24] text-white":
              variant === "primary" && disabled,
            "border border-primary bg-white bg-opacity-[0.24] text-primary-dark":
              variant === "secondary" && disabled,
            "pr-2": !!nextIcon,
            "pl-2": !!prevIcon,
            "text-primary hover:text-primary-dark":
              variant === "chip",
          }
        )}
        type={type}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {prevIcon}
        {children}
        {nextIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
