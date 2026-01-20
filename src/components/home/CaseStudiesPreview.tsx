import Section from "@/components/ui/Section";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import Button from "@/components/ui/Button";

const caseStudies = [
    {
        title: "Multi-Tenant SaaS Platform",
        industry: "SaaS",
        problem: "A startup needed a scalable platform to serve multiple enterprise clients with isolated data and custom branding.",
        outcome: "Delivered a secure, high-performance platform that onboarded 50+ clients in the first 6 months with 99.9% uptime.",
        tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
        title: "Healthcare Workflow Automation",
        industry: "Healthcare",
        problem: "Manual patient scheduling and record management was causing delays and errors in a busy clinic.",
        outcome: "Reduced administrative workload by 60% and improved patient satisfaction with automated scheduling and digital records.",
        tags: ["HIPAA Compliant", "Python", "React", "MySQL"],
    },
];

export default function CaseStudiesPreview() {
    return (
        <Section className="bg-background">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                    Featured Projects
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Real solutions delivering measurable results
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {caseStudies.map((study, index) => (
                    <CaseStudyCard key={index} {...study} />
                ))}
            </div>

            <div className="text-center">
                <Button href="/case-studies" variant="outline" size="lg">
                    View All Case Studies
                </Button>
            </div>
        </Section>
    );
}