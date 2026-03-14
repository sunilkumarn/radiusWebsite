import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageLayout } from "@/components/ui/PageLayout";
import { SectionBlock } from "@/components/ui/SectionBlock";

export default function ShopsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <PageLayout
        title="For Shops"
        description="Radius helps local businesses stay visible to nearby customers."
      >
        <SectionBlock>
          Many shops struggle to reach customers online without spending heavily
          on advertising or managing complex social media pages.
        </SectionBlock>

        <SectionBlock title="Radius provides a simple platform where shops can:">
          <ul className="list-disc space-y-1 pl-5">
            <li>Create a shop profile</li>
            <li>Share updates with nearby customers</li>
            <li>Receive customer enquiries</li>
            <li>Build a local follower base</li>
            <li>Communicate directly with customers</li>
          </ul>
        </SectionBlock>

        <SectionBlock>
          Radius is designed especially for small and local businesses that want
          a simple way to stay connected with their community.
        </SectionBlock>
      </PageLayout>
      <Footer />
    </div>
  );
}

