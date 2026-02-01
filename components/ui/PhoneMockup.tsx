import type { PropsWithChildren } from "react";

export function PhoneMockup({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-xl",
        className,
      ].join(" ")}
    >
      {/* subtle phone bezel */}
      <div className="pointer-events-none absolute inset-0 rounded-[40px] ring-1 ring-black/5" />
      {children}
    </div>
  );
}


