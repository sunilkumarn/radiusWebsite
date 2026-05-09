import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageLayout } from "@/components/ui/PageLayout";
import { SectionBlock } from "@/components/ui/SectionBlock";

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <PageLayout
        title="For Customers"
        description="Radius helps you discover what is happening around you."
      >
        <SectionBlock>
          Instead of searching across multiple apps or relying on word of mouth,
          Radius shows updates directly from nearby businesses and services.
        </SectionBlock>

        <SectionBlock title="With Radius you can:">
          <ul className="list-disc space-y-1 pl-5">
            <li>Discover businesses and services near you</li>
            <li>Follow businesses you care about</li>
            <li>Get updates on offers, new products, and announcements</li>
            <li>Send enquiries to businesses</li>
            <li>Call or visit businesses directly</li>
          </ul>
        </SectionBlock>

        <SectionBlock>
          Radius makes it easier to stay connected with the businesses in your
          neighborhood.
        </SectionBlock>
      </PageLayout>
      <Footer />
    </div>
  );
}

