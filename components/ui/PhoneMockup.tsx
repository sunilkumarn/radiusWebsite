import type { PropsWithChildren } from "react";

export function PhoneMockup({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={className}>
      <div className="relative h-full w-full rounded-[40px] border border-[#E6EFEA] bg-white p-2 shadow-2xl">
        {/* subtle phone bezel */}
        <div className="pointer-events-none absolute inset-0 rounded-[40px] ring-1 ring-black/5" />
        <div className="h-full w-full overflow-hidden rounded-[32px] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}


