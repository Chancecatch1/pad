import TileLink from "@/components/TileLink";

export default function Page() {
  return (
    <div className="min-h-screen p-6">
      <main className="mx-auto grid grid-cols-2 gap-0 place-content-center place-items-center" style={{ minHeight: "70vh", width: "min(420px, 90vw)" }}>
        <div className="w-[200px] h-[200px]">
          <TileLink href="/tutor" title="Tutor" className="w-full h-full rounded-none p-6" size="compact" />
        </div>
        <div className="w-[200px] h-[200px]">
          <TileLink href="/notes" title="Notes" className="w-full h-full rounded-none p-6" size="compact" />
        </div>
        <div className="w-[200px] h-[200px]">
          <TileLink href="/health" title="Backend Status" className="w-full h-full rounded-none p-6" size="compact" />
        </div>
        <div className="w-[200px] h-[200px]" />
      </main>
    </div>
  );
}