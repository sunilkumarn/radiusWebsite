import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { CheckIcon } from "@/components/ui/Icons";

function Benefit({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-emerald-50">
        <CheckIcon className="h-5 w-5 text-[#30B365]" />
      </div>
      <div className="max-w-xl">
        <div className="text-xl font-semibold text-gray-900">{title}</div>
        <div className="mt-2 text-lg leading-relaxed text-gray-600">
          {description}
        </div>
      </div>
    </div>
  );
}

export function Shops() {
  return (
    <section className="bg-[#F6FBF8]" id="shops">
      <Container>
        <div className="grid items-center gap-12 py-24 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
              Grow your local reach without marketing spend
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
              Connect with customers who actually care about your business. No
              complicated tools, no advertising costs.
            </p>

            <div className="mt-8 space-y-8">
              <Benefit
                title="Post updates easily"
                description="Share what's new in your shop. Takes less than a minute. Your followers see it instantly."
              />
              <Benefit
                title="Reply to enquiries"
                description="Answer customer questions directly through the app. Build trust before they visit."
              />
              <Benefit
                title="Reach followers directly"
                description="Your posts reach people who already care. No algorithm games, no paid promotions."
              />
              <Benefit
                title="No ads required"
                description="Organic reach to local customers. Zero advertising budget. Just genuine connections."
              />
            </div>

            <div className="mt-10">
              <Button
                href="#"
                variant="secondary"
                className="border-[#30B365]/30 text-[#30B365] hover:bg-emerald-50"
              >
                Learn More About Shop App
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-lg">
            <PhoneMockup className="aspect-[10/9] w-full">
              <img
                src="images/shop-dashboard.png"
                alt="Radius shop dashboard"
                className="h-full w-full object-cover"
                width={900}
                height={810}
                loading="lazy"
              />
            </PhoneMockup>
          </div>
        </div>
      </Container>
    </section>
  );
}


