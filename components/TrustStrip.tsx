import { Container } from "@/components/ui/Container";

export function TrustStrip() {
  return (
    <section className="bg-slate-50">
      <Container>
        <div className="py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium text-slate-600">
            <span>Simple</span>
            <span className="text-slate-300">•</span>
            <span>Private</span>
            <span className="text-slate-300">•</span>
            <span>No spam</span>
            <span className="text-slate-300">•</span>
            <span>Built for local communities</span>
          </div>
        </div>
      </Container>
    </section>
  );
}


