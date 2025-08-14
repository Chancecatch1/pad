"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function BackButton({ label = "Back", showLabel = false }: { label?: string; showLabel?: boolean }) {
  const router = useRouter();
  return (
    <Button
      type="button"
      variant="apple"
      size="md"
      title={label}
      aria-label={label}
      className={`inline-flex items-center ${showLabel ? "gap-2" : "gap-0"} px-2`}
      onClick={() => {
        if (typeof window !== "undefined" && window.history.length > 1) {
          router.back();
        } else {
          router.push("/");
        }
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {showLabel && <span>{label}</span>}
    </Button>
  );
}