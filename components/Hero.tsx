import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

export function Hero() {
  return (
    <section className="bg-white">
      <Container>
        <div className="grid items-center gap-12 py-28 lg:grid-cols-2 lg:py-32">
          <div>
            <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
              Stay connected to every local shop around you
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
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
            <div className="relative mx-auto h-[520px] w-full max-w-[520px] sm:h-[560px]">
              <PhoneMockup className="absolute left-1/2 top-1/2 aspect-[9/18] w-[240px] -translate-x-[60%] -translate-y-[55%] -rotate-2 sm:w-[260px]">
                <img
                  src="images/hero-feed.png"
                  alt="Radius feed screen"
                  className="h-full w-full object-cover"
                  width={450}
                  height={900}
                  loading="eager"
                />
              </PhoneMockup>
              <PhoneMockup className="absolute left-1/2 top-1/2 aspect-[9/18] w-[240px] -translate-x-[5%] -translate-y-[40%] rotate-2 sm:w-[260px]">
                <img
                  src="images/hero-enquiry.png"
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


