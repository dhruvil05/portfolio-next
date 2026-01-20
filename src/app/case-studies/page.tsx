import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import CaseStudyList from "@/components/case-studies/CaseStudyList";
import { generatePageSEO } from "@/lib/seo";

export const metadata: Metadata = generatePageSEO(
    "Case Studies",
    "Explore how Nova engineers high-performance SaaS and Healthcare solutions. Proven results for complex technical challenges."
);

export default function CaseStudiesPage() {
    return (
        <>
            {/* Impact Hero */}
            <Section className="bg-background pt-32 pb-20">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
                        Proven <span className="text-primary">Impact</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                        We don&apos;t just deliver code—we deliver business outcomes. See how we&apos;ve helped industry leaders solve their most complex technical hurdles through specialized engineering.
                    </p>
                </div>
            </Section>

            {/* Project Listing with Filtering */}
            <Section className="bg-background pb-32">
                <CaseStudyList />
            </Section>

            {/* Success Story CTA */}
            <Section className="bg-foreground text-background py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-8">
                            Ready to build your success story?
                        </h2>
                        <p className="text-xl opacity-70 mb-10 leading-relaxed">
                            Every major achievement starts with a single technical conversation. Let&apos;s discuss your engineering goals and how we can help you scale.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 lg:justify-end">
                        <Button
                            href="/contact"
                            variant="primary"
                            size="lg"
                            className="bg-background text-foreground hover:bg-background/90 text-xl py-8 px-10"
                        >
                            Start Your Project
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
