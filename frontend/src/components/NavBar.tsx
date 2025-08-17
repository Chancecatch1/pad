"use client";

export default function NavBar({ title = "" }: { title?: string }) {
  return (
    <div className="w-full">
      {/* Transparent nav: inherits page background/color */}
      <div className="max-w-xl mx-auto h-11 px-4 flex items-center justify-center">
        <h1 className="text-base md:text-lg font-medium tracking-tight text-current text-center">{title}</h1>
      </div>
    </div>
  );
}


