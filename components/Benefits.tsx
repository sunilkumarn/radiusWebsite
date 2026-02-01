import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import {
  BoltIcon,
  CheckIcon,
  MapPinIcon,
  ShieldIcon,
  SmileIcon,
  BellOffIcon,
} from "@/components/ui/Icons";

function BenefitCard({
  title,
  description,
  icon,
  iconBg,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  iconBg: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
      <div
        className={[
          "flex h-12 w-12 items-center justify-center rounded-2xl",
          iconBg,
        ].join(" ")}
      >
        <div className="h-6 w-6 text-slate-700">{icon}</div>
      </div>
      <div className="mt-4 text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate-600">{description}</div>
    </div>
  );
}

export function Benefits() {
  return (
    <section className="bg-white" id="benefits">
      <Container>
        <div className="py-16 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Why people love Radius
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Built with care for local communities
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BenefitCard
              title="No spam"
              description="Only updates from shops you choose to follow. Complete control over your feed."
              icon={<BellOffIcon className="h-6 w-6" />}
              iconBg="bg-emerald-50"
            />
            <BenefitCard
              title="Privacy focused"
              description="Your data stays private. We don't sell information or show intrusive ads."
              icon={<ShieldIcon className="h-6 w-6" />}
              iconBg="bg-blue-50"
            />
            <BenefitCard
              title="Lightweight app"
              description="Fast and efficient. Works smoothly even on older phones and slower networks."
              icon={<BoltIcon className="h-6 w-6" />}
              iconBg="bg-violet-50"
            />
            <BenefitCard
              title="Works in small towns"
              description="Designed for Indian neighborhoods. Perfect for tier 2 and tier 3 cities."
              icon={<MapPinIcon className="h-6 w-6" />}
              iconBg="bg-amber-50"
            />
            <BenefitCard
              title="Free for customers"
              description="Always free to use. No hidden charges, premium plans, or subscription fees."
              icon={<CheckIcon className="h-6 w-6" />}
              iconBg="bg-rose-50"
            />
            <BenefitCard
              title="Simple for everyone"
              description="Easy to understand interface. No technical knowledge needed to get started."
              icon={<SmileIcon className="h-6 w-6" />}
              iconBg="bg-yellow-50"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}


