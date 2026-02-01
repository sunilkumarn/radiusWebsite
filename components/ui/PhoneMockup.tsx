import type { PropsWithChildren } from "react";

export function PhoneMockup({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={[
        "relative rounded-[40px] border border-gray-100 bg-white p-2 shadow-2xl",
        className,
      ].join(" ")}
    >
      {/* subtle phone bezel */}
      <div className="pointer-events-none absolute inset-0 rounded-[40px] ring-1 ring-black/5" />
      <div className="overflow-hidden rounded-[32px] bg-white">{children}</div>
    </div>
  );
}


