"use client";

import clsx from "clsx";
import type { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{ className?: string }>;

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border border-gray-200 bg-white",
        className
      )}
    >
      {children}
    </div>
  );
}


