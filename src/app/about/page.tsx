import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { generatePageSEO } from "@/lib/seo";
import {
    Target,
    ShieldCheck,
    Cpu,
    Zap,
    Users,
    Code2,
    Lock,
    Globe,
    Search,
    RefreshCcw,
    Layers,
    FileCode
} from "lucide-react";

export const metadata: Metadata = generatePageSEO(
    "About",
    "Discover Nova's mission to engineer high-performance SaaS and Healthcare solutions through precision, partnership, and specialized domain expertise."
);

const pillars = [
    {
        title: "Precision Engineering",
        desc: "We don't believe in technical debt. Our team builds robust, clean, and maintainable systems designed to scale from day one.",
        icon: Cpu
    },
    {
        title: "Domain Insight",
        desc: "We speak the language of SaaS and Healthcare. We understand compliance, multi-tenancy, and high-stakes data integrity.",
        icon: ShieldCheck
    },
    {
        title: "Strategic Partnership",
        desc: "We operate as an extension of your team. Your business goals are our engineering requirements.",
        icon: Target
    }
];

const cultureValues = [
    { title: "Continuous Learning", icon: RefreshCcw, desc: "Our engineers stay at the cutting edge of the modern web stack." },
    { title: "Radical Transparency", icon: Search, desc: "Open communication, clear documentation, and no technical black boxes." },
    { title: "Security First", icon: Lock, desc: "Compliance and data protection are baked into our architectural DNA." },
    { title: "Agile Excellence", icon: Zap, desc: "Swift, iterative shipping without sacrificing quality or stability." }
];

const techStack = [
    "Next.js", "TypeScript", "Node.js", "PostgreSQL",
    "AWS", "Python", "Docker", "Tailwind CSS",
    "Stripe", "Auth0", "FHIR/HL7", "GraphQL"
];

export default function AboutPage() {
    return (
        <>
            {/* Mission Hero */}
            <Section className="bg-background pt-32 pb-20">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
                        Engineering with <span className="text-primary">Purpose</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                        Nova was founded to bridge the gap between complex business challenges and high-performance engineering. We help the world&apos;s most ambitious companies build software that lasts.
                    </p>
                </div>
            </Section>

            {/* The Three Pillars */}
            <Section className="bg-muted/10 border-y border-border">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {pillars.map((pillar, i) => (
                        <div key={i} className="space-y-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                <pillar.icon size={26} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">{pillar.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Our Story / Philosophy */}
            <Section className="bg-background pt-24 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            Behind the Architecture
                        </h2>
                        <div className="prose prose-lg text-muted-foreground space-y-6">
                            <p>
                                Nova isn&apos;t just another development shop. Our founding team came from high-stakes backgrounds in MedTech and FinTech, where we saw firsthand the cost of fragile software.
                            </p>
                            <p>
                                We realized that many agencies were built for &quot;shipping fast&quot; at the expense of longevity. We started Nova to prove that you can ship high-velocity products while maintaining the rigorous standards of enterprise engineering.
                            </p>
                            <p>
                                Today, we serve as a strategic partner to growth-stage startups and healthcare organizations, turning their most ambitious roadmaps into scalable reality.
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-square bg-muted/20 rounded-[3rem] border border-border p-12 flex flex-col justify-center overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
                        <div className="relative z-10 space-y-8 text-center lg:text-left">
                            <div className="flex justify-center lg:justify-start gap-4">
                                <Code2 className="text-primary" size={40} />
                                <Layers className="text-primary" size={40} />
                            </div>
                            <h4 className="text-2xl font-bold italic text-foreground/80 leading-tight">
                                &quot;We build the software we wish we had when we were in-house leaders.&quot;
                            </h4>
                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                {techStack.map((tech) => (
                                    <Badge key={tech} variant="outline" className="text-[10px] font-bold uppercase tracking-widest py-1 px-3">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Engineering Culture */}
            <Section className="bg-foreground text-background">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Engineering Culture
                    </h2>
                    <p className="text-xl opacity-70 leading-relaxed">
                        Our internal standards define the quality of the products we ship. We operate with an obsession for detail and a commitment to transparency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cultureValues.map((value, i) => (
                        <div key={i} className="p-8 border border-background/10 rounded-2xl bg-background/5 hover:bg-background/10 transition-colors">
                            <value.icon className="text-primary mb-6" size={24} />
                            <h4 className="text-lg font-bold mb-3">{value.title}</h4>
                            <p className="text-sm opacity-60 leading-relaxed">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Final Partnerships CTA */}
            <Section className="bg-background pt-24 pb-32">
                <div className="max-w-4xl mx-auto text-center bg-muted/30 rounded-3xl p-12 border border-border">
                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                        Looking for a long-term partner?
                    </h2>
                    <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
                        We don&apos;t just build apps; we build relationships. Join the companies that trust Nova with their core product engineering.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/contact" variant="primary" size="lg">
                            Start a Technical Partnership
                        </Button>
                        <Button href="/case-studies" variant="outline" size="lg">
                            See Our Impact
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
