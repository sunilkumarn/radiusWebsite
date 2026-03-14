import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageLayout } from "@/components/ui/PageLayout";
import { SectionBlock } from "@/components/ui/SectionBlock";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <PageLayout
        title="Cookie Policy"
        description="How cookies and similar technologies may be used on Radius."
      >
        <SectionBlock>
          Radius may use cookies or similar technologies on its website to
          improve user experience and understand how visitors interact with the
          site.
        </SectionBlock>

        <SectionBlock>
          <p>Cookies may be used to:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Remember user preferences</li>
            <li>Improve website functionality</li>
            <li>Analyze website usage and performance</li>
          </ul>
        </SectionBlock>

        <SectionBlock>
          You may disable cookies through your browser settings. However, some
          parts of the website may not function properly if cookies are
          disabled.
        </SectionBlock>

        <SectionBlock>
          By continuing to use the website, you agree to the use of cookies as
          described in this policy.
        </SectionBlock>
      </PageLayout>
      <Footer />
    </div>
  );
}

