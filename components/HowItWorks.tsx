import { Container } from "@/components/ui/Container";
import type { ReactNode } from "react";
import { BoltIcon, DownloadIcon, StorefrontIcon } from "@/components/ui/Icons";

function StepCard({
  step,
  title,
  description,
  iconBg,
  icon,
}: {
  step: string;
  title: string;
  description: string;
  iconBg: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
      <div className="flex flex-col items-center text-center">
        <div
          className={[
            "flex h-12 w-12 items-center justify-center rounded-2xl",
            iconBg,
          ].join(" ")}
        >
          <div className="h-6 w-6 text-slate-700">{icon}</div>
        </div>

        <div className="mt-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#30B365] text-xs font-semibold text-white">
          {step}
        </div>

        <div className="mt-3 text-base font-semibold text-slate-900">
          {title}
        </div>
        <div className="mt-2 text-sm leading-6 text-slate-600">
          {description}
        </div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-white" id="how-it-works">
      <Container>
        <div className="py-16 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              How Radius Works
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Get started in three simple steps
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <StepCard
              step="1"
              title="Install"
              description="Download Radius from Play Store or App Store. Quick setup in under a minute."
              iconBg="bg-emerald-50"
              icon={<DownloadIcon className="h-6 w-6" />}
            />
            <StepCard
              step="2"
              title="Follow shops"
              description="Search and follow your favorite local businesses. Build your personalized feed."
              iconBg="bg-blue-50"
              icon={<StorefrontIcon className="h-6 w-6" />}
            />
            <StepCard
              step="3"
              title="Connect instantly"
              description="Get updates, ask questions, and stay connected with your local community."
              iconBg="bg-violet-50"
              icon={<BoltIcon className="h-6 w-6" />}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}


