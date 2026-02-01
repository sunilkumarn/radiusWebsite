import { Container } from "@/components/ui/Container";
import { MapPinIcon } from "@/components/ui/Icons";

function SocialIcon({ label, pathD }: { label: string; pathD: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <path
          d={pathD}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

function StoreBadge({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="inline-flex h-9 items-center rounded-lg bg-black px-4 text-xs font-semibold text-white"
    >
      {label}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <Container>
        <div className="grid gap-10 py-14 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#30B365] text-white shadow-sm">
                <MapPinIcon className="h-5 w-5 text-white" />
              </div>
              <div className="text-sm font-semibold text-gray-900">Radius</div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-gray-600">
              Connecting customers with local businesses
            </p>

            <div className="mt-5 flex items-center gap-2">
              <SocialIcon
                label="Twitter"
                pathD="M19 5c-.6.3-1.2.5-1.9.6A3.2 3.2 0 0 0 18.5 4a6.7 6.7 0 0 1-2.1.8A3.2 3.2 0 0 0 10.9 7c0 .3 0 .6.1.9A9.1 9.1 0 0 1 4 4.8a3.2 3.2 0 0 0 1 4.2c-.5 0-1-.2-1.4-.4 0 1.5 1 2.9 2.6 3.2-.4.1-.9.1-1.3.1.3 1.3 1.6 2.3 3.1 2.3A6.5 6.5 0 0 1 4 16.7a9.2 9.2 0 0 0 5 1.4c6 0 9.3-5 9.3-9.3v-.4c.6-.4 1.2-1 1.7-1.6z"
              />
              <SocialIcon
                label="Instagram"
                pathD="M7 7h10v10H7V7zm3 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM17 6.5h0"
              />
              <SocialIcon
                label="YouTube"
                pathD="M10 15l5-3-5-3v6zM4 12s0-4 1-5 14-1 15 0 1 5 1 5 0 4-1 5-14 1-15 0-1-5-1-5z"
              />
              <SocialIcon
                label="LinkedIn"
                pathD="M7 10v7M7 7h0M11 17v-4a2 2 0 0 1 4 0v4M11 10v7M15 10v7"
              />
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Product
            </div>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a className="hover:text-gray-900" href="#benefits">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#how-it-works">
                  How It Works
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#customers">
                  For Customers
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#shops">
                  For Shops
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Company
            </div>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a className="hover:text-gray-900" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Legal
            </div>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a className="hover:text-gray-900" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-slate-100 py-8 sm:flex-row sm:items-center">
          <div className="text-xs text-slate-500">
            © 2024 Radius. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <StoreBadge label="Google Play" />
            <StoreBadge label="App Store" />
          </div>
        </div>
      </Container>
    </footer>
  );
}


