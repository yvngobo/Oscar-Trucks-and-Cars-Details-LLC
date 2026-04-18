"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-sm min-h-[44px] px-6 py-3 text-sm tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#DC2626] text-white hover:bg-[#B91C1C] active:scale-[0.98]",
  secondary:
    "bg-transparent border border-white/30 text-white hover:bg-white/10 active:scale-[0.98]",
  ghost:
    "bg-transparent text-white hover:text-[#DC2626] underline-offset-4 hover:underline px-0",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(clsx(base, variants[variant], className))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
