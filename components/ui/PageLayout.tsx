import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="py-14 sm:py-16">
      <Container>
        <div className="mx-auto max-w-[900px] rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200/70 sm:p-12 lg:p-16">
          <header className="max-w-3xl">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600">
              {description}
            </p>
          </header>

          <div className="mt-10 space-y-10">{children}</div>
        </div>
      </Container>
    </main>
  );
}

