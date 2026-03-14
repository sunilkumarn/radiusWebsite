import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageLayout } from "@/components/ui/PageLayout";
import { SectionBlock } from "@/components/ui/SectionBlock";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <PageLayout
        title="About Us"
        description="Radius helps local communities stay connected with the businesses around them."
      >
        <SectionBlock title="About Radius">
          <div className="space-y-4">
            <p>
              Radius was created to strengthen local communities by helping
              people discover and connect with the businesses around them.
            </p>
            <p>
              Local shops are an essential part of everyday life, but many
              struggle to stay visible in an increasingly digital world
              dominated by large platforms and complex advertising systems.
            </p>
            <p>Radius aims to simplify this.</p>
            <p>
              Our goal is to create a platform where local businesses can easily
              share updates, and customers can stay informed about what is
              happening in their neighborhood.
            </p>
            <p>
              By making local discovery simpler, Radius hopes to support small
              businesses and build stronger local economies.
            </p>
          </div>
        </SectionBlock>
      </PageLayout>
      <Footer />
    </div>
  );
}

