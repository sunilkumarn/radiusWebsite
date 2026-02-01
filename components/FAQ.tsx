"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ChevronDownIcon } from "@/components/ui/Icons";

type FaqItem = {
  q: string;
  a: string;
};

export function FAQ() {
  const items = useMemo<FaqItem[]>(
    () => [
      {
        q: "Is Radius really free for customers?",
        a: "Yes! Radius is completely free for customers. No hidden charges, no premium features, no subscriptions. We believe in keeping local commerce accessible to everyone.",
      },
      {
        q: "How do I find shops near me?",
        a: "Simply open the app and use the search or explore feature. Radius automatically shows you shops based on your location. You can filter by category, distance, or search by name.",
      },
      {
        q: "Can shop owners message me directly?",
        a: "No. Shops can only reply to your enquiries. They cannot send unsolicited messages. This ensures you never receive spam or unwanted promotions.",
      },
      {
        q: "What information do I need to share?",
        a: "Just your phone number for verification. We don't ask for unnecessary personal information. Your privacy is important to us.",
      },
      {
        q: "How is this different from other apps?",
        a: "Radius is built specifically for local commerce. No food delivery, no e-commerce. Just a simple way to stay connected with neighborhood shops. No algorithms, no ads, no distractions.",
      },
    ],
    [],
  );

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-white" id="faq">
      <Container>
        <div className="py-16 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Everything you need to know about Radius
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {items.map((item, idx) => {
              const open = openIdx === idx;
              return (
                <div
                  key={item.q}
                  className="rounded-xl border border-slate-100 bg-white shadow-soft"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(open ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-sm font-semibold text-slate-900">
                      {item.q}
                    </span>
                    <ChevronDownIcon
                      className={[
                        "h-5 w-5 flex-none text-slate-400 transition-transform",
                        open ? "rotate-180" : "rotate-0",
                      ].join(" ")}
                    />
                  </button>
                  {open ? (
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-sm leading-6 text-slate-600">
                        {item.a}
                      </p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}


