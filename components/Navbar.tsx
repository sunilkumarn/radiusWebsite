import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPinIcon } from "@/components/ui/Icons";

function RadiusLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#30B365] text-white shadow-sm">
        <MapPinIcon className="h-5 w-5 text-white" />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold">Radius</div>
        <div className="text-xs text-slate-500">
          Connecting customers with local businesses
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <header className="border-b border-[#E6EFEA] bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="focus:outline-none">
            <RadiusLogo />
          </a>

          <div className="flex items-center gap-4">
            <a
              href="#shops"
              className="hidden text-sm font-medium text-gray-600 hover:text-gray-900 sm:inline"
            >
              For Shops
            </a>
            <Button href="#download" variant="primary" size="sm">
              Download App
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}


