import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/ui/PageLayout";
import { SectionBlock } from "@/components/ui/SectionBlock";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <PageLayout
        title="Features"
        description="Radius helps local shops stay connected with the people around them."
      >
        <SectionBlock>
          <p>
            Instead of relying on social media algorithms or expensive
            advertising, Radius allows nearby customers to discover shops,
            updates, and offers in their own neighborhood.
          </p>
        </SectionBlock>

        <SectionBlock title="Local Discovery">
          Customers can discover nearby shops and services in their area.
        </SectionBlock>

        <SectionBlock title="Shop Updates">
          Businesses can post updates, announcements, offers, and new arrivals
          for their followers.
        </SectionBlock>

        <SectionBlock title="Customer Enquiries">
          Customers can directly send enquiries to shops through the platform.
        </SectionBlock>

        <SectionBlock title="Instant Notifications">
          Shops receive notifications when customers interact with their posts
          or send enquiries.
        </SectionBlock>

        <SectionBlock title="Follow Local Shops">
          Customers can follow their favorite neighborhood businesses and
          receive updates.
        </SectionBlock>

        <SectionBlock title="Simple Communication">
          Customers can easily call, message, or visit a shop from within the
          platform.
        </SectionBlock>

        <SectionBlock>
          Radius is designed to make local commerce simpler, more visible, and
          more connected.
        </SectionBlock>
      </PageLayout>
      <Footer />
    </div>
  );
}

