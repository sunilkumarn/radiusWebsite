import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageLayout } from "@/components/ui/PageLayout";
import { SectionBlock } from "@/components/ui/SectionBlock";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <PageLayout
        title="How It Works"
        description="Radius connects customers with nearby businesses through a simple three-step process."
      >
        <SectionBlock title="1. Shops Join Radius">
          Local businesses create their shop profile and add basic information
          about their business such as location, category, and contact details.
        </SectionBlock>

        <SectionBlock title="2. Shops Share Updates">
          <div>
            <p>Shops can post updates such as:</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>New products</li>
              <li>Special offers</li>
              <li>Announcements</li>
              <li>Events</li>
              <li>Daily updates</li>
            </ul>
            <p className="mt-3">
              These updates become visible to nearby customers and followers.
            </p>
          </div>
        </SectionBlock>

        <SectionBlock title="3. Customers Discover and Connect">
          <div>
            <p>Customers browsing Radius can:</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Discover nearby businesses</li>
              <li>Follow businesses they like</li>
              <li>Send enquiries</li>
              <li>Call or visit the shop directly</li>
            </ul>
            <p className="mt-3">
              Radius makes it easier for local businesses to stay visible and
              connected with their community.
            </p>
          </div>
        </SectionBlock>
      </PageLayout>
      <Footer />
    </div>
  );
}

