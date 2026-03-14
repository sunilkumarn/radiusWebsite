import type { PropsWithChildren } from "react";

export function ContentCard({
  children,
  className = "",
}: PropsWithChildren<{
  className?: string;
}>) {
  return (
    <div
      className={[
        "overflow-hidden rounded-3xl border border-[#E6EFEA] bg-white shadow-sm",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

