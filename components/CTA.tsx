 "use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import type { ReactNode } from "react";
import { DownloadAppModal } from "@/components/DownloadAppModal";
import { CheckIcon, HeartIcon, ShieldIcon } from "@/components/ui/Icons";

function CTAChip({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-white/90">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
        <span className="h-3.5 w-3.5 text-white">{icon}</span>
      </span>
      <span>{label}</span>
    </div>
  );
}

export function CTA() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#30B365]" id="download">
        <Container>
          <div className="py-24 text-center sm:py-28">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Start discovering local businesses today
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              Join thousands of people already connecting with their favorite
              neighborhood shops
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsDownloadModalOpen(true)}
                className="inline-flex h-auto items-center justify-center rounded-xl border border-white/30 bg-white px-8 py-4 text-base font-semibold tracking-wide text-[#30B365] transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#30B365]"
                aria-haspopup="dialog"
                aria-expanded={isDownloadModalOpen}
                aria-label="Open app selection modal"
              >
                Download Radius
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <CTAChip
                icon={<CheckIcon className="h-3.5 w-3.5" />}
                label="Free Forever"
              />
              <CTAChip
                icon={<ShieldIcon className="h-3.5 w-3.5" />}
                label="Privacy First"
              />
              <CTAChip
                icon={<HeartIcon className="h-3.5 w-3.5" />}
                label="Made for You"
              />
            </div>
          </div>
        </Container>
      </section>

      <DownloadAppModal
        open={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </>
  );
}


