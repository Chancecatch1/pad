"use client";

import clsx from "clsx";
import type { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{ className?: string }>;

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        // Basic Lo-fi style: clean white card with subtle gray border and 8px radius
        "rounded-lg bg-white border-2 break-words border-[#C5CED8]",
        className
      )}
    >
      {children}
    </div>
  );
}


