import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageLayout } from "@/components/ui/PageLayout";
import { SectionBlock } from "@/components/ui/SectionBlock";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <PageLayout
        title="Careers"
        description="We’re always interested in meeting people who care about technology and local communities."
      >
        <SectionBlock title="Careers">
          <div className="space-y-4">
            <p>
              Radius is an early-stage platform focused on building tools that
              help local communities stay connected with neighborhood
              businesses.
            </p>
            <p>
              We are always interested in meeting people who care about
              technology, local communities, and building simple products that
              solve real problems.
            </p>
            <p>
              While we may not have open positions at the moment, you are
              welcome to reach out if you believe you can contribute to the
              mission of Radius.
            </p>
            <div className="space-y-1">
              <p>Contact us at:</p>
              <a
                className="font-medium text-slate-900 underline underline-offset-4"
                href="mailto:support@getradius.in"
              >
                support@getradius.in
              </a>
            </div>
          </div>
        </SectionBlock>
      </PageLayout>
      <Footer />
    </div>
  );
}

