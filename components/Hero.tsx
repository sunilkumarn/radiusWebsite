import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

export function Hero() {
  return (
    <section className="bg-white">
      <Container>
        <div className="grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Stay connected to every local shop around you
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Follow shops. Get updates. Enquire instantly. Never miss offers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#download" variant="primary">
                Customer App
              </Button>
              <Button href="#shops" variant="secondary">
                Shop App
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <PhoneMockup className="aspect-[9/18] w-full">
                <img
                  src="/images/hero-feed.png"
                  alt="Radius feed screen"
                  className="h-full w-full object-cover"
                  width={450}
                  height={900}
                  loading="eager"
                />
              </PhoneMockup>
              <PhoneMockup className="aspect-[9/18] w-full translate-y-6">
                <img
                  src="/images/hero-enquiry.png"
                  alt="Radius enquiry screen"
                  className="h-full w-full object-cover"
                  width={450}
                  height={900}
                  loading="eager"
                />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


