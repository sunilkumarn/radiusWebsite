import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageLayout } from "@/components/ui/PageLayout";
import { SectionBlock } from "@/components/ui/SectionBlock";

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <PageLayout
        title="How to delete your account"
        description="Request deletion of your Radius account and associated data."
      >
        <SectionBlock>
          To delete your Radius account, please email our support team with a
          deletion request.
        </SectionBlock>

        <SectionBlock title="Steps">
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Send an email to{" "}
              <a
                className="font-medium text-slate-900 underline underline-offset-4 hover:text-slate-700"
                href="mailto:support@getradius.in"
              >
                support@getradius.in
              </a>
              .
            </li>
            <li>
              Use the subject line: <strong>Account Deletion Request</strong>.
            </li>
            <li>
              Include the phone number and business/shop name associated with
              your account.
            </li>
          </ol>
        </SectionBlock>

        <SectionBlock title="What happens next">
          We may ask you to verify account ownership before processing your
          request.
        </SectionBlock>
      </PageLayout>
      <Footer />
    </div>
  );
}

