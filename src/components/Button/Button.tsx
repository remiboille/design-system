import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:   "bg-surface-cream text-surface-dark",
  secondary: "bg-surface-dark text-surface-cream",
  ghost:     "bg-surface-cream text-surface-dark opacity-50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-4 text-sm",
  lg: "px-8 py-5 text-base",
};

export const Button = ({
  label,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center rounded-lg",
        "font-sans font-medium uppercase tracking-[1.68px]",
        "transition-opacity",
        "focus:outline-none focus:ring-2 focus:ring-surface-dark focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-30",
        variantStyles[variant],
        sizeStyles[size],
      ].join(" ")}
    >
      {label}
    </button>
  );
};
