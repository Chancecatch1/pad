"use client";

import type React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "custom" | "apple" | "lofi";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
};

export default function Button({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants: Record<string, string> = {
    primary: "bg-[#007AFF] text-white hover:bg-[#0066d6] focus:ring-[#99c2ff]",
    secondary: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-100 dark:text-white dark:border-white/20 dark:hover:bg-white/10",
    ghost: "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-white/10",
    custom: "",
    apple:
      "bg-white text-[#1d1d1f] border border-black/10 rounded-full shadow-sm hover:shadow-md hover:bg-black/5 focus:ring-black/20 dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/15",
    lofi:
      "bg-[#C5CED8] text-[#262E3A] border-2 border-[#C5CED8] rounded-md hover:brightness-95 focus:ring-[#C5CED8]",
  };
  const sizes: Record<string, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
  };

  return (
    <button
      {...props}
      className={clsx(base, variants[variant], sizes[size], fullWidth && "w-full", className)}
    />
  );
}