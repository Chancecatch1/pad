import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen px-6 pt-[350px] flex items-start justify-center">
      {/* Top spacing above the title: adjust pt-* on the parent <div> to control the distance from the top */}
      {/* Spacing between the title and the menu below. To make them closer/farther, adjust this gap value. */}
      <main className="flex flex-col items-center gap-2">
        {/* Title: Pine at Dawn (opacity 50%) */}
        <h1 className="font-medium text-[48px] md:text-[80px] leading-tight text-black/60">Pine at Dawn</h1>

        {/* Menu row: sits closer to the title because the parent gap is smaller (gap-1). */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link href="/tutor" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded" style={{ background: "#C5CED8", color: "#262E3A" }}>
            <span className="text-sm">English Tutor</span>
          </Link>
          <Link href="/notes" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded" style={{ background: "#C5CED8", color: "#262E3A" }}>
            <span className="text-sm">Some Notes</span>
          </Link>
          <Link href="/health" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded" style={{ background: "#C5CED8", color: "#262E3A" }}>
            <span className="text-sm">Backend Status</span>
          </Link>
        </div>
      </main>
    </div>
  );
}