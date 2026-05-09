import { Container } from "@/components/ui/Container";

export function HowItWorks() {
  return (
    <section className="bg-[#EAF7F0]" id="how-it-works">
      <Container>
        <div className="py-24">
          <div className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
            <p>
              Radius connects customers with nearby businesses through a simple
              three-step process.
            </p>

            <div className="mt-10 space-y-10">
              <div>
                <div className="text-xl font-semibold text-gray-900">
                  <span className="font-semibold">1.</span> Businesses Join Radius
                </div>
                <p className="mt-3 text-gray-700">
                  Local businesses create their business profile and add basic
                  information about their business such as location, category,
                  and contact details.
                </p>
              </div>

              <div>
                <div className="text-xl font-semibold text-gray-900">
                  <span className="font-semibold">2.</span> Businesses Share Updates
                </div>
                <p className="mt-3 text-gray-700">Shops can post updates such as:</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
                  <li>New products</li>
                  <li>Special offers</li>
                  <li>Announcements</li>
                  <li>Events</li>
                  <li>Daily updates</li>
                </ul>
                <p className="mt-3 text-gray-700">
                  These updates become visible to nearby customers and followers.
                </p>
              </div>

              <div>
                <div className="text-xl font-semibold text-gray-900">
                  <span className="font-semibold">3.</span> Customers Discover and
                  Connect
                </div>
                <p className="mt-3 text-gray-700">
                  Customers browsing Radius can:
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
                  <li>Discover nearby businesses</li>
                  <li>Follow businesses they like</li>
                  <li>Send enquiries</li>
                  <li>Call or visit the shop directly</li>
                </ul>
                <p className="mt-3 text-gray-700">
                  Radius makes it easier for local businesses to stay visible and
                  connected with their community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


