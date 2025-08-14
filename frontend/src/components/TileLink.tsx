"use client";

import Link from "next/link";
import clsx from "clsx";

type Props = {
  href: string;
  title: string;
  subtitle?: string;
  className?: string;
  size?: "default" | "compact";
};

export default function TileLink({ href, title, subtitle, className, size = "default" }: Props) {
  return (
    <Link href={href} className="block">
      <div
        className={clsx(
          "relative overflow-hidden rounded-3xl p-10",
          "ring-1 ring-black/10 dark:ring-white/10 bg-white text-[#1d1d1f]",
          "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-2xl",
          className
        )}
      >
        <div className="relative z-10">
          <h2 className={clsx(
            "font-semibold tracking-tight",
            size === "compact" ? "text-xl md:text-2xl" : "text-3xl md:text-4xl"
          )}>{title}</h2>
          {subtitle && <p className="mt-2 text-sm md:text-base opacity-70">{subtitle}</p>}
        </div>
        {/* remove gradient highlight for flat look */}
      </div>
    </Link>
  );
}


