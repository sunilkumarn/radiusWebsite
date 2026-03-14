import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageLayout } from "@/components/ui/PageLayout";
import { SectionBlock } from "@/components/ui/SectionBlock";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <PageLayout
        title="Disclaimer"
        description="Important information about the content and services on Radius."
      >
        <SectionBlock title="Disclaimer">
          <div className="space-y-4">
            <p>
              Radius provides a platform that allows customers to discover and
              communicate with local businesses.
            </p>
            <p>
              Radius does not own, operate, or control the businesses listed on
              the platform.
            </p>
            <p>
              Any products, services, or offers displayed by shops are the
              responsibility of the respective business owners.
            </p>
            <p>Radius is not responsible for:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>The accuracy of business information</li>
              <li>The quality of products or services</li>
              <li>Transactions between customers and businesses</li>
              <li>Disputes between users and businesses</li>
            </ul>
            <p>
              Users should exercise their own judgment when interacting with
              businesses listed on the platform.
            </p>
          </div>
        </SectionBlock>
      </PageLayout>
      <Footer />
    </div>
  );
}

