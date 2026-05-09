import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageLayout } from "@/components/ui/PageLayout";
import { SectionBlock } from "@/components/ui/SectionBlock";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <PageLayout
        title="Privacy Policy"
        description="How Radius collects, uses, and protects information when you use the Radius Business App."
      >
        <SectionBlock>
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-semibold tracking-tight text-slate-900">
                Privacy Policy
              </div>
              <div className="mt-2 text-base text-slate-600">
                Last Updated: March 6, 2026
              </div>
            </div>

            <p>
              Radius (&quot;we&quot;)
              values your privacy. This Privacy Policy explains how we collect,
              use, and protect information when you use the Radius Business App.
            </p>
          </div>
        </SectionBlock>

        <SectionBlock title="1. Information We Collect">
          <div className="space-y-6">
            <p>
              We may collect the following information when you use the
              application:
            </p>

            <div>
              <div className="text-lg font-semibold text-slate-900">
                Account Information
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Business name</li>
                <li>Phone number</li>
                <li>Business category</li>
                <li>Login credentials</li>
              </ul>
            </div>

            <div>
              <div className="text-lg font-semibold text-slate-900">
                Business Information
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Business location</li>
                <li>Business description</li>
                <li>Posts or updates shared by the business</li>
              </ul>
            </div>

            <div>
              <div className="text-lg font-semibold text-slate-900">
                Communication Data
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Customer enquiries sent to your business</li>
                <li>Messages exchanged through the platform</li>
              </ul>
            </div>

            <div>
              <div className="text-lg font-semibold text-slate-900">
                Device Information
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Device type</li>
                <li>Operating system version</li>
                <li>App usage data</li>
              </ul>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock title="2. How We Use Information">
          <div className="space-y-4">
            <p>We use collected information to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Create and manage business accounts</li>
              <li>Enable customers to discover nearby businesses</li>
              <li>Deliver customer enquiries to businesses</li>
              <li>Send notifications about activity on your business</li>
              <li>Improve the platform and user experience</li>
              <li>Maintain platform security</li>
            </ul>
          </div>
        </SectionBlock>

        <SectionBlock title="3. Location Information">
          <div className="space-y-4">
            <p>Radius may use your business’s location to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Display your business to nearby customers</li>
              <li>Help customers discover local businesses</li>
            </ul>
            <p>Location information is used only for platform functionality.</p>
          </div>
        </SectionBlock>

        <SectionBlock title="4. Notifications">
          <div className="space-y-4">
            <p>The application may send push notifications regarding:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Customer enquiries</li>
              <li>Activity on your business posts</li>
              <li>Important updates about the platform</li>
            </ul>
            <p>You may disable notifications through your device settings.</p>
          </div>
        </SectionBlock>

        <SectionBlock title="5. Data Sharing">
          <div className="space-y-4">
            <p>We do <strong>not sell personal data</strong>.</p>
            <p>Information may be shared only in the following cases:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>With customers interacting with your business</li>
              <li>
                With service providers supporting the platform infrastructure
              </li>
              <li>If required by law or legal request</li>
            </ul>
          </div>
        </SectionBlock>

        <SectionBlock title="6. Data Security">
          <div className="space-y-4">
            <p>
              We take reasonable measures to protect data from unauthorized
              access, misuse, or disclosure.
            </p>
            <p>However, no online service can guarantee absolute security.</p>
          </div>
        </SectionBlock>

        <SectionBlock title="7. Data Retention">
          <div className="space-y-4">
            <p>
              We retain data only as long as necessary to operate the platform
              and comply with legal obligations.
            </p>
            <p>Users may request account deletion by contacting us.</p>
          </div>
        </SectionBlock>

        <SectionBlock title="8. Children's Privacy">
          <div className="space-y-4">
            <p>Radius is not intended for users under the age of 18.</p>
            <p>We do not knowingly collect information from minors.</p>
          </div>
        </SectionBlock>

        <SectionBlock title="9. Changes to Privacy Policy">
          <p>
            We may update this Privacy Policy periodically. Updates will be
            reflected with a revised date.
          </p>
        </SectionBlock>

        <SectionBlock title="10. Contact Us">
          <div className="space-y-3">
            <p>
              If you have questions about this Privacy Policy, please contact:
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
          </div>
        </SectionBlock>
      </PageLayout>
      <Footer />
    </div>
  );
}

