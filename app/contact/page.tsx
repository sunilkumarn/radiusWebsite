import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageLayout } from "@/components/ui/PageLayout";
import { SectionBlock } from "@/components/ui/SectionBlock";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <PageLayout
        title="Contact"
        description="Questions, feedback, or partnerships — we’d love to hear from you."
      >
        <SectionBlock title="Get in touch">
          <div className="space-y-4">
            <p>
              If you have questions, feedback, or partnership enquiries, we
              would be happy to hear from you.
            </p>
            <p>
              Email:{" "}
              <a
                className="font-medium text-slate-900 underline underline-offset-4 hover:text-slate-700"
                href="mailto:support@getradius.in"
              >
                support@getradius.in
              </a>
            </p>
            <p>
              For platform support or technical issues, please include as much
              detail as possible so we can assist you quickly.
            </p>
          </div>
        </SectionBlock>
      </PageLayout>
      <Footer />
    </div>
  );
}

