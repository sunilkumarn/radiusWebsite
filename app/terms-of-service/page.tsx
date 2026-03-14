import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageLayout } from "@/components/ui/PageLayout";
import { SectionBlock } from "@/components/ui/SectionBlock";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <PageLayout
        title="Terms and Conditions"
        description="Last Updated: March 6, 2026"
      >
        <SectionBlock title="Terms and Conditions">
          <div className="space-y-6">
            <div className="space-y-4">
              <p>Welcome to Radius.</p>
              <p>
                These Terms and Conditions govern your access to and use of the
                Radius mobile application for shop owners ("Shop App"). By
                creating an account or using the application, you agree to
                these Terms.
              </p>
              <p>
                If you do not agree to these Terms, please do not use the
                application.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900">
                1. About Radius
              </h3>
              <p>
                Radius is a platform that enables local businesses to connect
                with nearby customers. Shop owners can create profiles, post
                updates, receive enquiries from customers, and share information
                about their business.
              </p>
              <p>
                Radius does not directly sell products or services offered by
                shops.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900">
                2. Eligibility
              </h3>
              <p>To use the Shop App, you must:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Be at least 18 years old</li>
                <li>Be authorized to represent the business you register</li>
                <li>
                  Provide accurate and truthful information when creating your
                  account
                </li>
              </ul>
              <p>
                Radius reserves the right to suspend accounts that provide false
                or misleading information.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900">
                3. Shop Accounts
              </h3>
              <p>When you create a shop account, you may be asked to provide:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Business name</li>
                <li>Phone number</li>
                <li>Business location</li>
                <li>Category or type of business</li>
                <li>Additional shop information</li>
              </ul>
              <p>
                You are responsible for maintaining the accuracy of your shop
                information.
              </p>
              <p>
                You are also responsible for maintaining the security of your
                login credentials.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900">
                4. Business Listings and Content
              </h3>
              <p>
                Shop owners may post updates, announcements, offers, and other
                business-related content.
              </p>
              <p>By posting content, you agree that:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>The content is accurate and lawful</li>
                <li>You have the right to share the content</li>
                <li>The content does not violate any laws or third-party rights</li>
              </ul>
              <p>Radius may remove content that:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Is misleading or fraudulent</li>
                <li>Promotes illegal products or services</li>
                <li>Contains offensive or harmful material</li>
                <li>Violates platform policies</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900">
                5. Customer Enquiries
              </h3>
              <p>Customers may contact shops through the platform.</p>
              <p>
                Radius only facilitates communication and is{" "}
                <strong>not responsible for</strong>:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Any agreements between customers and shops</li>
                <li>Product quality</li>
                <li>Delivery or service issues</li>
                <li>Payment disputes</li>
              </ul>
              <p>
                All transactions and interactions are the responsibility of the
                shop and the customer.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900">
                6. Notifications
              </h3>
              <p>Radius may send notifications to shop owners regarding:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Customer enquiries</li>
                <li>Activity related to their shop</li>
                <li>Platform updates or announcements</li>
              </ul>
              <p>
                You may manage notification preferences within the application
                where applicable.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900">
                7. Prohibited Activities
              </h3>
              <p>You agree not to use the platform to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Post fraudulent business information</li>
                <li>Harass or spam users</li>
                <li>Misrepresent your business</li>
                <li>Collect user data without consent</li>
                <li>Attempt to disrupt or hack the platform</li>
              </ul>
              <p>
                Violation of these rules may result in account suspension or
                termination.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900">
                8. Platform Availability
              </h3>
              <p>
                Radius may update, modify, or temporarily suspend the service
                for maintenance or improvements.
              </p>
              <p>
                We do not guarantee uninterrupted availability of the platform.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900">
                9. Termination
              </h3>
              <p>Radius may suspend or terminate accounts if:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Terms are violated</li>
                <li>Fraudulent or harmful activity is detected</li>
                <li>The platform is misused</li>
              </ul>
              <p>Users may stop using the service at any time.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900">
                10. Limitation of Liability
              </h3>
              <p>Radius provides the platform "as is".</p>
              <p>Radius is not responsible for:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Business losses</li>
                <li>Customer disputes</li>
                <li>Data loss due to technical failures</li>
                <li>Indirect or consequential damages</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900">
                11. Changes to Terms
              </h3>
              <p>
                We may update these Terms periodically. Continued use of the app
                after updates constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900">
                12. Contact
              </h3>
              <p>
                If you have any questions regarding these Terms, you may contact
                us at:
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
          </div>
        </SectionBlock>
      </PageLayout>
      <Footer />
    </div>
  );
}

