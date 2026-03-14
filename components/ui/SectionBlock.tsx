import type { ReactNode } from "react";

export function SectionBlock({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="max-w-none">
      {title ? (
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          {title}
        </h2>
      ) : null}
      <div className={(title ? "mt-3 " : "") + "text-lg leading-relaxed text-slate-700"}>
        {typeof children === "string" ? <p>{children}</p> : children}
      </div>
    </section>
  );
}

