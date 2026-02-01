import type { PropsWithChildren } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md";

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
}: PropsWithChildren<{
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}>) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold tracking-wide transition focus:outline-none focus:ring-2 focus:ring-[#30B365]/30";

  const sizes: Record<Size, string> = {
    sm: "h-10 px-4 text-base",
    md: "h-12 px-6 text-base",
  };

  const variants: Record<Variant, string> = {
    primary: "bg-[#30B365] text-white hover:bg-[#279d59]",
    secondary:
      "border border-[#E6EFEA] bg-white text-gray-900 hover:bg-slate-50",
  };

  const cls = [base, sizes[size], variants[variant], className].join(" ");

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return <button className={cls}>{children}</button>;
}


