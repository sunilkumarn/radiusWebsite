"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

type DownloadAppModalProps = {
  open: boolean;
  onClose: () => void;
};

const apps = [
  {
    title: "Customer App",
    description:
      "Discover nearby businesses, offers, updates, and connect with local shops around you.",
    href: "https://play.google.com/store/apps/details?id=in.getradius.customer",
    imageSrc: "/images/radius-customer.png",
    imageAlt: "Radius Customer app icon",
  },
  {
    title: "Business App",
    description:
      "Grow your business, post updates, engage customers, and build your local presence.",
    href: "https://play.google.com/store/apps/details?id=in.getradius.business",
    imageSrc: "/images/radius-partner-icon.png",
    imageAlt: "Radius Business app icon",
  },
] as const;

function AndroidBadgeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
    >
      <path
        d="M8 9.5v6.8a1 1 0 0 0 1 1h.3v2.2a.8.8 0 1 0 1.7 0v-2.2h2v2.2a.8.8 0 1 0 1.7 0v-2.2h.3a1 1 0 0 0 1-1V9.5"
        fill="currentColor"
      />
      <path
        d="M9.2 7.6a2.8 2.8 0 0 1 5.6 0v.4H9.2v-.4Z"
        fill="currentColor"
      />
      <path
        d="M9.6 5.4 8.8 4M14.4 5.4 15.2 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="10.4" cy="6.9" r=".45" fill="#fff" />
      <circle cx="13.6" cy="6.9" r=".45" fill="#fff" />
      <rect x="6.2" y="9.8" width="1.3" height="5.6" rx=".65" fill="currentColor" />
      <rect x="16.5" y="9.8" width="1.3" height="5.6" rx=".65" fill="currentColor" />
    </svg>
  );
}

export function DownloadAppModal({
  open,
  onClose,
}: DownloadAppModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsVisible(false);
      return;
    }

    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;

    const getFocusableElements = () => {
      if (!panelRef.current) return [];

      return Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey) {
        if (activeElement === firstElement || !panelRef.current?.contains(activeElement)) {
          event.preventDefault();
          lastElement.focus();
        }
        return;
      }

      if (activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = "hidden";
    const animationFrame = window.requestAnimationFrame(() => {
      setIsVisible(true);
      getFocusableElements()[0]?.focus();
    });

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className={[
        "fixed inset-0 z-50 flex items-end justify-center bg-slate-950/60 p-4 backdrop-blur-[3px] transition-opacity duration-200 sm:items-center",
        isVisible ? "opacity-100" : "opacity-0",
      ].join(" ")}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={panelRef}
        className={[
          "w-full max-w-3xl rounded-[20px] border border-white/70 bg-white/95 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.22)] ring-1 ring-black/5 transition-all duration-200 sm:p-7",
          isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-95 opacity-0",
        ].join(" ")}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center rounded-full bg-[#EAF7F0] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[#1F7A46] uppercase">
              Android apps
            </div>
            <h2 id={titleId} className="mt-4 text-2xl font-semibold text-slate-950 sm:text-[1.9rem]">
              Choose your app
            </h2>
            <p id={descriptionId} className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Radius is currently available on Android. Select the app that fits you.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30B365] focus-visible:ring-offset-2"
            aria-label="Close app download modal"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ×
            </span>
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {apps.map((app) => {
            return (
              <div
                key={app.title}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#CFE8D8] hover:shadow-[0_20px_40px_rgba(48,179,101,0.12)]"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Image
                    src={app.imageSrc}
                    alt={app.imageAlt}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-950">{app.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-[15px]">
                  {app.description}
                </p>

                <a
                  href={app.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#30B365] via-[#39BF70] to-[#2B9E5A] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(48,179,101,0.28)] transition hover:shadow-[0_14px_32px_rgba(48,179,101,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30B365] focus-visible:ring-offset-2"
                  aria-label={`Download ${app.title} for Android`}
                >
                  <AndroidBadgeIcon />
                  <span>Download for Android</span>
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-5 text-center text-sm text-slate-500">
          <span className="italic">iPhone / iOS version coming later.</span>
        </p>
      </div>
    </div>
  );
}
