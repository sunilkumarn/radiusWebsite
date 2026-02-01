import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import {
  HeartIcon,
  MessageIcon,
  TagIcon,
  MapPinIcon,
  BellIcon,
} from "@/components/ui/Icons";

function FeatureItem({
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
    <div className="flex gap-4">
      <div
        className={[
          "flex h-10 w-10 flex-none items-center justify-center rounded-xl",
          iconBg,
        ].join(" ")}
      >
        <div className="h-5 w-5 text-slate-700">{icon}</div>
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="mt-1 text-sm leading-6 text-slate-600">
          {description}
        </div>
      </div>
    </div>
  );
}

export function Customers() {
  return (
    <section className="bg-white" id="customers">
      <Container>
        <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="mx-auto w-full max-w-sm sm:max-w-md">
            <PhoneMockup className="aspect-[9/18] w-full">
              <img
                src="/images/customer-screen.png"
                alt="Radius customer screen"
                className="h-full w-full object-cover"
                width={450}
                height={900}
                loading="lazy"
              />
            </PhoneMockup>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need from nearby shops
            </h2>

            <div className="mt-8 space-y-6">
              <FeatureItem
                title="Follow favorite shops"
                description="Stay updated with your go-to local businesses. Never miss what matters to you."
                icon={<HeartIcon className="h-5 w-5" />}
                iconBg="bg-emerald-50"
              />
              <FeatureItem
                title="Daily useful updates"
                description="Get real-time posts about new arrivals, services, and availability from shops you follow."
                icon={<BellIcon className="h-5 w-5" />}
                iconBg="bg-blue-50"
              />
              <FeatureItem
                title="Instant enquiries"
                description="Ask questions directly. Get quick responses. No need to call or visit unnecessarily."
                icon={<MessageIcon className="h-5 w-5" />}
                iconBg="bg-violet-50"
              />
              <FeatureItem
                title="Offers & events"
                description="Be the first to know about exclusive deals, sales, and special events happening nearby."
                icon={<TagIcon className="h-5 w-5" />}
                iconBg="bg-amber-50"
              />
              <FeatureItem
                title="One-tap call/location"
                description="Instantly call shops or get directions. Everything you need is just a tap away."
                icon={<MapPinIcon className="h-5 w-5" />}
                iconBg="bg-rose-50"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


