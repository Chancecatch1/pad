import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-svh px-6 pt-40 sm:pt-40 md:pt-60 lg:pt-65 xl:pt-70 flex items-start justify-center">
      {/* Spacing between the title and the menu below. To make them closer/farther, adjust this gap value. */}
      <main className="flex flex-col items-center gap-2">
        {/* Title: Pine at Dawn (opacity 50%) */}
        <h1 className="font-medium text-[48px] md:text-[80px] leading-tight text-black/60">Pine at Dawn</h1>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/tutor"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-[#C5CED8] text-[#262E3A] hover:brightness-95 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5CED8] focus:ring-offset-2 h-6.5 px-2 text-xs sm:h-6.5 sm:px-2 sm:text-xs md:h-8 md:px-2.5 md:text-sm lg:h-8 lg:px-3 lg:text-sm">
            English Tutor
          </Link>
          <Link href="/notes"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-[#C5CED8] text-[#262E3A] hover:brightness-95 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5CED8] focus:ring-offset-2 h-6.5 px-2 text-xs sm:h-6.5 sm:px-2 sm:text-xs md:h-8 md:px-2.5 md:text-sm lg:h-8 lg:px-3 lg:text-sm">
            Some Notes
          </Link>
          <Link href="/health"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-[#C5CED8] text-[#262E3A] hover:brightness-95 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5CED8] focus:ring-offset-2 h-6.5 px-2 text-xs sm:h-6.5 sm:px-2 sm:text-xs md:h-8 md:px-2.5 md:text-sm lg:h-8 lg:px-3 lg:text-sm">
            Backend Status
          </Link>
        </div>
      </main>
    </div>
  );
}